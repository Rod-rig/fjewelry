<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container collections">
  <h1 class="h1">Collections</h1>
  <div class="collections__list">
  <? for ($i = 0; $i < 8; $i++) { ?>
    <a href="" class="collections__item">
      <img class="img-responsive" src="https://via.placeholder.com/450x300" alt="">
      <div class="collections__name">Lorem ipsum</div>
    </a>
  <? } ?>
  </div>
  <div class="collections__more">
    <a class="main_link" href="">All collections</a>
  </div>
</div>

<?php require '../components/main/seo.php'; ?>
<?php require '../footer.php'; ?>
