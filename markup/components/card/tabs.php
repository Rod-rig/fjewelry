<? $rows = 5; ?>
<div>
  <!-- add "card__tab--show" class to expand tab -->
  <div class="card__tab js_card_tab card__tab--show">
    <div class="card__tab_header js_card_tab_trigger">
      <div class="card__tab_name">Specifications</div>
      <div class="card__tab_icon"></div>
    </div>
    <div class="card__tab_content js_spec_table">
      <table class="card__tab_table">
        <? for ($i = 0; $i < $rows; $i++) { ?>
          <tr <? if ($i > 1) {?>class="card__tab_table_row"<? } ?>>
            <td>Width</td>
            <td class="card__tab_val">
              <a href="">4 mm</a>
              <div class="tooltip tooltip--inline">
                <svg class="tooltip__icon">
                  <use xlink:href="#info"></use>
                </svg>
              </div>
            </td>
          </tr>
          <tr <? if ($i > 1) { ?>class="card__tab_table_row"<? } ?>>
            <td>Category</td>
            <td class="card__tab_val">
              <a href="">Rings</a>
              <div class="tooltip tooltip--inline">
                <svg class="tooltip__icon">
                  <use xlink:href="#info"></use>
                </svg>
              </div>
            </td>
          </tr>
          <tr <? if ($i > 1) { ?>class="card__tab_table_row"<? } ?>>
            <td>Metal type</td>
            <td class="card__tab_val">
              <a href="">Gold</a>
              <div class="tooltip tooltip--inline">
                <svg class="tooltip__icon">
                  <use xlink:href="#info"></use>
                </svg>
              </div>
            </td>
          </tr>
          <tr <? if ($i > 1) { ?>class="card__tab_table_row"<? } ?>>
            <td>New</td>
            <td class="card__tab_val">
              <a href="">New</a>
              <div class="tooltip tooltip--inline">
                <svg class="tooltip__icon">
                  <use xlink:href="#info"></use>
                </svg>
              </div>
            </td>
          </tr>
        <? } ?>
      </table>
      <!-- if more than 8 rows in spec table -->
      <? if ($rows > 1) { ?>
        <div class="text-center">
          <button class="card__tab_spec_toggle btn js_show_spec" type="button">show more</button>
          <button class="card__tab_spec_toggle card__tab_spec_toggle--hide btn js_show_spec" type="button">hide</button>
        </div>
      <? } ?>
    </div>
  </div>

  <div class="card__tab js_card_tab">
    <div class="card__tab_header js_card_tab_trigger">
      <div class="card__tab_name">Description</div>
      <div class="card__tab_icon"></div>
    </div>
    <div class="card__tab_content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et viverra risus. Nam ex velit, luctus eget mi ut, vulputate consectetur purus. In egestas auctor est eu porta. Fusce sollicitudin placerat nisi, eget pellentesque mauris imperdiet quis. Nullam blandit vulputate accumsan. Vestibulum elit tortor, volutpat sed lacus vel, laoreet lobortis nisl. Morbi bibendum finibus euismod.
    </div>
  </div>

  <div class="card__tab js_card_tab">
    <div class="card__tab_header js_card_tab_trigger">
      <div class="card__tab_name">Delivery</div>
      <div class="card__tab_icon"></div>
    </div>
    <div class="card__tab_content">
      <div class="card__tab_delivery">
        <svg class="tooltip__icon card__tab_delivery_icon">
          <use xlink:href="#info"></use>
        </svg>
        <div class="card__tab_delivery_text">Please note that Delivery is</div>
      </div>
      <div class="card__tab_days">Monday - Saturday (excluding public holidays)</div>
      <div class="card__tab_days">A signature may be required on receipt</div>
      <div class="card__tab_table_title">UK standard delivery</div>
      <table class="card__tab_table card__tab_delivery_table">
        <tr>
          <td>Delivery</td>
          <td colspan="2" class="card__tab_val">2 - 5 working days</td>
        </tr>
        <tr>
          <td>Total spent</td>
          <td class="text-center">Up to £49</td>
          <td class="card__tab_val">Over £49</td>
        </tr>
        <tr>
          <td>Charges</td>
          <td class="text-center">£3.5</td>
          <td class="card__tab_val">
            <div class="card__tab_val_prime">Free</div>
          </td>
        </tr>
      </table>
      <div class="card__tab_table_title">UK express delivery</div>
      <table class="card__tab_table card__tab_delivery_table">
        <tr>
          <td>Delivery</td>
          <td colspan="2" class="card__tab_val">1 working day</td>
        </tr>
        <tr>
          <td>Total spent</td>
          <td class="text-center">Up to 250</td>
          <td class="card__tab_val">Over 250</td>
        </tr>
        <tr>
          <td>Charges</td>
          <td class="text-center">£5.95</td>
          <td class="card__tab_val">
            <div class="card__tab_val_prime">Free</div>
          </td>
        </tr>
      </table>
      <div class="card__tab_table_title">International Delivery (Europe only)</div>
      <div class="card__tab_days">Maybe considerably longer for remote areas</div>
      <div class="card__tab_days">A signature may be required on receipt</div>
      <table class="card__tab_table">
        <tr>
          <td>Delivery</td>
          <td colspan="2" class="card__tab_val">3 - 5 working days (minimum)</td>
        </tr>
        <tr>
          <td>Total spent</td>
          <td class="text-center">Up to 250</td>
          <td class="card__tab_val">Over 250</td>
        </tr>
        <tr>
          <td>Charges</td>
          <td class="text-center">£5.95</td>
          <td class="card__tab_val">
            <div class="card__tab_val_prime">Free</div>
          </td>
        </tr>
      </table>
    </div>
  </div>

  <div class="card__tab js_card_tab">
    <div class="card__tab_header js_card_tab_trigger">
      <div class="card__tab_name">Reviews (100)</div>
      <div class="card__tab_icon"></div>
    </div>
    <div class="card__tab_content">
      <?php require "reviews.php"; ?>
    </div>
  </div>
</div>