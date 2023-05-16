let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

gsap.set(".null", { opacity: 1 });

const start_logo = select(".start_logo");
const london = select("#london");
const tfl_logo = select("#tfl_logo");
const logo = select("#logo > g");
const logo_tagline = select("#logo_tagline > g");
const logo_line = select("#logo_line");
const logo_circle = select("#logo_circle");
const logo_bar = select("#logo_bar");
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
const text_body = select(".text_body");
const text1 = select(".text1");
const text2 = select(".text2");
const text3 = select(".text3");
const text4 = select(".text4");

// Set the elements

gsap.set(".container", { autoAlpha: 1 });

// Logo

// gsap.set(logo, { autoAlpha: 0 });
gsap.set(logo_line, { scale: 0, transformOrigin: "center left" });
gsap.set(logo_circle, { scale: 0, transformOrigin: "center center" });
gsap.set(logo_bar, { scale: 0, transformOrigin: "center center" });

// London
gsap.set(london, { autoAlpha: 0 });

// Train
gsap.set(train, { scale: 0, transformOrigin: "center center" });
gsap.set(train_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});

// Bus
gsap.set(bus, { scale: 0, transformOrigin: "center center" });
gsap.set(bus_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});
// Boat
gsap.set(boat, { scale: 0, transformOrigin: "center center" });
gsap.set(boat_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});
// Taxi
gsap.set(taxi, { scale: 0, transformOrigin: "center center" });
gsap.set(taxi_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});
// Bike
gsap.set(bike, { scale: 0, transformOrigin: "center center" });
gsap.set(bike_circle, {
  scale: 0,
  transformOrigin: "center center",
  autoAlpha: 0,
});

// Functions

const circleAnim = (item) => {
  let master = gsap.timeline();
  master.fromTo(
    item,
    {
      scale: 0,
      autoAlpha: 0,
    },
    {
      scale: 1,
      autoAlpha: 1,
      ease: "back.out(1.5)",
    }
  );
  return master;
};

const transportAnim = (item) => {
  let master = gsap.timeline();
  master.fromTo(
    item,
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
  return master;
};

const transportTextAnim = (item) => {
  let master = gsap.timeline();
  master.from(
    item,
    {
      y: 100,
      ease: "back.out(1)",
    },
    "-=0.5"
  );
  return master;
};

const transportDelete = (item) => {
  let master = gsap.timeline();
  master.to(
    item,
    {
      autoAlpha: 0,
    },
    "+=1"
  );
  return master;
};

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Title animation

master.to(start_logo, {
  opacity: 0,
  duration: 0.25,
});

master.to(
  london,
  {
    x: -260,
    duration: 43,
    ease: "none",
  },
  0.25
);

master.to(
  london,
  {
    autoAlpha: 0.2,
    duration: 0.1,
  },
  "<"
);

master.from(
  ".welcome_heading1",
  {
    y: 10,
    autoAlpha: 0,
  },
  ">"
);

master.from(
  ".welcome_heading2",
  {
    y: 10,
    autoAlpha: 0,
  },
  ">"
);

master.from(
  ".welcome_heading3",
  {
    y: 10,
    autoAlpha: 0,
  },
  ">"
);

master.to(
  ".start_text",
  {
    autoAlpha: 0,
  },
  6
);

// Welcome

master.from(
  text1,
  {
    x: -270,
    ease: "back.out(1.5)",
  },
  7
);

master.from(
  text2,
  {
    x: -270,
    ease: "back.out(1.5)",
  },
  8
);

master.to(
  ".first_section",
  {
    opacity: 0,
  },
  13
);

master.from(
  text3,
  {
    x: -270,
    ease: "back.out(1.5)",
  },
  14
);

master.from(
  text4,
  {
    x: -270,
    ease: "back.out(1.5)",
  },
  15
);

master.to(
  ".second_section",
  {
    opacity: 0,
  },
  20
);

// Train
master.add(circleAnim(train_circle), 21);
master.add(transportAnim(train), 21.5);
master.add(transportTextAnim(train_text), 22);
master.add(transportDelete(train_section), 22.5);

// Bus
master.add(circleAnim(bus_circle), 24);
master.add(transportAnim(bus), 24.5);
master.add(transportTextAnim(bus_text), 25);
master.add(transportDelete(bus_section), 25.5);

// Boat

master.add(circleAnim(boat_circle), 27);
master.add(transportAnim(boat), 27.5);
master.add(transportTextAnim(boat_text), 28);
master.add(transportDelete(boat_section), 28.5);

// Taxi

master.add(circleAnim(taxi_circle), 30);
master.add(transportAnim(taxi), 30.5);
master.add(transportTextAnim(taxi_text), 31);
master.add(transportDelete(taxi_section), 31.5);

// Bike

master.add(circleAnim(bike_circle), 33);
master.add(transportAnim(bike), 33.5);
master.add(transportTextAnim(bike_text), 34);
master.add(transportDelete(bike_section), 34.5);

// Logo animation

master
  .to(
    logo_circle,
    {
      scale: 1,
      ease: "back.out(2)",
    },
    36
  )

  .to(
    logo_bar,
    {
      scale: 1,
      ease: "back.out(2)",
    },
    36
  )

  .from(
    logo,
    {
      y: 50,
      ease: "power4.out",
    },
    36.75
  )

  .from(
    logo_tagline,
    {
      y: -50,
      ease: "power4.out",
    },
    37.5
  )

  .to(
    logo_line,
    {
      scale: 1,
      ease: "power4.out",
    },
    38
  );

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
