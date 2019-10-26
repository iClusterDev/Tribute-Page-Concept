// import HelloWorld from "./modules/HelloWorld";

// const hello = new HelloWorld();
import Menu from "./modules/menu";
import { HorizontalSlider, VerticalSlider } from "./modules/slider";

const $menu = Object.create(Menu).init(document.querySelector("#menu-dialog"), document.querySelector("#menu-trigger"));

const $bioTextSlider = Object.create(HorizontalSlider).initialize(
  document.querySelector("#bio-slider-text"),
  document.querySelector("#bio-slider-next"),
  document.querySelector("#bio-slider-prev")
);

const $bioImageSlider = Object.create(VerticalSlider).initialize(
  document.querySelector("#bio-slider-image"),
  document.querySelector("#bio-slider-next"),
  document.querySelector("#bio-slider-prev")
);
