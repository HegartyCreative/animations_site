let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const utd_shield = select("#utd_shield");
const utd_bottom_banner = select("#utd_bottom_banner");
const utd_top_banner = select("#utd_top_banner");
const utd_ship = select("#utd_ship > g");
const utd_football_right = select("#utd_football_right");
const utd_football_left = select("#utd_football_left");
const utd_red_devil = select("#utd_red_devil");
const utd_m = select("#utd_M");
const utd_A = select("#utd_A");
const utd_N1 = select("#utd_N1");
const utd_C = select("#utd_C");
const utd_H = select("#utd_H");
const utd_E1 = select("#utd_E1");
const utd_S = select("#utd_S");
const utd_T1 = select("#utd_T1");
const utd_E2 = select("#utd_E2");
const utd_R = select("#utd_R");
const utd_U = select("#utd_U");
const utd_N2 = select("#utd_N2");
const utd_I = select("#utd_I");
const utd_T2 = select("#utd_T2");
const utd_E3 = select("#utd_E3");
const utd_D = select("#utd_D");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });

// Set the elements

master.set("#start", {
  autoAlpha: 1,
});

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

master.set(utd_D, {
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

master.fromTo(
  utd_shield,
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
  }
);

master.fromTo(
  utd_red_devil,
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
  }
);

master.fromTo(
  utd_ship,
  {
    x: 200,
    autoAlpha: 1,
  },
  {
    x: 0,
  }
);

master.fromTo(
  utd_top_banner,
  {
    y: -20,
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  }
);

master.fromTo(
  utd_bottom_banner,
  {
    y: 20,
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "<"
);

master.fromTo(
  utd_m,
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
  }
);

master.fromTo(
  utd_A,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_N1,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_C,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_H,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_E1,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_S,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_T1,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_E2,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_R,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_U,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  }
);

master.fromTo(
  utd_N2,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_I,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_T2,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_E3,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  utd_D,
  {
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
  },
  "-=0.25"
);
// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
