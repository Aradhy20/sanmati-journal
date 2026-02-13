<?php
header('Content-Type: text/plain');
echo "PHP Version: " . phpversion() . "\n";
echo "Loaded Configuration File: " . php_ini_loaded_file() . "\n";
echo "mbstring extension: " . (extension_loaded('mbstring') ? 'LOADED' : 'NOT LOADED') . "\n";
echo "mb_split function: " . (function_exists('mb_split') ? 'EXISTS' : 'MISSING') . "\n";
if (extension_loaded('mbstring')) {
    echo "mbstring.language: " . ini_get('mbstring.language') . "\n";
}
echo "Full Extensions List:\n";
print_r(get_loaded_extensions());
