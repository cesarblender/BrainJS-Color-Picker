const network = new brain.NeuralNetwork();

network.train([
  { input: { r: 0, g: 0, b: 0 }, output: { color: 1 } },
  { input: { r: 1, g: 1, b: 1 }, output: { color: 0 } },
  { input: { r: 0, g: 1, b: 0 }, output: { color: 1 } },
  { input: { r: 0.4, g: 1, b: 0 }, output: { color: 0 } },
  { input: { r: 0, g: 1, b: 1 }, output: { color: 0 } },
  { input: { r: 1, g: 0, b: 0 }, output: { color: 1 } },
  { input: { r: 1, g: 0.3, b: 0 }, output: { color: 1 } },
  { input: { r: 0, g: 0.6, b: 1 }, output: { color: 1 } },
  { input: { r: 1, g: 0.4, b: 1 }, output: { color: 1 } },
]);

function update(color) {
  const { r, g, b } = color.channels;
  const div = document.getElementById("site");
  div.style.background = `rgb(${r}, ${g}, ${b})`;

  const input = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
  };
  const output = network.run(input);

  div.style.transition = "all ease 1s";

  if (output.color > 0.5) {
    div.style.color = "white";
  } else {
    div.style.color = "black";
  }
}
