let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const five = select("#five");
const six = select("#six");
const label = select("#label");
const label_50 = select("#label_50 > g");
const label_percentage = select("#label_percentage > g");
const label_off = select("#label_off > g");
const label_line = select("#label_line");
const label_selected = select("#label_selected");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });
gsap.set(label_line, { autoAlpha: 0 });
gsap.set(label_selected, { autoAlpha: 0 });
gsap.set(label, { autoAlpha: 1 });
gsap.set(five, { autoAlpha: 0, scale: 0, transformOrigin: "bottom right" });
gsap.set(six, { autoAlpha: 0, scale: 0, transformOrigin: "bottom left" });

// Set the elements

master.to(five, {
  scale: 1,
  autoAlpha: 1,
});

master.to(six, {
  scale: 1,
  autoAlpha: 1,
});

master.from(label, {
  y: -90,
  ease: "back.out(1.7)",
});

master.fromTo(
  label_50,
  {
    x: -50,
  },
  {
    x: 0,
    duration: 0.25,
    ease: "back.out(1)",
  }
);

master.fromTo(
  label_percentage,
  {
    x: 20,
  },
  {
    x: 0,
    duration: 0.25,
    ease: "back.out(1)",
  }
);

master.fromTo(
  label_off,
  {
    x: 25,
  },
  {
    x: 0,
    duration: 0.25,
    ease: "back.out(1)",
  }
);

master.to(
  label_line,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(
  label_selected,
  {
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
