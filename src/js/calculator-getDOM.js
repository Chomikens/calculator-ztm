let calc__screen, buttonContainer;

const getCalcScreen = () =>
  calc__screen ||
  (calc__screen = document.querySelector("#calculator__displayScreen"));

const getbuttonContainer = () =>
  buttonContainer ||
  (buttonContainer = document.querySelector(".calculator__buttonContainer"));

export { getCalcScreen, getbuttonContainer };
