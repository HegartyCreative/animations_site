let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const city_dark_large_blue = select("#city_dark_large_blue");
const city_light_large_blue = select("#city_light_large_blue");

const city_ship = select("#city_ship > g");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

master.set(city_dark_large_blue, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_light_large_blue, {
  strokeDashoffset: "-300",
});

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

// Intro

master.to(city_dark_large_blue, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(2)",
});

master.fromTo(
  city_ship,
  {
    x: 90,
  },
  {
    x: 0,
  }
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
