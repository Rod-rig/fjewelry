<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container news_list">
  <h1 class="h1 news_list__h1">Blog & news</h1>
  <div class="news_list__row">
    <? for ($i = 0; $i < 8; $i++) { ?>
      <div class="news_list__item">
        <a href="<?= SITE_DIR . "article.php"; ?>" class="news_list__link">
          <img class="news_list__img img-responsive" src="https://via.placeholder.com/270x160" />
          <span class="news_list__title">Top five timeless gifts for every women</span>
          <span class="news_list__more">
            <span class="news_list__more_text">Read more</span>
          </span>
        </a>
      </div>
    <? } ?>
  </div>
  <div class="text-center hidden-lg">
    <a href="" class="main_link">Read all news</a>
  </div>
  <div class="visible-lg">
    <? require "../components/catalog/pagination.php"; ?>
  </div>
</div>

<?php require '../footer.php'; ?>
