<?php
try {
    $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=sanmati_journal', 'root', '123456789');
    echo "Connected successfully to MySQL via PDO!\n";
    $query = $pdo->query('SHOW TABLES');
    print_r($query->fetchAll(PDO::FETCH_COLUMN));
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage() . "\n";
    // Check available drivers
    echo "Available drivers: " . implode(', ', PDO::getAvailableDrivers()) . "\n";
}
