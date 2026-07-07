// 방향키로 카드 이동, Enter로 이동 (2x2 그리드 기준)
const cards = Array.from(document.querySelectorAll(".card"));
let current = 0;

function focusCard(i) {
  current = (i + cards.length) % cards.length;
  cards[current].focus();
}

document.addEventListener("keydown", (e) => {
  const cols = window.innerWidth <= 560 ? 1 : 2;

  switch (e.key) {
    case "ArrowRight":
      e.preventDefault();
      focusCard(current + 1);
      break;
    case "ArrowLeft":
      e.preventDefault();
      focusCard(current - 1);
      break;
    case "ArrowDown":
      e.preventDefault();
      focusCard(current + cols);
      break;
    case "ArrowUp":
      e.preventDefault();
      focusCard(current - cols);
      break;
    case "Enter":
      document.activeElement.click();
      break;
  }
});

cards[0].setAttribute("tabindex", "0");