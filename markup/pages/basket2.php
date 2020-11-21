<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container">
  <div class="basket_content">
    <div class="basket__h1">Checkout</div>
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
        <div class="basket__count">2</div>
        <div class="basket__header_text">Checkout</div>
      </div>
      <div class="basket__header basket__header--disabled">
        <div class="basket__count">3</div>
        <div class="basket__header_text">Order confirmation</div>
      </div>
    </div>

    <div class="js_basket2_root"></div>

    <div class="basket__mob">
      <div class="basket__header basket__header--disabled">
        <div class="basket__count">3</div>
        <div class="basket__header_text">Order confirmation</div>
      </div>
    </div>
  </div>

  <div class="row">
    <?php //includeComponent('main/carousel', 'carousel/like'); ?>
  </div>
</div>

<?php require '../footer.php'; ?>
