let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
        }
      });

      t1.from(".hero2", { x: 200, opacity: 0, duration:1})
        .from(".hero1", {y: 200, opacity: 0, duration: 1}, "-=1")


let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.why-section',
  }
});


      t2.from(".why", { y: 200, opacity: 0, duration:1})
      .from(".bord", {y: 200, opacity: 0, duration: 1}, "-=0.5")

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.audio-set',
  }
});

    t3.from(".time", { y: 200, opacity: 0, duration:1})
      .from(".timer", {y: 200, opacity: 0, duration: 1}, "-=0.5")
      .from(".padding", {y: 200, opacity: 0, duration: 1}, "-=0.5")
      .from(".card-container", {y: 200, opacity: 0, duration: 1}, "-=0.5")


let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact-head',
  }
});
      
    t3.from(".contact-head", { y: 200, opacity: 0, duration:1})
      .from(".cont-form", {y: 200, opacity: 0, duration: 1}, "-=1")
      .from(".page-footer", {y: 200, opacity: 0, duration: 1},)

            

