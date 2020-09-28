<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container">
  <div class="catalog__h1">Shop Men's Rings In The Uk</div>
</div>
<div class="container js_catalog_list">
  <? if (!IS_CATALOG_EMPTY) { ?>
    <? require "../components/catalog/toolbar.php"; ?>
    <div class="catalog__row">
      <div class="catalog__filter">
        <? require "../components/catalog/filter.php"; ?>
        <div class="filter__fade js_filter_toggle"></div>
      </div>
      <div class="catalog__right">
        <? includeComponent("catalog/list", "catalog/list"); ?>
        <? require "../components/catalog/pagination.php"; ?>
      </div>
    </div>
  <? } else {
    require "../components/catalog/empty-catalog.php";
  } ?>

  <div class="row">
    <?php includeComponent('main/carousel', 'carousel/last-watched'); ?>
  </div>

  <div class="catalog__row">
    <div class="catalog__comments">
      <? includeComponent("catalog/comments", "catalog/comments"); ?>
    </div>
    <div class="catalog__join">
      <? require "../components/catalog/join.php"; ?>
    </div>
  </div>
</div>

<?php require '../components/main/seo.php'; ?>
<?php require '../footer.php'; ?>
