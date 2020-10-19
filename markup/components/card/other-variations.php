<?
$width = array("2mm", "3mm", "4mm", "5mm");
$metallllll = array("14 k", "14 k", "14 k");
?>

<div class="card_var">
  <div class="card_var__title">Other Variations</div>
  <div class="card_var__subtitle_row">
    <div class="card_var__subtitle">Width – 2 mm</div>
    <div class="tooltip">
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
    <div class="tooltip">
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
    <div class="tooltip">
      <svg class="tooltip__icon">
        <use xlink:href="#info"></use>
      </svg>
    </div>
  </div>
  <div class="card_var__list">
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/gem1.png')" class="card_var__item card_var__item--gem card_var__item--active"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/gem2.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/gem3.png')" class="card_var__item card_var__item--gem"></a>
    <a href="" style="background-image: url('<?= SITE_TEMPLATE_PATH; ?>/img/gem4.png')" class="card_var__item card_var__item--gem"></a>
  </div>
</div>