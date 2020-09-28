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
      <? require "sort.php"; ?>
    </div>
  </div>
</div>