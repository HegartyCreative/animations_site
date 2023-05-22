let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Create varialbles
const title = gsap.utils.toArray(".title");
const title1 = select(".title1");
const title2 = select(".title2");
const title3 = select(".title3");
const title4 = select(".title4");
const circle = select("#circle");
const sun_large = select("#sun_large > g");
const circles = gsap.utils.toArray(".circles");
const outer_circle = select("#outer_circle");
const inner_circle = select("#inner_circle");
const logo = select("#logo");
const logo_sun = select("#logo_sun");
const logo_text = select(".logo_text");
const start = gsap.utils.toArray(".start");
const building = select(".building");
const size = select(".size");
const basket = select("#basket > g");
const amenities = gsap.utils.toArray(".amenities");
const amenities1 = select(".amenities1");
const amenities2 = select(".amenities2");
const train_section = gsap.utils.toArray("#train_section");
const train = select("#train");
const tracks = select("#tracks");
const trains = gsap.utils.toArray(".trains");
const trains1 = select(".trains1");
const trains2 = select(".trains2");
const vinyl = select("#vinyl > g");
const vinyls = gsap.utils.toArray(".vinyls");
const vinyl1 = select(".vinyl1");
const vinyl2 = select(".vinyl2");
const end = select(".end");
const end1 = select(".end1");


// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(title1, { autoAlpha: 1});
gsap.set(title2, { autoAlpha: 1});
gsap.set(title3, { autoAlpha: 1});
gsap.set(title4, { autoAlpha: 1});
gsap.set(sun_large, { x: 120, y: 120, autoAlpha: 0, scale: 1.9, transformOrigin: "center center"});
gsap.set(circle, { autoAlpha: 0, scale: 0, transformOrigin: "center center"});
gsap.set(circles, { autoAlpha: 0 });
gsap.set(outer_circle, {transformOrigin: "center center"});
gsap.set(inner_circle, {transformOrigin: "center center"});
gsap.set(basket, {transformOrigin: "top 50%"});
gsap.set(logo, { autoAlpha: 1});
gsap.set(logo_sun, { autoAlpha: 0, scale: 0, transformOrigin: " 144px 98px"});
gsap.set(building, { autoAlpha: 0});
gsap.set(size, { autoAlpha: 0, scale: 0, transformOrigin: " right bottom"});
gsap.set(train, {scale: 1,transformOrigin: "50% 50%"}); 
gsap.set(vinyl, {scale: 1,transformOrigin: "50% 50%"}); 

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Start animation

// Intro

master.from(logo_text, {
  y: 70, 
  ease: "back.out(1.7)"
});

master.to(logo_sun, {
  autoAlpha: 1, 
  scale: 1,
}, "+=0.5");

master.to(start, {
  x: -250,
  ease: "power4.out",
  duration: 0.75
}, "+=1");

// Address

master.from(title, {
  x: -270,
  stagger: 0.5,
  ease: "back.out(1.5)"
  }, ">");

  master.to(sun_large,{ autoAlpha: 1}, "<");

  master.to(sun_large, 12,  {
    rotation: -360, repeat:-1, ease: "none", transformOrigin: "center center"}, "<");

  // Building

  master.to(building, {
    autoAlpha: 1,
    }, "-=8");

    master.to(sun_large, {
      autoAlpha: 0,
      }, ">");

    master.to(title, {
      autoAlpha: 0
    }, ">")

 master.to(building, {
    x: -15,
    duration: 5,
    ease: "none"
  }, "<");

master.to(size, {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(1.7)",
    transformOrigin: "right bottom",
    duration: 0.5,
  }, "<");


  master.to(building, {
   autoAlpha: 0,
  }, "+=4");

  master.to(size, {
    autoAlpha: 0,
   }, "<");

   // Basket

  master.to(circle, {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(1.5)"
   }, ">");

   master.to(circles, {
    autoAlpha: 1,
   }, ">");

   master.to(inner_circle, 8,  {
   rotation: 360, repeat:-1, ease: "none", transformOrigin: "center center" }), "-=2";

   master.to(outer_circle, 5,  { 
    rotation: -360, repeat:-1, ease: "none", transformOrigin: "center center"}, "<");

master.from(basket, {
  x: 120,
}, "<");

master.fromTo(basket, {
  rotate: -15,
  ease: "Power2.easeInOut",
  duration: 1.25
},{
  rotate: 15,
  repeat: -1,
  yoyo: "true",
  ease: "Power2.easeInOut",
  duration: 1.25
}, ">");

master.from(amenities1, {
  y: -30,
  duration: 0.25,
  ease: "back.out(1.7)"
},"-=2");

master.from(amenities2, {
  y: 30,
  duration: 0.25,
  ease: "back.out(1.7)"
},"<");

// Train

master.to(basket, {
  autoAlpha: 0,
},"+=5");

master.to(amenities, {
  autoAlpha: 0,
},"<");

master.from(train_section, {
  x: -120,
}, ">");

master.to(train, {
  scale: 1.4,
}, "+=1");

master.to(tracks, {
  y: 10,
}, "<");

master.from(trains1, {
  y: -30,
  duration: 0.25,
  ease: "back.out(1.7)"
},"-=2");

master.from(trains2, {
  y: 30,
  duration: 0.25,
  ease: "back.out(1.7)"
},"<");

// Vinyl

master.to(train_section, {
  autoAlpha: 0,
},"+=5");

master.to(trains, {
  autoAlpha: 0,
},"<");

master.from(vinyl, {
  x: 120,
}, ">");

master.to(vinyl, 8,  {
  rotation: 360, repeat:-1, ease: "none", transformOrigin: "center center"}), "-=2";

master.from(vinyl1, {
  y: -35,
  duration: 0.25,
  ease: "back.out(1.7)"
},"<");

master.from(vinyl2, {
  y: 30,
  duration: 0.25,
  ease: "back.out(1.7)"
},"<");

// End

master.to(vinyls, {
  autoAlpha: 0,
},"+=5");

master.to(vinyl, {
  autoAlpha: 0,
},"<");

master.to(circles, {
  autoAlpha: 0,
},"<");

master.to(circle, {
  autoAlpha: 0,
},"<");

master.to(logo, {
  x: 0
});

master.to(end1, {
  y: -60,
  duration: 0.25,
  ease: "back.out(1.7)"
},">");



// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});