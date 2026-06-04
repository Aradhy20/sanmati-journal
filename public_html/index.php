<?php
// Debug: index.php loaded
// echo "mb_split exists: " . (function_exists('mb_split') ? 'YES' : 'NO') . "<br>";

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// ONE-TIME DB FIX: Update Vol 2 Issue 2 month_range + fix paper count
// This block runs once and then removes itself via the flag file
$_fixFlag = __DIR__ . '/../sanmati-core/storage/framework/cache/db_fix_applied.flag';
if (!file_exists($_fixFlag)) {
    try {
        // Load env to get DB credentials
        $envFile = __DIR__ . '/../sanmati-core/.env';
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
            $dbConn = $env['DB_CONNECTION'] ?? 'sqlite';
            if ($dbConn === 'mysql') {
                $pdo = new PDO(
                    "mysql:host={$env['DB_HOST']};port={$env['DB_PORT']};dbname={$env['DB_DATABASE']};charset=utf8mb4",
                    $env['DB_USERNAME'],
                    $env['DB_PASSWORD'] ?? ''
                );
            } else {
                $dbPath = $env['DB_DATABASE'] ?? __DIR__ . '/../sanmati-core/database/database.sqlite';
                $pdo = new PDO("sqlite:{$dbPath}");
            }
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Fix Vol 2 Issue 2 month_range
            $pdo->exec("UPDATE issues SET month_range = 'April \xe2\x80\x93 June' WHERE volume = '2' AND number = '2'");
            // Fix paper count: remove compilation paper if total > 80
            $count = $pdo->query("SELECT COUNT(*) FROM papers")->fetchColumn();
            if ($count > 80) {
                $pdo->exec("DELETE FROM papers WHERE category = 'Complete Issue Book'");
            }
        }
        // Write flag so this never runs again
        file_put_contents($_fixFlag, date('Y-m-d H:i:s'));
    } catch (\Throwable $e) {
        // Silently fail - don't break the site
        file_put_contents($_fixFlag, 'error: ' . $e->getMessage());
    }
}

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../sanmati-core/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../sanmati-core/vendor/autoload.php';

// Bootstrap the application and handle the request...
(require_once __DIR__.'/../sanmati-core/bootstrap/app.php')
    ->handleRequest(Request::capture());
