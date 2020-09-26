<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container">
  <div class="catalog__h1">Shop Men's Rings In The Uk</div>
</div>
<div class="container js_catalog_list">
  <div class="catalog__top">
    <div class="catalog__top_left">
      <div class="catalog__top_inner">
        <div class="catalog__top_content">
          <div class="catalog__top_title visible-lg">Filter</div>
          <button class="visible-lg btn catalog__top_btn js_filter_toggle" type="button">
            <span class="catalog__top_btn--hide">Hide filter</span>
            <span class="catalog__top_btn--show">Show filter</span>
          </button>
        </div>
        <button class="btn catalog__filter_btn hidden-lg js_filter_toggle" type="button">
          <span>Filter by</span>
          <span>
            <svg class="catalog__filter_icon">
              <use xlink:href="#arrow"></use>
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div class="catalog__top_right">
      <div class="catalog__top_inner">
        <? require "../components/catalog/sort.php"; ?>
      </div>
    </div>
  </div>

  <div class="catalog__row">
    <div class="catalog__filter">
      <? require "../components/catalog/filter.php"; ?>
      <div class="filter__fade js_filter_toggle"></div>
    </div>
    <div class="catalog__right">
      <? includeComponent("catalog/list", "catalog/list"); ?>
    </div>
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
