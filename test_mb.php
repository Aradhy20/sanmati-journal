<?php
echo "mbstring extension loaded: " . (extension_loaded('mbstring') ? 'YES' : 'NO') . "\n";
echo "mb_split function exists: " . (function_exists('mb_split') ? 'YES' : 'NO') . "\n";
if (function_exists('mb_split')) {
    echo "mb_split test: " . print_r(mb_split('\s', 'hello world'), true) . "\n";
}
