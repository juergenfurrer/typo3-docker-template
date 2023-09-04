<?php
defined('TYPO3') || die('Access denied.');

call_user_func(
    function () {
        // Page-Config
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
TCEFORM.tt_content {
    layout {
        altLabels {
            0 = Default
            1 = Full width
            2 = Full width and height
        }
        removeItems = 3
    }
}');
    }
);
