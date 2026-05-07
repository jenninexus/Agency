# _audit-common.ps1 - Shared utilities for AI Agent Agency audit scripts
# Source this at the top of every audit script:
#   . "$PSScriptRoot\_audit-common.ps1"

# ============================================================================
# CONFIGURATION
# ============================================================================

# Try to load .env if it exists
$envFile = Join-Path (Split-Path $PSScriptRoot -Parent) ".env"
if (Test-Path $envFile) {
    Get-Content $envFile | ForEach-Object {
        if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
            [Environment]::SetEnvironmentVariable($matches[1].Trim(), $matches[2].Trim(), "Process")
        }
    }
}

# Discover project root (parent of scripts/ directory)
$script:ProjectRoot = if ($env:PROJECT_ROOT) { $env:PROJECT_ROOT } else { Split-Path (Split-Path $PSScriptRoot -Parent) -Parent }

# Standard paths (override via .env or env vars)
$script:AgentConfig = if ($env:AGENT_CONFIG) { $env:AGENT_CONFIG } else { Join-Path $ProjectRoot ".vscode\mcp.json" }
$script:AuditsDir = if ($env:AUDITS_DIR) { $env:AUDITS_DIR } else { Join-Path $ProjectRoot "audits" }
$script:AgentsDir = if ($env:AGENTS_DIR) { $env:AGENTS_DIR } else { Join-Path $ProjectRoot "agents" }

# ============================================================================
# FORMATTING UTILITIES
# ============================================================================

function Write-AuditHeader {
    param(
        [string]$AgentName,
        [string]$AgentEmoji = "",
        [string]$AuditTitle = "Audit Report"
    )
    $date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $separator = "=" * 70
    Write-Host ""
    Write-Host $separator -ForegroundColor Cyan
    Write-Host "  $AgentEmoji $AgentName - $AuditTitle" -ForegroundColor White
    Write-Host "  Generated: $date" -ForegroundColor DarkGray
    Write-Host $separator -ForegroundColor Cyan
    Write-Host ""
}

function Write-AuditFooter {
    param(
        [int]$Passed,
        [int]$Warnings,
        [int]$Failed,
        [int]$Total
    )
    $separator = "=" * 70
    Write-Host ""
    Write-Host $separator -ForegroundColor Cyan
    Write-Host "  AUDIT SUMMARY" -ForegroundColor White
    Write-Host $separator -ForegroundColor Cyan

    $passColor = if ($Passed -eq $Total) { "Green" } else { "Yellow" }
    Write-Host "  Passed:   $Passed/$Total" -ForegroundColor $passColor

    if ($Warnings -gt 0) {
        Write-Host "  Warnings: $Warnings" -ForegroundColor Yellow
    }
    if ($Failed -gt 0) {
        Write-Host "  Failed:   $Failed" -ForegroundColor Red
    }

    $compliance = if ($Total -gt 0) { [math]::Round(($Passed / $Total) * 100) } else { 0 }
    Write-Host "  Compliance: $compliance%" -ForegroundColor $passColor
    Write-Host ""
}

function Write-CheckResult {
    param(
        [string]$Item,
        [string]$Status,  # PASS, WARN, FAIL, INFO
        [string]$Message = ""
    )
    $icon = switch ($Status) {
        "PASS" { "✅" }
        "WARN" { "⚠️ " }
        "FAIL" { "❌" }
        "INFO" { "ℹ️ " }
        default { "  " }
    }
    $color = switch ($Status) {
        "PASS" { "Green" }
        "WARN" { "Yellow" }
        "FAIL" { "Red" }
        "INFO" { "Cyan" }
        default { "White" }
    }

    $line = "  $icon $Item"
    if ($Message) { $line += " - $Message" }
    Write-Host $line -ForegroundColor $color
}

# ============================================================================
# FILE SCANNING UTILITIES
# ============================================================================

function Get-SourceFiles {
    param(
        [string]$Path,
        [string[]]$Include = @("*.php", "*.html", "*.css", "*.js"),
        [string[]]$Exclude = @("node_modules", "vendor", ".git", "*.min.*")
    )
    Get-ChildItem -Path $Path -Recurse -Include $Include -File | Where-Object {
        $file = $_
        -not ($Exclude | Where-Object { $file.FullName -like "*$_*" })
    }
}

function Search-FileContent {
    param(
        [string]$FilePath,
        [string]$Pattern,
        [switch]$CaseSensitive
    )
    $params = @{
        Path = $FilePath
        Pattern = $Pattern
    }
    if (-not $CaseSensitive) {
        $params.Add("CaseSensitive", $false)
    }
    Select-String @params
}

# ============================================================================
# REPORT GENERATION
# ============================================================================

function New-AuditReport {
    param(
        [string]$AgentName,
        [string]$AgentRole,
        [string]$ScriptPath,
        [string]$OutputPath
    )

    $date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $header = @"
# $AgentName Audit Report

**Generated:** $date
**Agent:** $AgentName ($AgentRole)
**Script:** ``$ScriptPath``

---

"@
    return $header
}

function Save-AuditReport {
    param(
        [string]$Content,
        [string]$OutputPath,
        [switch]$AppendHistory
    )

    if ($AppendHistory -and (Test-Path $OutputPath)) {
        $existing = Get-Content $OutputPath -Raw
        $Content = $Content + "`n---`n`n# Previous Run`n`n" + $existing
    }

    Set-Content -Path $OutputPath -Value $Content -Encoding UTF8
    Write-Host "  Report saved to: $OutputPath" -ForegroundColor DarkGray
}

# ============================================================================
# AGENT CONFIG UTILITIES
# ============================================================================

function Get-AgentConfig {
    param([string]$AgentKey)

    if (-not (Test-Path $script:AgentConfig)) {
        Write-Warning "Agent config not found: $script:AgentConfig"
        return $null
    }

    $config = Get-Content $script:AgentConfig -Raw | ConvertFrom-Json
    if ($AgentKey) {
        return $config.agents.$AgentKey
    }
    return $config
}

function Get-TodayAgent {
    $dayOfWeek = (Get-Date).DayOfWeek
    $config = Get-AgentConfig
    if (-not $config) { return $null }

    foreach ($agent in $config.agents.PSObject.Properties) {
        if ($agent.Value.audit_day -eq $dayOfWeek.ToString()) {
            return $agent.Value
        }
    }
    return $null
}

# ============================================================================
# EXPORT
# ============================================================================

Write-Verbose "Loaded _audit-common.ps1 (Project: $script:ProjectRoot)"
