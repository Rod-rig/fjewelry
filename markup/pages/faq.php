<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container faq collections">
  <h1 class="h1">FAQ</h1>
  <div class="faq__row">
    <div class="faq__menu">
      <div class="faq__item"><a href="" class="faq__link faq__link--active">Payment and delivery</a></div>
      <div class="faq__divider">|</div>
      <div class="faq__item"><a href="" class="faq__link">Guarantee and service</a></div>
      <div class="faq__divider">|</div>
      <div class="faq__item"><a href="" class="faq__link">General issues</a></div>
      <div class="faq__divider">|</div>
      <div class="faq__item"><a href="" class="faq__link">Payment and delivery</a></div>
      <div class="faq__divider">|</div>
      <div class="faq__item"><a href="" class="faq__link">Guarantee and service</a></div>
      <div class="faq__divider">|</div>
      <div class="faq__item"><a href="" class="faq__link">General issues</a></div>
    </div>
    <div class="faq__content">
      <? for ($i = 0; $i < 10; $i++) { ?>
        <div class="js_faq">
          <div class="faq__title js_faq_trigger">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</div>
          <div class="faq__answer">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</div>
        </div>
      <? } ?>
    </div>
  </div>
</div>

<?php require '../footer.php'; ?>
