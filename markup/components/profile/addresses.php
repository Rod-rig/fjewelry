<?
$addresses = array(
  array(
    'COUNTRY' => 'United Kingdom',
    'CITY' => 'London',
    'REGION' => 'Westminster',
    'POST CODE' => 'NW1',
    'ADDRESS1' => 'Baker Street 221B',
    'ADDRESS2' => 'Baker Street 221B'
  ),
  array(
    'COUNTRY' => 'USA',
    'CITY' => 'New York',
    'REGION' => 'Manhattan',
    'POST CODE' => '10005',
    'ADDRESS1' => '99 Wall Street',
    'ADDRESS2' => '99 Wall Street'
  ),
  array(
    'COUNTRY' => 'United Kingdom',
    'CITY' => 'London',
    'REGION' => 'St John`s Wood',
    'POST CODE' => 'NW8 0AE',
    'ADDRESS1' => '3 Abbey Rd',
    'ADDRESS2' => '3 Abbey Rd'
  ),
);
?>

<div class="addresses">
  <div class="addresses__list">
    <? foreach ($addresses as $a) { ?>
      <!-- section for mob -->
      <div class="addresses__row js_address hidden-lg" data-country="<?= $a['COUNTRY']; ?>" data-city="<?= $a['CITY']; ?>" data-region="<?= $a['REGION']; ?>" data-postcode="<?= $a['POST CODE']; ?>" data-address1="<?= $a['ADDRESS1']; ?>" data-address2="<?= $a['ADDRESS2']; ?>">
        <div class="addresses__line js_toggle_address"><?= $a['COUNTRY']; ?> / <?= $a['CITY']; ?> / <?= $a['REGION']; ?> / <?= $a['POST CODE']; ?> / <?= $a['ADDRESS1']; ?> / <?= $a['ADDRESS2']; ?></div>
        <svg class="addresses__arrow js_toggle_address">
          <use xlink:href="#arrow"></use>
        </svg>
        <div class="js_address_form"></div>
      </div>

      <!-- section for desktop -->
      <div class="addresses__container js_address" data-country="<?= $a['COUNTRY']; ?>" data-city="<?= $a['CITY']; ?>" data-region="<?= $a['REGION']; ?>" data-postcode="<?= $a['POST CODE']; ?>" data-address1="<?= $a['ADDRESS1']; ?>" data-address2="<?= $a['ADDRESS2']; ?>">
        <div class="addresses__lg_row js_hide_on_edit">
          <div class="addresses__col">
            <div class="addresses__label">Country</div>
            <div class=""><?= $a['COUNTRY']; ?></div>
          </div>
          <div class="addresses__col">
            <div class="addresses__label">Town / City</div>
            <div class=""><?= $a['CITY']; ?></div>
          </div>
          <div class="addresses__col">
            <div class="addresses__label">Region</div>
            <div class=""><?= $a['REGION']; ?></div>
          </div>
          <div class="addresses__col">
            <div class="addresses__label">Post Code</div>
            <div class=""><?= $a['POST CODE']; ?></div>
          </div>
          <div class="addresses__col">
            <div class="addresses__label">Address Line 1</div>
            <div class=""><?= $a['ADDRESS1']; ?></div>
          </div>
          <div class="addresses__col">
            <div class="addresses__label">Address Line 2</div>
            <div class=""><?= $a['ADDRESS2']; ?></div>
          </div>
          <button class="btn addresses__remove" type="button">
            <svg class="addresses__icon">
              <use xlink:href="#close"></use>
            </svg>
            <span class="addresses__remove_text">Delete</span>
          </button>
          <button class="btn addresses__edit js_address_edit" type="button">
            <svg class="addresses__icon">
              <use xlink:href="#edit"></use>
            </svg>
            <span class="addresses__remove_text">Edit</span>
          </button>
        </div>
        <div class="js_address_form"></div>
      </div>
    <? } ?>
  </div>
  <div class="js_new_address_form"></div>
  <div class="addresses__add_new">
    <button type="button" class="main_link js_add_new_address">Add new</button>
  </div>
</div>