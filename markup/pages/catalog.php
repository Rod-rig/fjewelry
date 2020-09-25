<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container">
  <div class="catalog__h1">Shop Men's Rings In The Uk</div>
</div>
<div class="container">
  <div class="catalog__top">
    <div class="catalog__top_left">
      <div class="catalog__top_inner">
        <div class="catalog__top_content">
          <div class="catalog__top_title visible-lg">Filter</div>
          <button class="visible-lg btn catalog__top_btn" type="button">Hide filter</button>
        </div>
        <button class="btn catalog__filter_btn hidden-lg" type="button">
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
    <div class="catalog__left">
      <? require "../components/catalog/filter.php"; ?>
    </div>
    <div class="catalog__right">
      <? require "../components/catalog/list.php"; ?>
    </div>
  </div>
</div>

<?php require '../components/main/seo.php'; ?>
<?php require '../footer.php'; ?>
