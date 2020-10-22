<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container">
  <div class="row card__row">
    <div class="card_media">
      <? require '../components/card/media.php'; ?>
    </div>
    <div class="card_content">
      <? require '../components/card/content.php'; ?>
    </div>
  </div>
  <div class="row">
    <?php includeComponent('main/carousel', 'carousel/like'); ?>
  </div>

  <div class="card__bottom">
    <div class="card__bottom_info">
      <? require "../components/card/info.php"; ?>
    </div>
    <div class="card__join">
      <? require "../components/catalog/join.php"; ?>
    </div>
  </div>

  <div class="row">
      <?php includeComponent('main/carousel', 'carousel/last-watched2'); ?>
    </div>
</div>

<?php require '../components/main/seo.php'; ?>
<?php require '../footer.php'; ?>
