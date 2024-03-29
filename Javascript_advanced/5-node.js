function changeMode(size, weight, transform, background, color) {
  /**
   * @size - (number)
   * @weight - (string)
   * @transform - (string)
   * @background - (string)
   * @color - (string)
   */
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
