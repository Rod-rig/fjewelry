<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>
<nav class="menu js_menu">
  <div class="menu__list">
    <? foreach ($arResult as $menuItem) : ?>
      <div class="menu__item">
        <a class="menu__link js_submenu" href="">
          <span><?= $menuItem['TEXT'] ?></span>
          <svg class="menu__arrow">
            <use xlink:href="#arrow"></use>
          </svg>
        </a>
        <div class="submenu js_submenu_list">
          <div class="submenu__toolbar">
            <button type="button" class="btn submenu__toolbar_btn js_back_menu">
              <svg class="submenu__toolbar_arrow">
                <use xlink:href="#arrow"></use>
              </svg>
              <span class="submenu__toolbar_name"><?= $menuItem['TEXT'] ?></span>
            </button>
            <div class="">
              <a href="" class="submenu__link_more">show all</a>
            </div>
          </div>
          <div class="submenu__body">
            <? foreach ($menuItem['SUBLIST'] as $subMenuItem): ?>
              <div class="submenu__column">
                <div class="submenu__header">
                  <a class="submenu__link" href=""><?= $subMenuItem['TEXT']; ?></a>
                  <a href="" class="submenu__link_more">show all</a>
                </div>
                <? if ($subMenuItem['SUBLIST'] !== null): ?>
                  <div class="submenu__list">
                    <? foreach ($subMenuItem['SUBLIST'] as $subSubMenuItem): ?>
                      <div class="subsubmenu__item">
                        <a class="subsubmenu__link" href=""><?= $subSubMenuItem['TEXT']; ?></a>
                      </div>
                    <? endforeach; ?>
                  </div>
                <? endif; ?>
              </div>
            <? endforeach; ?>
          </div>
          <div class="submenu__img">
            <img class="img-responsive" src="https://via.placeholder.com/400x400" alt="">
          </div>
        </div>
      </div>
    <? endforeach; ?>
  </div>

  <div class="menu__more">
    <div class="menu__more_item">
      <button type="button" class="btn menu__btn js_login_trigger">
        <svg class="menu__icon mr-15">
          <use xlink:href="#user"></use>
        </svg>
        <span class="menu__text">Sign in</span>
      </button>
    </div>
    <div class="menu__more_item">
      <a href="" class="menu__btn">
        <svg class="menu__icon mr-15">
          <use xlink:href="#like"></use>
        </svg>
        <span class="menu__text">Favorite</span>
        <span class="menu__more_count">12</span>
      </a>
    </div>
    <div class="menu__more_item">
      <a href="" class="menu__btn">
        <svg class="menu__icon mr-15">
          <use xlink:href="#compare"></use>
        </svg>
        <span class="menu__text">Compare</span>
        <span class="menu__more_count hide">0</span>
      </a>
    </div>
  </div>
</nav>