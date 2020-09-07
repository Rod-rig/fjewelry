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
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Roboto+Condensed:wght@300;400&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH . '/dist/css/main.css' ?>" />
</head>
<body class="no-js">
<script>
  document.body.classList.remove("no-js");
</script>
<? echo file_get_contents("../../img/svg-sprites/common.svg"); ?>
<? if (isOnPage()) {
  echo file_get_contents("../../img/svg-sprites/main.svg");
} ?>
<header class="header">
  <div class="header__top">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>

  <div class="container">
    <div class="header__body">
      <div class="header__group">
        <button class="btn rel visible-lg" type="button">
          <svg class="header__icon">
            <use xlink:href="#phone"></use>
          </svg>
        </button>

        <button class="btn rel visible-lg" type="button">
          <span class="header__count hide">0</span>
          <svg class="header__icon">
            <use xlink:href="#compare"></use>
          </svg>
        </button>

        <div class="header__hamb">
          <button class="hamburger js_hamburger" type="button">
            <svg class="header__icon close_icon">
              <use xlink:href="#close"></use>
            </svg>
          </button>
        </div>

        <div class="rel">
          <button class="btn header__search js_search_trigger" type="button">
            <svg class="header__icon">
              <use xlink:href="#search"></use>
            </svg>
          </button>
          <div class="js_search_desktop visible-lg"></div>
        </div>
      </div>

      <div>
        <a href="<?= SITE_DIR . "main.php"; ?>">
          <img class="header__logo" src="../../img/logo.png" alt="">
        </a>
      </div>

      <div class="header__group">
        <button class="btn rel hidden-lg" type="button">
          <svg class="header__icon">
            <use xlink:href="#phone"></use>
          </svg>
        </button>

        <button class="btn rel visible-lg js_login_trigger" type="button">
          <svg class="header__icon">
            <use xlink:href="#user"></use>
          </svg>
        </button>

        <button class="btn rel visible-lg" type="button">
          <span class="header__count hide">0</span>
          <svg class="header__icon">
            <use xlink:href="#like"></use>
          </svg>
        </button>

        <button class="btn rel js_basket_trigger" type="button">
          <span class="header__count">5</span>
          <svg class="header__basket_icon">
            <use xlink:href="#basket"></use>
          </svg>
        </button>
      </div>
    </div>
    <? includeComponent("nav/menu", "menu/menu") ?>
    <div class="js_search_mobile search__wrapper hidden-lg"></div>
  </div>
</header>
<div class="content">