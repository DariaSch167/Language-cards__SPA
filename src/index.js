import "./styles/main.scss";

function component(text) {
  const element = document.createElement("h1");
  element.textContent = text;
  return element;
}

document.body.prepend(component("Here is something OKAY on Webpack"));
