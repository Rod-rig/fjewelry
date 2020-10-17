<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container">
  <div class="row">
    <? require '../components/card/media.php'; ?>
  </div>
  <div class="row ">
    <?php includeComponent('main/carousel', 'carousel/last-watched'); ?>
  </div>
</div>

<?php require '../footer.php'; ?>
