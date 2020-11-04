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
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400&display=swap"
    rel="stylesheet">
  <? if (isOnPage()) { ?>
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH . '/dist/css/main.css' ?>" />
  <? } elseif (isOnPage("catalog")) { ?>
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH . '/dist/css/catalog.css' ?>" />
  <? } elseif (isOnPage("card")) { ?>
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH . '/dist/css/card.css' ?>" />
  <? } elseif (isOnPage("basket")) { ?>
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH . '/dist/css/basket.css' ?>" />
  <? } else { ?>
    <link rel="stylesheet" href="<?= SITE_TEMPLATE_PATH . '/dist/css/other.css' ?>" />
  <? } ?>
</head>
<body class="no-js">
<script>
  document.body.classList.remove("no-js");
</script>
<? echo file_get_contents("../../img/svg-sprites/common.svg"); ?>
<? if (isOnPage()) {
  echo file_get_contents("../../img/svg-sprites/main.svg");
} else if (isOnPage("catalog")) {
  echo file_get_contents("../../img/svg-sprites/catalog.svg");
} else if (isOnPage("card")) {
  echo file_get_contents("../../img/svg-sprites/card.svg");
} else if (isOnPage("basket")) {
  echo file_get_contents("../../img/svg-sprites/basket.svg");
} ?>
<header class="header">
  <div class="header__top">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>

  <div class="container">
    <div class="header__body">
      <div class="header__group">
        <button class="btn rel visible-lg js_callback" type="button" data-phone="+44 203 540 1477">
          <svg class="header__icon">
            <use xlink:href="#phone"></use>
          </svg>
        </button>

        <a href="" class="btn rel visible-lg">
          <span class="header__count hide">0</span>
          <svg class="header__icon">
            <use xlink:href="#compare"></use>
          </svg>
        </a>

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
        <button class="btn rel hidden-lg js_callback" type="button" data-phone="+44 203 540 1477">
          <svg class="header__icon">
            <use xlink:href="#phone"></use>
          </svg>
        </button>

        <? if (IS_AUTHED) { ?>
          <div class="header__cabinet">
            <button class="btn rel visible-lg" type="button">
              <svg class="header__icon header__user--fill">
                <use xlink:href="#user"></use>
              </svg>
            </button>
            <div class="header__cabinet_menu">
              <? includeComponent("main/personal-menu"); ?>
            </div>
          </div>
        <? } else { ?>
          <button class="btn rel visible-lg js_login_trigger" type="button">
            <svg class="header__icon header__user">
              <use xlink:href="#user"></use>
            </svg>
          </button>
        <? } ?>

        <button class="btn rel visible-lg" type="button">
          <span class="header__count hide">0</span>
          <svg class="header__icon header__like">
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