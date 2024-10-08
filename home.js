document.addEventListener("DOMContentLoaded", () => {
  //  * header scroll
  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  //  * header scroll ends
  // * hamburgar icon
  let isManu = false;
    const hamBurgarIcon = document.querySelector(".ham-burgar-icon");
    hamBurgarIcon.addEventListener("click", () => {
      if (!isManu) {
        const creatNewEl = document.createElement("div");
        creatNewEl.classList.add("ham-burgar-icon-ele");
  
        creatNewEl.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Our Project</a>
        <a href="#">About Us</a>
        `;
        let Tl = gsap.timeline();
        const links = creatNewEl.querySelectorAll("a");
        const icon = creatNewEl.querySelector("i");
        Tl.to(creatNewEl, {
          opacity:1,
          right: -16,
          duration: 0.1,
        });
        Tl.from(links, {
          x:50,
          opacity:0,
          stagger:0.1,
        });
        Tl.from(icon,{
          opacity:0,
        });
        icon.addEventListener("click",()=>{
          Tl.reverse().then(()=>{
            creatNewEl.remove();
            isManu = false;
          })
        })
      hamBurgarIcon.append(creatNewEl);
      }
      isManu = true;
    });

  // * gsap starts
  let header_tl = gsap.timeline();
  header_tl.from(".logo,.category,.contact-us", {
    y: -20,
    delay: 0.2,
    opacity: 0,
    stagger: 0.3,
  });
  header_tl.from(".I-animeation", {
    scale: 0,
  });
  const mobileQuery = window.matchMedia("(max-width:600px)");

  function exicution(e) {
    if (e.matches) {
      header_tl.to(".dot-animation", {
        left: 55,
        delay: 0.3,
        duration: 1,
      });
    } else {
      header_tl.to(".dot-animation", {
        left: 58,
        delay: 0.3,
        duration: 1,
      });
    }
  }
  exicution(mobileQuery);

  gsap.to(".floating-icons", {
    y: 7,
    duration: 2,
    repeat: -1,
    yoyo: true,
  });
  gsap.from(".info-container div", {
    x: -1200,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
  });
  gsap.from(".img-container div", {
    x: 1100,
  });
  const typed = new Typed(".type", {
    strings: ["freelencer", "developer", "student"],
    typeSpeed: 50,
    backSpeed: 70,
    smartBackSpace: true,
    loop: true,
    loopCount: Infinity,
    backDelay: 1500,
  });
  AOS.init();
});
