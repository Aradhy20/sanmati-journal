<?php
try {
    $pdo = new PDO("pgsql:host=127.0.0.1;port=5432;dbname=sanmati_journal", "postgres", "123456789");
    echo "Database connection successful!";
} catch (PDOException $e) {
    echo "Database connection failed: " . $e->getMessage();
}
