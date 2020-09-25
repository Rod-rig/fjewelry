<div class="filter">
  <div class="filter__header">
    <div class="filter__title">Filter</div>
    <div>
      <a class="filter__clear" href="">Clear all</a>
    </div>
  </div>

  <div class="filter__section js_subfilter">
    <div class="filter__section_wrap">
      <button type="button" class="filter__btn btn js_subfilter_toggle">
        <span class="filter__type">Category</span>
        <svg class="filter__arrow">
          <use xlink:href="#arrow"></use>
        </svg>
      </button>
      <div class="filter__body js_filter_scroll">
        <? for ($i = 0; $i < 15; $i++) { ?>
          <a href="" class="filter__link checkbox__link checkbox__link--checked">
            Lorem ipsum dolor.
          </a>
        <? } ?>
      </div>
    </div>
  </div>

  <div class="filter__section filter__section--hide js_subfilter">
    <div class="filter__section_wrap">
      <button type="button" class="filter__btn btn js_subfilter_toggle">
        <span class="filter__type">Style</span>
        <svg class="filter__arrow">
          <use xlink:href="#arrow"></use>
        </svg>
      </button>
      <div class="filter__body js_filter_scroll">
        <? for ($i = 0; $i < 4; $i++) { ?>
          <a href="" class="filter__link checkbox__link">
            Lorem ipsum dolor.
          </a>
        <? } ?>
      </div>
    </div>
  </div>

  <div class="filter__section">
    <div class="filter__section_wrap">
      <a class="filter__btn" href="">
        <span class="filter__type">New</span>
        <span class="filter__switch"></span>
      </a>
    </div>
  </div>
  <div class="filter__section">
    <div class="filter__section_wrap">
      <a class="filter__btn" href="">
        <span class="filter__type">Exclusive</span>
        <span class="filter__switch filter__switch--checked"></span>
      </a>
    </div>
  </div>

  <div class="filter__section js_subfilter">
    <div class="filter__section_wrap">
      <button type="button" class="filter__btn btn js_subfilter_toggle">
        <span class="filter__type">Size</span>
        <svg class="filter__arrow">
          <use xlink:href="#arrow"></use>
        </svg>
      </button>
      <div class="filter__body filter__sizes">
        <? for ($i = 0; $i < 13; $i++) { ?>
          <a href="" class="filter__size<? if ($i === 0) { ?> filter__size--active<? } ?>">
            <?= $i; ?>
          </a>
        <? } ?>
      </div>
    </div>
  </div>
</div>