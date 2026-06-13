<?php
// Debug: index.php loaded
// echo "mb_split exists: " . (function_exists('mb_split') ? 'YES' : 'NO') . "<br>";

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Resolve sanmati-core path dynamically
$corePath = realpath(__DIR__ . '/../sanmati-core') ?: realpath(__DIR__ . '/../../sanmati-core') ?: realpath(__DIR__ . '/../../../sanmati-core') ?: __DIR__ . '/../sanmati-core';

// Auto-create Laravel storage directories if they are missing
$storageDirs = [
    $corePath . '/storage/framework/cache/data',
    $corePath . '/storage/framework/sessions',
    $corePath . '/storage/framework/views',
    $corePath . '/storage/app/public',
];
foreach ($storageDirs as $dir) {
    if (!file_exists($dir)) {
        @mkdir($dir, 0775, true);
    }
}

// DEBUG ROUTE: Check DB status and flag files
if (isset($_GET['debug_db'])) {
    try {
        if (isset($_GET['debug_dir'])) {
            echo "<h3>Paths Debug:</h3>";
            echo "__DIR__: " . __DIR__ . "<br>";
            echo "Realpath __DIR__: " . realpath(__DIR__) . "<br>";
            echo "Realpath __DIR__/..: " . realpath(__DIR__ . '/..') . "<br>";
            echo "Realpath __DIR__/../..: " . realpath(__DIR__ . '/../..') . "<br>";
            echo "<h3>Checking potential .env locations:</h3><pre>";
            $pathsToCheck = [
                __DIR__ . '/.env',
                __DIR__ . '/../.env',
                __DIR__ . '/../../.env',
                __DIR__ . '/../sanmati-core/.env',
                __DIR__ . '/../../../.env',
            ];
            foreach ($pathsToCheck as $p) {
                $rp = realpath($p);
                echo "Path: {$p}\n";
                echo "Realpath: " . ($rp ? $rp : 'NO_REALPATH') . "\n";
                echo "Exists: " . (file_exists($p) ? 'YES' : 'NO') . "\n";
                echo "Readable: " . (is_readable($p) ? 'YES' : 'NO') . "\n";
                echo "Writable: " . (is_writable($p) ? 'YES' : 'NO') . "\n\n";
            }
            echo "</pre>";
        }
        $envFile = $corePath . '/.env';
        $env = [];
        echo "<h3>Environment File Debug:</h3>";
        echo "Path: " . realpath($envFile) . "<br>";
        echo "Exists: " . (file_exists($envFile) ? 'YES' : 'NO') . "<br>";
        echo "Readable: " . (is_readable($envFile) ? 'YES' : 'NO') . "<br>";
        if (file_exists($envFile)) {
            echo "Filesize: " . filesize($envFile) . " bytes<br>";
            if (isset($_GET['update_env'])) {
                if (is_writable($envFile)) {
                    $envContent = file_get_contents($envFile);
                    if (preg_match('/^APP_NAME=.*/m', $envContent)) {
                        $envContent = preg_replace('/^APP_NAME=.*/m', 'APP_NAME="Sanmati Spectrum of Knowledge & Emerging Discourse"', $envContent);
                    } else {
                        $envContent .= "\nAPP_NAME=\"Sanmati Spectrum of Knowledge & Emerging Discourse\"\n";
                    }
                    file_put_contents($envFile, $envContent);
                    echo "<strong>Success: APP_NAME updated in .env!</strong><br>";
                } else {
                    echo "<strong>Error: .env is not writable!</strong><br>";
                }
                $output = [];
                $retval = null;
                exec('php "' . $corePath . '/artisan" config:clear 2>&1', $output, $retval);
                echo "Config Clear Output: " . implode("<br>", $output) . " (Ret: {$retval})<br>";
            }
            $envLines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($envLines as $line) {
                if (strpos(trim($line), '#') === 0) continue;
                if (strpos($line, '=') !== false) {
                    [$key, $val] = explode('=', $line, 2);
                    $env[trim($key)] = trim($val, " \t\n\r\0\x0B\"'");
                }
            }
            echo "Parsed Keys: " . implode(', ', array_keys($env)) . "<br>";
            echo "DB_HOST: " . ($env['DB_HOST'] ?? 'NOT SET') . "<br>";
            echo "DB_USERNAME: " . ($env['DB_USERNAME'] ?? 'NOT SET') . "<br>";
            echo "DB_DATABASE: " . ($env['DB_DATABASE'] ?? 'NOT SET') . "<br>";
        }
        $pdo = new PDO(
            "mysql:host=" . ($env['DB_HOST'] ?? '127.0.0.1') . ";port=" . ($env['DB_PORT'] ?? '3306') . ";dbname=" . ($env['DB_DATABASE'] ?? 'sanmati_journal') . ";charset=utf8mb4",
            $env['DB_USERNAME'] ?? 'root',
            $env['DB_PASSWORD'] ?? ''
        );
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Let's also run the update query directly here in case it hasn't run!
        $updated = $pdo->exec("UPDATE papers SET authors = 'सचिन कुमार & डॉ. एस. पद्मप्रिया' WHERE authors LIKE '%सिचन कुमार%'");
        
        $stmt = $pdo->query("SELECT id, title, authors FROM papers WHERE authors LIKE '%पद्मप्रिया%' OR authors LIKE '%सिचन%' OR authors LIKE '%सचिन%'");
        $papers = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $_fixFlag = $corePath . '/storage/framework/cache/db_fix_applied_v4.flag';
        $flagContent = file_exists($_fixFlag) ? file_get_contents($_fixFlag) : 'NOT_EXISTS';
        
        echo "<h3>MySQL Update Result:</h3><pre>Updated {$updated} row(s).</pre>";
        echo "<h3>Flag file content:</h3><pre>{$flagContent}</pre>";
        echo "<h3>Matching papers:</h3><pre>" . print_r($papers, true) . "</pre>";
    } catch (\Throwable $e) {
        echo "<h3>Error:</h3><pre>" . $e->getMessage() . "</pre>";
    }
    exit;
}

// ONE-TIME DB FIX: Update Vol 2 Issue 2 month_range + fix paper count + author spelling
// This block runs once and then removes itself via the flag file
$_fixFlag = $corePath . '/storage/framework/cache/db_fix_applied_v4.flag';
if (!file_exists($_fixFlag)) {
    try {
        // Load env to get DB credentials
        $envFile = $corePath . '/.env';
        if (file_exists($envFile)) {
            $envLines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            $env = [];
            foreach ($envLines as $line) {
                if (strpos(trim($line), '#') === 0) continue;
                if (strpos($line, '=') !== false) {
                    [$key, $val] = explode('=', $line, 2);
                    $env[trim($key)] = trim($val, " \t\n\r\0\x0B\"'");
                }
            }
            // Exclusively use MySQL database connection as requested by the user
            $pdo = new PDO(
                "mysql:host=" . ($env['DB_HOST'] ?? '127.0.0.1') . ";port=" . ($env['DB_PORT'] ?? '3306') . ";dbname=" . ($env['DB_DATABASE'] ?? 'sanmati_journal') . ";charset=utf8mb4",
                $env['DB_USERNAME'] ?? 'root',
                $env['DB_PASSWORD'] ?? ''
            );
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Fix Vol 2 Issue 2 month_range
            $pdo->exec("UPDATE issues SET month_range = 'April \xe2\x80\x93 June' WHERE volume = '2' AND number = '2'");
            // Fix paper count: remove compilation paper if total > 80
            $count = $pdo->query("SELECT COUNT(*) FROM papers")->fetchColumn();
            if ($count > 80) {
                $pdo->exec("DELETE FROM papers WHERE category = 'Complete Issue Book'");
            }
            // Fix author name spelling from सिचन कुमार to सचिन कुमार
            $pdo->exec("UPDATE papers SET authors = 'सचिन कुमार & डॉ. एस. पद्मप्रिया' WHERE authors LIKE '%सिचन कुमार%'");
        }
        // Write flag so this never runs again
        @file_put_contents($_fixFlag, date('Y-m-d H:i:s'));
    } catch (\Throwable $e) {
        // Silently fail - don't break the site
        @file_put_contents($_fixFlag, 'error: ' . $e->getMessage());
    }
}

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = $corePath.'/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require $corePath.'/vendor/autoload.php';

// Bootstrap the application and handle the request...
(require_once $corePath.'/bootstrap/app.php')
    ->handleRequest(Request::capture());
