<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>
<nav class="menu">
  <? foreach ($arResult as $menuItem) : ?>
    <div class="menu__item">
      <a class="menu__link" href=""><?= $menuItem['TEXT'] ?></a>
      <div class="submenu">
        <div class="submenu__body">
          <? foreach ($menuItem['SUBLIST'] as $subMenuItem): ?>
            <div class="submenu__column">
              <div class="submenu__link_wrap">
                <a class="submenu__link" href=""><?= $subMenuItem['TEXT']; ?></a>
              </div>
              <div>
                <? if ($subMenuItem['SUBLIST'] !== null):
                  foreach ($subMenuItem['SUBLIST'] as $subSubMenuItem): ?>
                    <div class="subsubmenu__item">
                      <a class="subsubmenu__link" href=""><?= $subSubMenuItem['TEXT']; ?></a>
                    </div>
                  <? endforeach;
                endif; ?>
              </div>
            </div>
          <? endforeach; ?>
        </div>
        <div class="submenu__img">
          <img class="img-responsive" src="https://via.placeholder.com/400x400" alt="">
        </div>
      </div>
    </div>
  <? endforeach; ?>
</nav>