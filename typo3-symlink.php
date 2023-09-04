<?php
removeLink("index.php");
removeLink("typo3");
removeLink("typo3_src");

createLink("../typo3_src-11.5.30", "typo3_src");
createLink("typo3_src/typo3", "typo3");
createLink("typo3_src/index.php", "index.php");

function removeLink(string $link) {
    if (file_exists($link)) {
        if (unlink($link)) {
            echo "Successfully deleted '{$link}'<br />";
        } else {
            echo "Failed to delete '{$link}'<br />";
        }
    }
}

function createLink(string $path, string $link) {
    if (symlink($path, $link)) {
        echo "Successfully created '{$link}<br />";
    } else {
        echo "Failed to create '{$link}'<br />";
    }
}
