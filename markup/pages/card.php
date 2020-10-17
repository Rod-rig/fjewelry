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
    <?php includeComponent('main/carousel', 'carousel/last-watched'); ?>
  </div>
</div>

<?php require '../footer.php'; ?>
