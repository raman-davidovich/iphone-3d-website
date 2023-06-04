export const handleScroll = (selector, e) => {
  let element;
  if (selector) {
    e.preventDefault();
    element = document.querySelector(`.${selector}`);
  }
  window.scrollTo({
    top: element?.getBoundingClientRect().bottom,
    left: 0,
    behavior: "smooth",
  });
};
