<?php
require 'lib.php';
require 'constants.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page title</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="<?= SITE_DIR ?>favicon.ico" rel="shortcut icon" type="image/x-icon" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH . '/dist/css/main.css' ?>" />
</head>
<body>
<? echo file_get_contents("../../img/svg-sprites/common.svg"); ?>
<header class="header">
  <div class="header__top">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>

  <div class="container">
    <div class="header__body">
      <div class="header__hamb">
        <button class="header__hamb_btn" type="button"></button>
      </div>

      <div>
        <button class="btn" type="button">
          <svg class="header__icon">
            <use xlink:href="#search"></use>
          </svg>
        </button>
      </div>

      <div class="">
        <a href="<?= SITE_DIR . "main.php"; ?>">
          <img class="header__logo" src="../../img/logo.png" alt="">
        </a>
      </div>

      <button class="btn" type="button">
        <svg class="header__icon">
          <use xlink:href="#phone"></use>
        </svg>
      </button>

      <button class="btn" type="button">
        <svg class="header__basket_icon">
          <use xlink:href="#basket"></use>
        </svg>
      </button>
    </div>
  </div>
</header>
<div class="content">