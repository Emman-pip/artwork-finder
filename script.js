function slowScroll(element, target) {
  element.onscroll = () => {
    const scrolltoTop = document.scrollingElement.scrollTop;

    const xvalue = "center";
    const scrollFactor = 0.3;
    const yValue = scrolltoTop * scrollFactor;
    target.style.backgroundPosition = xvalue + " " + yValue + "px";
  };
}

slowScroll(document.querySelector("body"), document.querySelector(".section1"));
