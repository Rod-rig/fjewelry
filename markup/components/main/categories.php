<div class="container">
  <div class="categories">
    <div class="categories__list">
      <? for ($i = 0; $i < 12; $i++) { ?>
        <div class="categories__item<? if ($i === 0) { ?> categories__item--active<? } ?> js_category" data-index="<?= $i; ?>">
          <img class="img-responsive" src="https://via.placeholder.com/200x200" alt="">
          <div class="categories__name">Rings</div>
        </div>
      <? } ?>
    </div>
    <? for ($i = 0; $i < 12; $i++) { ?>
      <div class="categories__list js_subcategory<? if ($i !== 0) { ?> hide<? } ?>">
        <? for ($j = 0; $j < 10; $j++) { ?>
          <div class="categories__item categories__item--sub">
            <a class="categories__link" href="">
              <img class="img-responsive" src="https://via.placeholder.com/200x200" alt="">
              <span class="categories__name">Wedding rings</span>
            </a>
          </div>
        <? } ?>
      </div>
    <? } ?>
    <div class="text-center categories__all">
      <a href="" class="main_link">All categories</a>
    </div>
  </div>
</div>