export const highlightButtons = (compareIds, wishIds) => {
  compareIds.forEach(id => {
    const compareButton = document.querySelector(
      `.js_compare[data-id="${id}"]`
    );
    if (compareButton) {
      compareButton.classList.add("active");
    }
  });
  wishIds.forEach(id => {
    const wishButton = document.querySelector(`.js_wish[data-id="${id}"]`);
    if (wishButton) {
      wishButton.classList.add("active");
    }
  });
};
