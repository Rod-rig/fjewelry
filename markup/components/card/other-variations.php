<?
$width = array("2mm", "3mm", "4mm", "5mm");
$metallllll = array("14 k", "14 k", "14 k");
?>

<div class="card_var">
  <div class="card_var__title">Other Variations</div>
  <div class="card_var__subtitle_row">
    <div class="card_var__subtitle">Width – 2 mm</div>
    <div class="tooltip js_tooltip" data-tippy-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quia!">
      <svg class="tooltip__icon">
        <use xlink:href="#info"></use>
      </svg>
    </div>
  </div>
  <div class="card_var__list">
    <? foreach ($width as $i => $w) { ?>
      <a href="" class="card_var__item <? if ($i === 0) {?>card_var__item--active<? } ?>"><?= $w; ?></a>
    <? } ?>
  </div>
  <div class="card_var__subtitle_row">
    <div class="card_var__subtitle">Metal – 14k Yellow Gold</div>
    <div class="tooltip js_tooltip" data-tippy-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et viverra risus. Nam ex velit, luctus eget mi ut, vulputate consectetur purus. In egestas auctor est eu porta. Fusce sollicitudin placerat nisi, eget pellentesque mauris imperdiet quis.">
      <svg class="tooltip__icon">
        <use xlink:href="#info"></use>
      </svg>
    </div>
  </div>
  <div class="card_var__list">
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/gold.png')" class="card_var__item card_var__item--active">14 k</a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/silver.png')" class="card_var__item">14 k</a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/rose.png')" class="card_var__item">14 k</a>
  </div>
  <div class="card_var__subtitle_row">
    <div class="card_var__subtitle">Gemstone – Aquamarine</div>
    <div class="tooltip js_tooltip" data-tippy-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et viverra risus. Nam ex velit, luctus eget mi ut, vulputate consectetur purus. In egestas auctor est eu porta. Fusce sollicitudin placerat nisi, eget pellentesque mauris imperdiet quis.">
      <svg class="tooltip__icon">
        <use xlink:href="#info"></use>
      </svg>
    </div>
  </div>
  <div class="card_var__list">
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/amethyst.png')" class="card_var__item card_var__item--gem card_var__item--active"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/aquamarine.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/blue_topaz.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/citrine.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/emerald.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/garnet.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/london_topaz.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/morganite.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/peridot.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/pink_sapphire.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/ruby.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/sapphire.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/smokey_quartz.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/tanzanite.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/stones/yellow_sapphire.png')" class="card_var__item card_var__item--gem"></a>
  </div>
</div>