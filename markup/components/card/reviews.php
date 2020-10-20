<?
$max_comments_limit = 1;
$has_reviews = true;
?>
<div class="reviews js_reviews_list">
  <? if ($has_reviews) { ?>
    <? for ($i = 0; $i < 10; $i++) { ?>
      <div class="reviews__item<? if ($i >= $max_comments_limit) {?> reviews__item--hide<? } ?>">
        <div class="reviews__author">John</div>
        <div class="reviews__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et viverra risus. Nam ex velit, luctus eget mi ut, vulputate consectetur purus. In egestas auctor est eu porta. Fusce sollicitudin placerat nisi, eget pellentesque mauris imperdiet quis. Nullam blandit vulputate accumsan. Vestibulum elit tortor, volutpat sed lacus vel, laoreet lobortis nisl. Morbi bibendum finibus euismod.</div>
      </div>
      <div class="reviews__item<? if ($i >= $max_comments_limit) {?> reviews__item--hide<? } ?>">
        <div class="reviews__author">Jack</div>
        <div class="reviews__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et viverra risus. Nam ex velit, luctus eget mi ut, vulputate consectetur purus. In egestas auctor est eu porta. Fusce sollicitudin placerat nisi, eget pellentesque mauris imperdiet quis. Nullam blandit vulputate accumsan. Vestibulum elit tortor, volutpat sed lacus vel, laoreet lobortis nisl. Morbi bibendum finibus euismod.</div>
        <div class="reviews__answer">
          <div class="reviews__author reviews__answer_author">Admin</div>
          <div class="reviews__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et viverra risus. Nam ex velit, luctus eget mi ut, vulputate consectetur purus. In egestas auctor est eu porta. Fusce sollicitudin placerat nisi, eget pellentesque mauris imperdiet quis. Nullam blandit vulputate accumsan. Vestibulum elit tortor, volutpat sed lacus vel, laoreet lobortis nisl. Morbi bibendum finibus euismod.</div>
        </div>
      </div>
    <? } ?>

    <!-- if more than 2 comments -->
    <? if ($max_comments_limit >= 1) { ?>
      <div class="text-center">
        <button class="reviews__toggle btn js_reviews_toggle" type="button">show all</button>
        <button class="reviews__toggle reviews__toggle--hide btn js_reviews_toggle" type="button">hide</button>
      </div>
    <? } ?>
  <? } else { ?>
    <div>No review yet</div>
  <? } ?>

  <div class="reviews__form">
    <div class="reviews__form_title">Add a review</div>
    <div class="js_review_form" data-name="Name *" data-email="Email *" data-review="Review *" data-submit="Send"></div>
  </div>
</div>