<?php
defined('TYPO3') || die('Access denied.');

call_user_func(
    function ($extKey) {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript', 'CustomExt');
    },
    'customext'
);
