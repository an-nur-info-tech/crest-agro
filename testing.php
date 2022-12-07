<?php
//ini_get('display_errors', 2);

if (ini_get('display_errors')) {
    ini_set('display_errors', '8');
}

echo ini_get('display_errors');
?>