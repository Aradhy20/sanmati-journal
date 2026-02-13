<?php
try {
    $pdo = new PDO('pgsql:host=127.0.0.1;port=5432;dbname=sanmati_journal', 'postgres', '123456789');
    echo "DB Connection Successful";
} catch (PDOException $e) {
    echo "DB Connection Failed: " . $e->getMessage();
}
?>
