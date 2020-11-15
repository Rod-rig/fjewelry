<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container">
  <div class="basket_content">
    <div class="basket__h1">Order confirmation</div>
    <div class="basket__top_row basket__top_row--2">
      <div class="basket__header">
        <div class="basket__count">
          <svg class="basket__count_icon">
            <use xlink:href="#tick"></use>
          </svg>
        </div>
        <div class="basket__header_text">Shopping bag</div>
      </div>
      <div class="basket__header">
        <div class="basket__count">
          <svg class="basket__count_icon">
            <use xlink:href="#tick"></use>
          </svg>
        </div>
        <div class="basket__header_text">Checkout</div>
      </div>
      <div class="basket__header">
        <div class="basket__count">3</div>
        <div class="basket__header_text">Order confirmation</div>
      </div>
    </div>

    <div class="basket3__content_title">Thank you for your order: GBG5646656</div>
    <div class="basket3__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="text-center">
      <a class="basket3__link" href="">Shop now</a>
    </div>
  </div>

  <div class="row">
    <?php includeComponent('main/carousel', 'carousel/like'); ?>
  </div>
</div>

<?php require '../footer.php'; ?>
