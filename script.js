/*=========================================================
=
= TARIK DIGITAL 2026
= SCRIPT PARTIE 1
=
=========================================================*/

"use strict";

/*=========================================================
=
= RECUPERATION DES ELEMENTS
=
=========================================================*/

const header = document.querySelector("header");

const nav = document.querySelector("nav");

const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelectorAll("nav a");

const sections = document.querySelectorAll("section");

/*=========================================================
=
= MENU MOBILE
=
=========================================================*/

if (menuButton) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuButton.classList.toggle("is-active");

    document.body.classList.toggle("menu-open");
  });
}

/*=========================================================
=
= FERMETURE MENU MOBILE
=
=========================================================*/

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");

    menuButton.classList.remove("is-active");

    document.body.classList.remove("menu-open");
  });
});

/*=========================================================
=
= NAVBAR SCROLL
=
=========================================================*/

function navbarScroll() {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener(
  "scroll",

  navbarScroll,

  {
    passive: true,
  },
);

navbarScroll();

/*=========================================================
=
= LIEN ACTIF
=
=========================================================*/

function activeLink() {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 180;

    const height = section.offsetHeight;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",

  activeLink,

  {
    passive: true,
  },
);

activeLink();

/*=========================================================
=
= SMOOTH SCROLL
=
=========================================================*/

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",

      block: "start",
    });
  });
});

/*=========================================================
=
= BOUTONS CTA
=
=========================================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach((button) => {
  button.addEventListener("click", (event) => {
    const href = button.getAttribute("href");

    if (href && href.startsWith("#")) {
      event.preventDefault();

      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/*=========================================================
=
= MENU MOBILE
= FERMETURE SI REDIMENSIONNEMENT
=
=========================================================*/

window.addEventListener(
  "resize",

  () => {
    if (window.innerWidth > 992) {
      nav.classList.remove("active");

      menuButton.classList.remove("is-active");

      document.body.classList.remove("menu-open");
    }
  },
);

/*=========================================================
=
= FIN PARTIE 1
=
=========================================================*/
/*=========================================================
=
= TARIK DIGITAL 2026
= SCRIPT PARTIE 2
=
= SCROLL REVEAL & ANIMATIONS
=
=========================================================*/

/*=========================================================
=
= ELEMENTS A ANIMER
=
=========================================================*/

const revealElements = document.querySelectorAll(".reveal");

/*=========================================================
=
= INTERSECTION OBSERVER
=
= Détecte quand un élément entre dans l'écran
=
=========================================================*/

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        /*
                On arrête d'observer
                pour améliorer les performances
                */

        revealObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.15,

    rootMargin: "0px 0px -80px",
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/*=========================================================
=
= ANIMATION DES CARTES PORTFOLIO
=
=========================================================*/

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 150);

        projectObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.2,
  },
);

projectCards.forEach((card) => {
  projectObserver.observe(card);
});

/*=========================================================
=
= HERO APPARITION AU CHARGEMENT
=
=========================================================*/

window.addEventListener(
  "load",

  () => {
    const heroItems = document.querySelectorAll(".hero-left > *, .hero-right");

    heroItems.forEach((item, index) => {
      setTimeout(
        () => {
          item.classList.add("hero-visible");
        },

        index * 150,
      );
    });
  },
);

/*=========================================================
=
= ANIMATION SERVICES
=
=========================================================*/

const serviceCards = document.querySelectorAll(".service-box");

const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => {
            entry.target.classList.add("show");
          },

          index * 120,
        );

        serviceObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.15,
  },
);

serviceCards.forEach((card) => {
  serviceObserver.observe(card);
});

/*=========================================================
=
= PARALLAX LEGERE DU HERO AU SCROLL
=
=========================================================*/

const heroImage = document.querySelector(".hero-card");

window.addEventListener(
  "scroll",

  () => {
    if (!heroImage) return;

    const offset = window.scrollY * 0.08;

    heroImage.style.transform = `translateY(${offset}px)`;
  },

  {
    passive: true,
  },
);

/*=========================================================
=
= FIN PARTIE 2
=
=========================================================*/
/*=========================================================
=
= TARIK DIGITAL 2026
= SCRIPT PARTIE 3
=
= MOUSE EFFECTS
= LIQUID GLASS INTERACTIONS
= REQUEST ANIMATION FRAME
=
=========================================================*/

/*=========================================================
=
= VARIABLES SOURIS
=
=========================================================*/

let mouseX = 0;

let mouseY = 0;

let currentX = 0;

let currentY = 0;

/*=========================================================
=
= SUIVI DE LA SOURIS
=
=========================================================*/

document.addEventListener(
  "mousemove",

  (event) => {
    mouseX = event.clientX;

    mouseY = event.clientY;
  },
);

/*=========================================================
=
= CREATION DU HALO CURSEUR
=
=========================================================*/

const cursorGlow = document.createElement("div");

cursorGlow.className = "cursor-glow";

document.body.appendChild(cursorGlow);

/*=========================================================
=
= ANIMATION FLUIDE
=
= requestAnimationFrame
=
=========================================================*/

function animateCursor() {
  currentX += (mouseX - currentX) * 0.08;

  currentY += (mouseY - currentY) * 0.08;

  cursorGlow.style.transform = `translate3d(${currentX}px,${currentY}px,0)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

/*=========================================================
=
= HERO PARALLAX SOURIS
=
=========================================================*/

const heroCard = document.querySelector(".hero-card");

document.addEventListener(
  "mousemove",

  (event) => {
    if (!heroCard) return;

    const x = (window.innerWidth / 2 - event.clientX) / 35;

    const y = (window.innerHeight / 2 - event.clientY) / 35;

    heroCard.style.transform = `rotateY(${x}deg)

        rotateX(${y}deg)`;
  },
);

/*=========================================================
=
= RESET HERO QUAND SOURIS SORT
=
=========================================================*/

if (heroCard) {
  heroCard.addEventListener(
    "mouseleave",

    () => {
      heroCard.style.transform = "";
    },
  );
}

/*=========================================================
=
= CARTES PORTFOLIO 3D
=
=========================================================*/

const glassCards = document.querySelectorAll(".project-card");

glassCards.forEach((card) => {
  card.addEventListener(
    "mousemove",

    (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;

      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-10px)`;

      card.style.setProperty(
        "--mouse-x",

        `${x}px`,
      );

      card.style.setProperty(
        "--mouse-y",

        `${y}px`,
      );
    },
  );

  card.addEventListener(
    "mouseleave",

    () => {
      card.style.transform = "";
    },
  );
});

/*=========================================================
=
= OPTIMISATION MOBILE
=
=========================================================*/

const isMobile = window.matchMedia("(max-width:768px)");

if (isMobile.matches) {
  cursorGlow.remove();

  if (heroCard) {
    heroCard.style.transform = "";
  }
}

/*=========================================================
=
= FIN PARTIE 3
=
=========================================================*/
/*=========================================================
=
= TARIK DIGITAL 2026
= SCRIPT PARTIE 4
=
= OPTIMISATIONS & MICRO INTERACTIONS
=
=========================================================*/

/*=========================================================
=
= REDUCTION DES ANIMATIONS
=
= Accessibilité
=
=========================================================*/

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reduceMotion.matches) {
  document.documentElement.classList.add("reduce-motion");
}

/*=========================================================
=
= DESACTIVER EFFETS LOURDS SI BESOIN
=
=========================================================*/

if (reduceMotion.matches) {
  document.querySelectorAll("*").forEach((element) => {
    element.style.animationDuration = "0.01ms";

    element.style.transitionDuration = "0.01ms";
  });
}

/*=========================================================
=
= LAZY LOADING IMAGES
=
=========================================================*/

const images = document.querySelectorAll("img");

images.forEach((image) => {
  if (!image.hasAttribute("loading")) {
    image.setAttribute(
      "loading",

      "lazy",
    );
  }
});

/*=========================================================
=
= EFFET MAGNETIQUE DES BOUTONS
=
=========================================================*/

const magneticButtons = document.querySelectorAll(".btn-primary");

magneticButtons.forEach((button) => {
  button.addEventListener(
    "mousemove",

    (event) => {
      const rect = button.getBoundingClientRect();

      const x = event.clientX - rect.left - rect.width / 2;

      const y = event.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;
    },
  );

  button.addEventListener(
    "mouseleave",

    () => {
      button.style.transform = "";
    },
  );
});

/*=========================================================
=
= FORMULAIRE CONTACT
=
= Animation des champs
=
=========================================================*/

const formInputs = document.querySelectorAll(
  ".contact-form input, .contact-form textarea",
);

formInputs.forEach((input) => {
  input.addEventListener(
    "focus",

    () => {
      input.parentElement.classList.add("focused");
    },
  );

  input.addEventListener(
    "blur",

    () => {
      if (input.value === "") {
        input.parentElement.classList.remove("focused");
      }
    },
  );
});

/*=========================================================
=
= ANIMATION APPARITION FOOTER
=
=========================================================*/

const footer = document.querySelector("footer");

if (footer) {
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("show");

          footerObserver.unobserve(footer);
        }
      });
    },

    {
      threshold: 0.2,
    },
  );

  footerObserver.observe(footer);
}

/*=========================================================
=
= SECURITE ERREURS
=
=========================================================*/

window.addEventListener(
  "error",

  (event) => {
    console.warn(
      "Erreur détectée :",

      event.message,
    );
  },
);

/*=========================================================
=
= INITIALISATION FINALE
=
=========================================================*/

document.addEventListener(
  "DOMContentLoaded",

  () => {
    console.log("Tarik Digital Portfolio chargé ✓");
  },
);

/*=========================================================
=
= FIN SCRIPT PARTIE 4
=
=========================================================*/

/*=========================================================
=
= NAVBAR
= ANIMATION AU CLIC
=
=========================================================*/

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    /* Petit effet d'appui */

    link.animate(
      [
        {
          transform: "scale(1)",
        },

        {
          transform: "scale(0.92)",
        },

        {
          transform: "scale(1)",
        },
      ],

      {
        duration: 220,

        easing: "ease-out",
      },
    );
  });
});

/*=========================================================
=
= FORMULAIRE
= NOTIFICATION ENVOI
=
=========================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    /* Création de la notification */

    const notification = document.createElement("div");

    notification.className = "form-toast";

    notification.textContent = "✓ Envoi du message en cours...";

    document.body.appendChild(notification);

    /* Apparition */

    requestAnimationFrame(() => {
      notification.classList.add("show");
    });
  });
}

/*=========================================================
=
= LUCIDE ICONS
=
=========================================================*/

if (window.lucide) {
  lucide.createIcons();
}
/*====================================
    FLOATING CONTACT
====================================*/

const floatingContact = document.querySelector(".floating-contact");

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    floatingContact.classList.add("show");
  } else {
    floatingContact.classList.remove("show");
  }
});

const reveals = document.querySelectorAll(
  ".reveal,.reveal-left,.reveal-right,.reveal-scale",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((el) => observer.observe(el));
