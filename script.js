// Navigation scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("show");
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    const targetPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
    }
  }
}

// Open contact methods
function openContact(contactMethod) {
  window.open(contactMethod, "_self");
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  // Add initial animation classes
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("animate-fade-in-up");
  }

  // Observe skill cards
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  // Observe expertise card
  const expertiseCard = document.querySelector(".expertise-card");
  if (expertiseCard) {
    expertiseCard.style.opacity = "0";
    expertiseCard.style.transform = "translateY(30px)";
    expertiseCard.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    expertiseCard.style.transitionDelay = "0.6s";
    observer.observe(expertiseCard);
  }

  // Observe experience card
  const experienceCard = document.querySelector(".experience-card");
  if (experienceCard) {
    experienceCard.style.opacity = "0";
    experienceCard.style.transform = "translateX(-30px)";
    experienceCard.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(experienceCard);
  }

  // Observe education cards
  const educationCards = document.querySelectorAll(".education-card");
  educationCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateX(30px)";
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  // Observe contact cards
  const contactCards = document.querySelectorAll(".contact-card");
  contactCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  // Observe CTA card
  const ctaCard = document.querySelector(".cta-card");
  if (ctaCard) {
    ctaCard.style.opacity = "0";
    ctaCard.style.transform = "translateY(30px)";
    ctaCard.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    ctaCard.style.transitionDelay = "0.6s";
    observer.observe(ctaCard);
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

  if (mobileMenu && mobileMenu.classList.contains("show")) {
    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuBtn.contains(event.target)
    ) {
      mobileMenu.classList.remove("show");
    }
  }
});

// Close mobile menu on escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu && mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
    }
  }
});

// Add hover effects for interactive elements
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to skill cards
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
      this.style.boxShadow = "0 0 30px hsl(199 89% 48% / 0.3)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 8px 32px hsl(220 13% 5% / 0.5)";
    });
  });

  // Add hover effects to contact cards
  const contactCards = document.querySelectorAll(".contact-card");
  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
      this.style.boxShadow = "0 0 30px hsl(199 89% 48% / 0.3)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 8px 32px hsl(220 13% 5% / 0.5)";
    });
  });

  // Add hover effects to expertise items
  const expertiseItems = document.querySelectorAll(".expertise-item");
  expertiseItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.background = "hsl(220 13% 15% / 0.5)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.background = "transparent";
    });
  });
});

// Smooth scroll behavior for all internal links
document.addEventListener("DOMContentLoaded", function () {
  const internalLinks = document.querySelectorAll(
    'a[href^="#"], button[onclick*="scrollToSection"]'
  );

  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let targetId;
      if (this.hasAttribute("href")) {
        targetId = this.getAttribute("href").substring(1);
      } else if (this.hasAttribute("onclick")) {
        const onclick = this.getAttribute("onclick");
        const match = onclick.match(/scrollToSection\('([^']+)'\)/);
        if (match) {
          targetId = match[1];
        }
      }

      if (targetId) {
        scrollToSection(targetId);
      }
    });
  });
});

// Add loading animation for profile image
document.addEventListener("DOMContentLoaded", function () {
  const profileImg = document.querySelector(".profile-img");
  const profileFallback = document.querySelector(".profile-fallback");

  if (profileImg && profileFallback) {
    profileImg.addEventListener("load", function () {
      this.style.opacity = "1";
      profileFallback.style.display = "none";
    });

    profileImg.addEventListener("error", function () {
      this.style.display = "none";
      profileFallback.style.display = "flex";
    });

    // Set initial state
    profileImg.style.opacity = "0";
    profileFallback.style.display = "flex";
  }
});

// Add parallax effect to hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");

  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
document.addEventListener("DOMContentLoaded", function () {
  const heroTitle = document.querySelector(".hero-title .gradient-text");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    // Uncomment the next line to enable typing effect
    // typeWriter(heroTitle, originalText, 150);
  }
});

// Add scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, hsl(199 89% 48%), hsl(199 89% 55%));
    z-index: 1000;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", function () {
    const scrolled =
      (window.pageYOffset /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    progressBar.style.width = scrolled + "%";
  });
}

// Initialize scroll progress
document.addEventListener("DOMContentLoaded", createScrollProgress);

// Add smooth reveal animations for sections
function revealOnScroll() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

// Initialize section reveal
document.addEventListener("DOMContentLoaded", function () {
  // Set initial state for sections
  const sections = document.querySelectorAll("section:not(.hero)");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });

  // Add scroll listener for reveal
  window.addEventListener("scroll", revealOnScroll);

  // Initial check
  revealOnScroll();
});

// Add keyboard navigation support
document.addEventListener("keydown", function (event) {
  // Navigate sections with arrow keys
  if (event.key === "ArrowDown" || event.key === "PageDown") {
    event.preventDefault();
    const currentSection = getCurrentSection();
    const nextSection = getNextSection(currentSection);
    if (nextSection) {
      scrollToSection(nextSection.id);
    }
  }

  if (event.key === "ArrowUp" || event.key === "PageUp") {
    event.preventDefault();
    const currentSection = getCurrentSection();
    const prevSection = getPreviousSection(currentSection);
    if (prevSection) {
      scrollToSection(prevSection.id);
    }
  }

  // Navigate to home with Home key
  if (event.key === "Home") {
    event.preventDefault();
    scrollToTop();
  }

  // Navigate to end with End key
  if (event.key === "End") {
    event.preventDefault();
    const sections = document.querySelectorAll("section");
    const lastSection = sections[sections.length - 1];
    if (lastSection) {
      scrollToSection(lastSection.id);
    }
  }
});

// Helper functions for keyboard navigation
function getCurrentSection() {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.pageYOffset + window.innerHeight / 2;

  for (let section of sections) {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      return section;
    }
  }

  return sections[0];
}

function getNextSection(currentSection) {
  const sections = document.querySelectorAll("section");
  const currentIndex = Array.from(sections).indexOf(currentSection);

  if (currentIndex < sections.length - 1) {
    return sections[currentIndex + 1];
  }

  return null;
}

function getPreviousSection(currentSection) {
  const sections = document.querySelectorAll("section");
  const currentIndex = Array.from(sections).indexOf(currentSection);

  if (currentIndex > 0) {
    return sections[currentIndex - 1];
  }

  return null;
}

// Add focus management for accessibility
document.addEventListener("DOMContentLoaded", function () {
  // Add focus indicators
  const focusableElements = document.querySelectorAll(
    "button, a, input, textarea, select"
  );

  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid hsl(199 89% 48%)";
      this.style.outlineOffset = "2px";
    });

    element.addEventListener("blur", function () {
      this.style.outline = "none";
    });
  });

  // Skip to main content link
  const skipLink = document.createElement("a");
  skipLink.href = "#main";
  skipLink.textContent = "Skip to main content";
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: hsl(199 89% 48%);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1001;
    transition: top 0.3s;
  `;

  skipLink.addEventListener("focus", function () {
    this.style.top = "6px";
  });

  skipLink.addEventListener("blur", function () {
    this.style.top = "-40px";
  });

  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add main content id
  const mainContent =
    document.querySelector("main") || document.querySelector(".hero");
  if (mainContent) {
    mainContent.id = "main";
  }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Apply throttling to scroll events
window.addEventListener(
  "scroll",
  throttle(function () {
    // Scroll-based animations and effects
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, 16)
); // 60fps

// Add error handling for smooth scrolling
function safeScrollTo(targetPosition, behavior = "smooth") {
  try {
    window.scrollTo({
      top: targetPosition,
      behavior: behavior,
    });
  } catch (error) {
    // Fallback for browsers that don't support smooth scrolling
    window.scrollTo(0, targetPosition);
  }
}

// Update scrollToSection function to use safe scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    const targetPosition = section.offsetTop - navbarHeight;

    safeScrollTo(targetPosition);

    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu && mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
    }
  }
}

// Add loading state management
document.addEventListener("DOMContentLoaded", function () {
  // Hide loading spinner if it exists
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none";
  }

  // Show content
  document.body.style.opacity = "1";
});

// Initialize all functionality when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio website loaded successfully!");

  // Add any additional initialization here
  // For example, analytics, performance monitoring, etc.
});
