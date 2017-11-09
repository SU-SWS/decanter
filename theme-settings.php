<?php

/**
 * @file
 * Provides an additional config form for theme settings.
 */

use Drupal\Core\Form\FormStateInterface;

// Set theme name to use in the key values.
$theme_name = \Drupal::theme()->getActiveTheme()->getName();

/**
 * Implements hook_form_system_theme_settings_alter().
 *
 * Form override for theme settings.
 */
function stanford_basic_form_system_theme_settings_alter(array &$form, FormStateInterface $form_state) {
  $form['options_settings'] = [
    '#type' => 'fieldset',
    '#title' => t('Theme Specific Settings'),
  ];

  // BrowserSync support.
  $form['options_settings']['stanford_basic_browser_sync'] = [
    '#type' => 'fieldset',
    '#title' => t('BrowserSync Settings'),
  ];
  $form['options_settings']['stanford_basic_browser_sync']['browser_sync']['#tree'] = TRUE;
  $form['options_settings']['stanford_basic_browser_sync']['browser_sync']['enabled'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable BrowserSync support for theme'),
    '#default_value' => theme_get_setting('browser_sync.enabled'),
    '#description' => t("Checking this box will automatically add the BrowserSync JS to your theme for development."),
  ];

  $form['options_settings']['stanford_basic_browser_sync']['browser_sync']['host'] = [
    '#type' => 'textfield',
    '#title' => t('BrowserSync host'),
    '#default_value' => theme_get_setting('browser_sync.host'),
    '#description' => t("Default: localhost. Enter 'HOST' which will be replaced by your site's hostname."),
    '#states' => [
      'visible' => [':input[name="browser_sync[enabled]"]' => ['checked' => TRUE]],
    ],
  ];

  $form['options_settings']['stanford_basic_browser_sync']['browser_sync']['port'] = [
    '#type' => 'number',
    '#title' => t('Enable BrowserSync support for theme'),
    '#default_value' => theme_get_setting('browser_sync.port'),
    '#description' => t("Default: '3000'."),
    '#states' => [
      'visible' => [':input[name="browser_sync[enabled]"]' => ['checked' => TRUE]],
    ],
  ];

  // IE specific settings.
  $form['options_settings']['stanford_basic_ie'] = [
    '#type' => 'fieldset',
    '#title' => t('Internet Explorer Stylesheets'),
  ];
  $form['options_settings']['stanford_basic_ie']['ie_enabled'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable Internet Explorer stylesheets in theme'),
    '#default_value' => theme_get_setting('ie_enabled'),
    '#description' => t('If you check this box you can choose which IE stylesheets in theme get rendered on display.'),
  ];
  $form['options_settings']['stanford_basic_ie']['ie_enabled_css'] = [
    '#type' => 'fieldset',
    '#title' => t('Which IE versions you want to enable ".lt-ie" CSS classes'),
    '#states' => [
      'visible' => [':input[name="ie_enabled"]' => ['checked' => TRUE]],
    ],
  ];
  $form['options_settings']['stanford_basic_ie']['ie_enabled_css']['ie_enabled_versions'] = [
    '#type' => 'checkboxes',
    '#options' => [
      'ie8' => t('Internet Explorer 8'),
      'ie9' => t('Internet Explorer 9'),
    ],
    '#default_value' => array_keys(array_filter(theme_get_setting('ie_enabled_versions') ?: [])) ?: [],
  ];
}
