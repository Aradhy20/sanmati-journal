<?php
// One-time fix script: Update Vol 2 Issue 2 month_range to April – June
// DELETE THIS FILE after running it!

use Illuminate\Http\Request;
define('LARAVEL_START', microtime(true));

if (file_exists($maintenance = __DIR__.'/../sanmati-core/storage/framework/maintenance.php')) {
    require $maintenance;
}

require __DIR__.'/../sanmati-core/vendor/autoload.php';

$app = require_once __DIR__.'/../sanmati-core/bootstrap/app.php';

// Boot the app to get DB access
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$db = $app->make('db');

// Run the fix
$updated = $db->table('issues')
    ->where('volume', '2')
    ->where('number', '2')
    ->update(['month_range' => 'April – June']);

// Verify
$issues = $db->table('issues')->orderBy('volume')->orderBy('number')->get(['id','volume','number','month_range']);

echo "<h2>Database Fix Result</h2>";
echo "<p>Rows updated: <strong>{$updated}</strong></p>";
echo "<h3>Current Issues:</h3><ul>";
foreach ($issues as $issue) {
    echo "<li>Vol {$issue->volume} Issue {$issue->number}: <strong>{$issue->month_range}</strong></li>";
}
echo "</ul>";
echo "<p style='color:red'><strong>IMPORTANT: Delete this file (fix_issue_date.php) from public_html after running!</strong></p>";
