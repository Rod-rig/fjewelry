<? if ($status === "in_stock") { ?>
  <div class="card__status">
    <svg class="card__instock_icon">
      <use xlink:href="#tick"></use>
    </svg>
    <div class="card__instock">in stock</div>
  </div>
<? } else if ($status === "spec_order") { ?>
  <div class="card__status">
    <!--<svg class="card__instock_icon">
      <use xlink:href="#specorder"></use>
    </svg>-->
    <div class="card__specorder">special order</div>
  </div>
<? } else { ?>
  <div class="card__status">
    <!--<svg class="card__instock_icon">
      <use xlink:href="#discontinued"></use>
    </svg>-->
    <div class="card__disc">discontinued</div>
  </div>
<? } ?>