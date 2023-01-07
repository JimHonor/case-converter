import "./style.css";

import { capitalizedCase, sentenceCase } from "./case_convert/convert";

const textfield = document.querySelector("textarea");

const setText = (text: string) => {
  textfield.value = text;
};

const getText = (): string => textfield.value;

const btnUppercase = document.querySelector(".upper-case");
const btnLowercase = document.querySelector(".lower-case");
const btnCapitalizedCase = document.querySelector(".capitalized-case");
const btnSentenceCase = document.querySelector(".sentence-case");
const btnCopy = document.querySelector(".copy");
const btnCut = document.querySelector(".cut");
const btnClear = document.querySelector(".clear");

// case convert
btnUppercase?.addEventListener("click", () => {
  setText(getText().toUpperCase());
});

btnLowercase?.addEventListener("click", () => {
  setText(getText().toLowerCase());
});

btnCapitalizedCase?.addEventListener("click", () => {
  setText(capitalizedCase(getText()));
});

btnSentenceCase?.addEventListener("click", () => {
  setText(sentenceCase(getText()));
});

// text handler

btnCopy?.addEventListener("click", () => {
  navigator.clipboard.writeText(getText());
});

btnCut?.addEventListener("click", () => {
  navigator.clipboard.writeText(getText());
  setText("");
});

btnClear?.addEventListener("click", () => {
  setText("");
});
