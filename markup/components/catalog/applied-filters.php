<? $filters = array("Golden", "For men", "For women", "For children", "Silver", "Bronze", "Chains", "Rings", "Lorem ipsum", "Very very very long filter text", "Bracelets"); ?>
<div class="tags">
  <? foreach ($filters as $filter) { ?>
    <div class="tags__item">
      <div class="tags__text"><?= $filter; ?></div>
      <a href="">
        <svg class="tags__remove">
          <use xlink:href="#close2"></use>
        </svg>
      </a>
      <div class="tags__more">
        <div class="tags__more_inner">
          <div class="tags__scroll js_tags_scroll">
            <? foreach ($filters as $inner_filter) { ?>
              <a class="tags__link" href=""><?= $inner_filter; ?></a>
            <? } ?>
          </div>
        </div>
      </div>
    </div>
  <? } ?>
  <a href="" class="tags__item tags__item--clear">clear all</a>
</div>