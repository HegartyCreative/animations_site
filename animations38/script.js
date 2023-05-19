let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Avoids error message in Chrome
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

gsap.set(".null", { opacity: 1 });

// Create varialbles

const shapes = gsap.utils.toArray(".shapes > g");
const main = select(".main");
const mainSub = gsap.utils.toArray(".mainSub");
const book = select("#bookBtn");
const bookText = select(".bookText");

// Set the elements

gsap.set(".container", { autoAlpha: 1 });
gsap.set(shapes, { autoAlpha: 1, scale: 1, transformOrigin: "center center" });
gsap.set(book, { autoAlpha: 0, scale: 0, transformOrigin: "56px 152px" });
gsap.set(bookText, { autoAlpha: 0});

// Start animation

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Functions

const moveToStage = (item) => {
  let master = gsap.timeline();
  master.from(
    item,
    {
  y: 100,
  ease: "back.out(1)"
    }
  );
  return master;
};

const leaveStage = (item) => {
  let master = gsap.timeline();
  master.to(
    item,
    {
      autoAlpha: 0
    }
  );
  return master;
};

// Start animation

master.to(shapes, {
  scale: 1.6,
  duration: "9",
  ease: "power4.out",
  stagger: {
    amount: 6,
    from: "random"
  }
});

master.add(moveToStage(main),"-=12");
master.add(moveToStage(".one"), ">1.5");
master.add(leaveStage(main), "<");
master.add(moveToStage(".two"), ">");
master.add(moveToStage(".three"), ">");
master.add(leaveStage(".first"), ">1");
master.add(moveToStage(".four"), ">");
master.add(moveToStage(".five"), ">");
master.add(leaveStage(".second"), ">1");
master.add(moveToStage(".six"), ">");
master.add(moveToStage(".seven"), ">");

master.fromTo(book, {
  scale: 1, 
  autoAlpha: 0,
},{
  scale: 1.2,
  autoAlpha: 1,

  ease: "back.out(1.5)",
}, ">");

master.to(bookText, {
  autoAlpha: 1,
}, ">");

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
