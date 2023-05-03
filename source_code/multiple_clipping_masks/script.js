let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const ball1 = select("#ball1 > circle");
const ball2 = select("#ball2 > circle");
const mask1 = select("#mask1");
const mask2 = select("#mask2");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.set(".container", {
  autoAlpha: 1,
});

master.set(mask1, {
  autoAlpha: 1,
});

master.set(ball1, {
  autoAlpha: 1,
});

master.set(mask2, {
  autoAlpha: 1,
});

master.set(ball2, {
  autoAlpha: 1,
});

// master.pause();

master.fromTo(
  ball1,
  {
    x: 0,
  },
  {
    x: 150,
    duration: 4,
  }
);

master.fromTo(
  ball2,
  {
    x: 0,
  },
  {
    x: -150,
    duration: 4,
  },
  "<"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
