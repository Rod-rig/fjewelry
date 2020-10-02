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
      <div class="filter__body filter__content js_filter_scroll">
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
      <div class="filter__body filter__content js_filter_scroll">
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
      <div class="filter__body filter__content filter__sizes">
        <? for ($i = 0; $i < 13; $i++) { ?>
          <a href="" class="filter__size<? if ($i === 0) { ?> filter__size--active<? } ?>">
            <?= $i; ?>
          </a>
        <? } ?>
      </div>
    </div>
  </div>

  <div class="filter__section js_subfilter">
    <div class="filter__section_wrap">
      <button type="button" class="filter__btn btn js_subfilter_toggle">
        <span class="filter__type">Price</span>
        <svg class="filter__arrow">
          <use xlink:href="#arrow"></use>
        </svg>
      </button>
      <div class="filter__content filter__range">
        <div class="filter__range_inputs">
          <div>
            <input class="filter__range_input js_range_input_from" type="text" placeholder="From">
          </div>
          <div>—</div>
          <div>
            <input class="filter__range_input js_range_input_to" type="text" placeholder="To">
          </div>
          <div class="filter__range_unit">GBP</div>
        </div>
        <div class="js_range range" data-min="1" data-max="1000000" data-start="1000" data-end="500000"></div>
        <div class="filter__range_minmax">
          <div>1</div>
          <div>1000000</div>
        </div>
        <div class="filter__range_show js_filter_show_more hide">
          <button type="button" data-property-name="RINGS" class="btn filter__range_link js_filter_more_link">Apply</button>
          <span class="filter__range_divider">|</span>
          <button type="button" class="btn filter__range_cancel js_filter_cancel">Discard</button>
        </div>
      </div>
    </div>
  </div>

  <div class="filter__section filter__section--hide js_subfilter">
    <div class="filter__section_wrap">
      <button type="button" class="filter__btn btn js_subfilter_toggle">
        <span class="filter__type">Weight</span>
        <svg class="filter__arrow">
          <use xlink:href="#arrow"></use>
        </svg>
      </button>
      <div class="filter__content filter__range">
        <div class="filter__range_inputs">
          <div>
            <input class="filter__range_input js_range_input_from" type="text" placeholder="From">
          </div>
          <div>—</div>
          <div>
            <input class="filter__range_input js_range_input_to" type="text" placeholder="To">
          </div>
          <div class="filter__range_unit">GBP</div>
        </div>
        <div class="js_range range" data-min="1" data-max="15" data-start="5" data-end="10"></div>
        <div class="filter__range_minmax">
          <div>1</div>
          <div>15</div>
        </div>
        <div class="filter__range_show js_filter_show_more hide">
          <button type="button" data-property-name="RINGS" class="btn filter__range_link js_filter_more_link">Apply</button>
          <span class="filter__range_divider">|</span>
          <button type="button" class="btn filter__range_cancel js_filter_cancel">Discard</button>
        </div>
      </div>
    </div>
  </div>

  <div class="filter__footer">
    <a class="filter__apply" href="">View results (9999)</a>
    <!--<a class="filter__apply filter__apply--disabled" href="">View results (0)</a>-->
  </div>
</div>
<div class="filter__fade js_filter_toggle"></div>