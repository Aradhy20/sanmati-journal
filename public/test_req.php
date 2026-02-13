<?php
echo "PHP Version: " . phpversion() . "<br>";
echo "php.ini loaded: " . php_ini_loaded_file() . "<br>";
echo "PDO Available Drivers: " . implode(', ', PDO::getAvailableDrivers()) . "<br>";
echo "mbstring loaded: " . (extension_loaded('mbstring') ? 'Yes' : 'No') . "<br>";
echo "openssl loaded: " . (extension_loaded('openssl') ? 'Yes' : 'No') . "<br>";
