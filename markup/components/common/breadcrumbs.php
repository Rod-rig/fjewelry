<? $crumbs = array(
  array(
    "LINK" => "",
    "TEXT" => "Lorem ipsum dolor sit amet",
  ),
  array(
    "LINK" => "",
    "TEXT" => "A ad aliquam aliquid animi corporis",
  ),
  array(
    "LINK" => "",
    "TEXT" => "Atque in nihil praesentium",
  ),
  array(
    "LINK" => "",
    "TEXT" => "Amet assumenda ducimus esse et inventore",
  ),
) ?>
<div class="container">
  <nav class="breadcrumbs js_breadcrumbs_scroll" aria-label="breadcrumbs">
    <ul class="breadcrumbs__list">
      <? foreach ($crumbs as $index => $crumb) { ?>
        <li class="breadcrumbs__item">
          <? if (count($crumbs) - 1 === $index) { ?>
            <span class="breadcrumbs__last"><?= $crumb["TEXT"] ?></span>
          <? } else { ?>
            <a class="breadcrumbs__link" href="<?= $crumb["LINK"] ?>"><?= $crumb["TEXT"] ?></a>
            <svg class="breadcrumbs__icon">
              <use xlink:href="#arrow"></use>
            </svg>
          <? } ?>
        </li>
      <? } ?>
    </ul>
  </nav>
</div>