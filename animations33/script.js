let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const utd_shield = select("#Utd_shield");
const utd_bottom_banner = select("#Utd_bottom_banner");
const utd_top_banner = select("#Utd_top_banner");
const utd_ship = select("#Utd_ship");
const utd_football_right = select("#Utd_football_right");
const utd_football_left = select("#Utd_football_left");
const utd_red_devil = select("#Utd_red_devil");
const utd_m = select("#Utd_M");
const utd_A = select("#Utd_A");
const utd_N1 = select("#Utd_N1");
const utd_C = select("#Utd_C");
const utd_H = select("#Utd_H");
const utd_E1 = select("#Utd_E1");
const utd_S = select("#Utd_S");
const utd_T1 = select("#Utd_T1");
const utd_E2 = select("#Utd_E2");
const utd_R = select("#Utd_R");
const utd_U = select("#Utd_U");
const utd_N2 = select("#Utd_N2");
const utd_I = select("#Utd_I");
const utd_T2 = select("#Utd_T2");
const utd_E3 = select("#Utd_E3");
const utd_D = select("#Utd_D");
const city_ship = select("#utd_ship > g");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });

// Set the elements

master.set(utd_shield, {
  autoAlpha: 0,
});

master.set(utd_bottom_banner, {
  autoAlpha: 0,
});

master.set(utd_top_banner, {
  autoAlpha: 0,
});

master.set(utd_ship, {
  autoAlpha: 0,
});

master.set(utd_red_devil, {
  autoAlpha: 0,
});

master.set(utd_football_right, {
  autoAlpha: 0,
});

master.set(utd_football_left, {
  autoAlpha: 0,
});

master.set(utd_m, {
  autoAlpha: 0,
});

master.set(utd_A, {
  autoAlpha: 0,
});

master.set(utd_N1, {
  autoAlpha: 0,
});

master.set(utd_C, {
  autoAlpha: 0,
});

master.set(utd_H, {
  autoAlpha: 0,
});

master.set(utd_E1, {
  autoAlpha: 0,
});

master.set(utd_S, {
  autoAlpha: 0,
});

master.set(utd_T1, {
  autoAlpha: 0,
});

master.set(utd_E2, {
  autoAlpha: 0,
});

master.set(utd_R, {
  autoAlpha: 0,
});

master.set(utd_U, {
  autoAlpha: 0,
});

master.set(utd_N2, {
  autoAlpha: 0,
});

master.set(utd_I, {
  autoAlpha: 0,
});

master.set(utd_T2, {
  autoAlpha: 0,
});

master.set(utd_E3, {
  autoAlpha: 0,
});

master.set(utd_red_devil, {
  autoAlpha: 0,
});

////////////////// Animation starts here ////////////////

master.fromTo(
  utd_football_left,
  {
    y: -200,
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    y: 0,
    ease: "Bounce.easeOut",
  }
);

master.fromTo(
  utd_football_right,
  {
    y: -200,
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    y: 0,
    ease: "Bounce.easeOut",
  },
  "-=0.25"
);

master.to(utd_shield, {
  autoAlpha: 1,
});

master.to(utd_red_devil, {
  autoAlpha: 1,
});

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
