<?php
$host = '127.0.0.1';
$port = '3306';
$user = 'root';
$pass = ''; // Try empty first, often default
$db   = 'sanmati_journal';

echo "1. Testing connection to MySQL server (root/empty)...\n";
try {
    $pdo = new PDO("mysql:host=$host;port=$port", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "   [SUCCESS] Connected to MySQL server.\n";
    
    // Check DB exists
    $stmt = $pdo->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$db'");
    if ($stmt->fetch()) {
        echo "   [SUCCESS] Database '$db' found.\n";
    } else {
        echo "   [WARNING] Database '$db' does NOT exist. Attempting creation...\n";
        $pdo->exec("CREATE DATABASE `$db`");
        echo "   [SUCCESS] Database '$db' created.\n";
    }

} catch (PDOException $e) {
    echo "   [ERROR] Connection failed (root/empty): " . $e->getMessage() . "\n";
    
    // Try with user's provided password
    echo "2. Retrying with password '123456789'...\n";
    try {
        $pdo = new PDO("mysql:host=$host;port=$port", $user, '123456789');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "   [SUCCESS] Connected to MySQL server with password.\n";
         // Check DB exists
        $stmt = $pdo->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$db'");
        if ($stmt->fetch()) {
            echo "   [SUCCESS] Database '$db' found.\n";
        } else {
            echo "   [WARNING] Database '$db' does NOT exist. Attempting creation...\n";
            $pdo->exec("CREATE DATABASE `$db`");
            echo "   [SUCCESS] Database '$db' created.\n";
        }
    } catch (PDOException $e2) {
         echo "   [ERROR] Connection failed (root/123456789): " . $e2->getMessage() . "\n";
    }
}
?>
