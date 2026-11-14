// Navigation background on scroll
    const navbar = document.getElementById("navbar");
    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.getElementById("menuToggle");

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    });

    // Mobile navigation
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });

    // Reveal elements as they enter the viewport
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

    // Contact form demo: validates input and shows a confirmation.
    // Connect this form to a backend or form service to actually send messages.
    document.getElementById("contactForm").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      document.getElementById("formMessage").textContent =
        "Thank you! Your message is ready. Connect a backend to receive submissions.";
      form.reset();
    });

    document.getElementById("year").textContent = new Date().getFullYear();
