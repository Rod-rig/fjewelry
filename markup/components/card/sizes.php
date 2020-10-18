<?
$sizes = array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "I", "J", "K", "L", "M", "N", "O", "P");
?>

<div class="card__sizes js_card_sizes">
  <? foreach ($sizes as $index => $size) { ?>
    <div class="card__size js_card_size <? if ($index === 0) { ?>card__size--active<? } ?>"><?= $size; ?></div>
    <? if ($index === 10) { ?>
      <div class="card__size js_size_more card__size--mob">
        <svg class="card__size_arrow">
          <use xlink:href="#arrow"></use>
        </svg>
      </div>
    <? } ?>
    <? if ($index === 16) { ?>
      <div class="card__size js_size_more card__size--lg">
        <svg class="card__size_arrow">
          <use xlink:href="#arrow"></use>
        </svg>
      </div>
    <? } ?>
  <? } ?>
  <div class="card__size card__size--last js_size_more">
    <svg class="card__size_arrow">
      <use xlink:href="#arrow"></use>
    </svg>
  </div>
</div>