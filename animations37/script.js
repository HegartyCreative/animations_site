let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const train = select("#train > path");
const train_circle = select("#train_circle");
const train_section = gsap.utils.toArray(".train_section");
const train_text = select(".train_text");
const bus = select("#bus > path");
const bus_circle = select("#bus_circle");
const bus_section = gsap.utils.toArray(".bus_section");
const bus_text = select(".bus_text");
const boat = select("#boat > path");
const boat_circle = select("#boat_circle");
const boat_section = gsap.utils.toArray(".boat_section");
const boat_text = select(".boat_text");
const taxi = select("#taxi > path");
const taxi_circle = select("#taxi_circle");
const taxi_section = gsap.utils.toArray(".taxi_section");
const taxi_text = select(".taxi_text");
const bike = select("#bike > path");
const bike_circle = select("#bike_circle");
const bike_section = gsap.utils.toArray(".bike_section");
const bike_text = select(".bike_text");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });

// Train
gsap.set(train, { scale: 0, transformOrigin: "top center" });
gsap.set(train_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});
// Bus
gsap.set(bus, { scale: 0, transformOrigin: "top center" });
gsap.set(bus_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});
// Boat
gsap.set(boat, { scale: 0, transformOrigin: "top center" });
gsap.set(boat_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});
// Taxi
gsap.set(taxi, { scale: 0, transformOrigin: "top center" });
gsap.set(taxi_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});
// Bike
gsap.set(bike, { scale: 0, transformOrigin: "top center" });
gsap.set(bike_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});

// Set the elements

// Train

master.to(train_circle, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(1.5)",
});

master.fromTo(
  train,
  {
    scale: 0,
    y: -150,
  },
  {
    scale: 1,
    y: 0,
    ease: "back.out(1)",
  }
);

master.from(
  train_text,
  {
    y: 100,
    ease: "back.out(1)",
  },
  "-=0.5"
);

master.to(
  train_section,
  {
    autoAlpha: 0,
  },
  "+=1"
);

// Bus

master.to(bus_circle, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(1.5)",
});

master.fromTo(
  bus,
  {
    scale: 0,
    y: -150,
  },
  {
    scale: 1,
    y: 0,
    ease: "back.out(1)",
  }
);

master.from(
  bus_text,
  {
    y: 100,
    ease: "back.out(1)",
  },
  "-=0.5"
);

master.to(
  bus_section,
  {
    autoAlpha: 0,
  },
  "+=1"
);

// Boat

master.to(boat_circle, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(1.5)",
});

master.fromTo(
  boat,
  {
    scale: 0,
    y: -150,
  },
  {
    scale: 1,
    y: 0,
    ease: "back.out(1)",
  }
);

master.from(
  boat_text,
  {
    y: 100,
    ease: "back.out(1)",
  },
  "-=0.5"
);

master.to(
  boat_section,
  {
    autoAlpha: 0,
  },
  "+=1"
);

// Taxi

master.to(taxi_circle, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(1.5)",
});

master.fromTo(
  taxi,
  {
    scale: 0,
    y: -150,
  },
  {
    scale: 1,
    y: 0,
    ease: "back.out(1)",
  }
);

master.from(
  taxi_text,
  {
    y: 100,
    ease: "back.out(1)",
  },
  "-=0.5"
);

master.to(
  taxi_section,
  {
    autoAlpha: 0,
  },
  "+=1"
);

// Bike

master.to(bike_circle, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(1.5)",
});

master.fromTo(
  bike,
  {
    scale: 0,
    y: -150,
  },
  {
    scale: 1,
    y: 0,
    ease: "back.out(1)",
  }
);

master.from(
  bike_text,
  {
    y: 100,
    ease: "back.out(1)",
  },
  "-=0.5"
);

master.to(
  bike_section,
  {
    autoAlpha: 0,
  },
  "+=1"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
