function reveal() {
  let nav = document.getElementById("nav-animation");
  let button = document.querySelector("header a");

  // elemento da raggiungere dopo hero
  let raggiungere = document.querySelectorAll(".under-the-fold");

  for (let i = 0; i < raggiungere.length; i++) {
    // altezza viewport
    let windowHeight = window.innerHeight;

    // distanza da quell'elemento

    // quindi sarà l'elemento dopo hero
    let elementTop = raggiungere[i].getBoundingClientRect().top;

    // altezza alla quale cambiare classe
    let elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      // dare la classe alla nav bar
      nav.classList.add("active");
      button.classList.add("color-a-change");
    } else {
      // togliere la classe alla nav bar
      nav.classList.remove("active");
      button.classList.remove("color-a-change");
    }
  }
}

window.addEventListener("scroll", reveal);
