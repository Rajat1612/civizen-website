(function () {
  "use strict";

  let primary_navigation;
  let nav_toggle_button;

  function toggle_navigation_state() {
    if (!primary_navigation || !nav_toggle_button) {
      return;
    }
    const is_open = primary_navigation.classList.toggle("is-open");
    nav_toggle_button.setAttribute("aria-expanded", String(is_open));
  }

  function close_navigation_state() {
    if (!primary_navigation || !nav_toggle_button) {
      return;
    }
    primary_navigation.classList.remove("is-open");
    nav_toggle_button.setAttribute("aria-expanded", "false");
  }

  function handle_link_click(event) {
    const target_href = event.currentTarget.getAttribute("href");
    if (!target_href || !target_href.startsWith("#")) {
      return;
    }
    const target_element = document.querySelector(target_href);
    if (target_element) {
      event.preventDefault();
      target_element.scrollIntoView({ behavior: "smooth", block: "start" });
      close_navigation_state();
    }
  }

  function set_current_year() {
    const year_element = document.getElementById("year");
    if (year_element) {
      year_element.textContent = String(new Date().getFullYear());
    }
  }

  function handle_form_submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const response_element = form.querySelector(".form-response");
    if (!response_element) {
      return;
    }

    response_element.textContent = "Submitting...";
    response_element.classList.remove("success", "error");

    const form_data = new FormData(form);

    fetch(form.action, {
      method: form.method || "POST",
      headers: {
        Accept: "application/json"
      },
      body: form_data
    })
      .then(function (response) {
        if (response.ok) {
          response_element.textContent =
            "Thank you. Your message has been sent successfully.";
          response_element.classList.add("success");
          form.reset();
        } else {
          throw new Error("Formspree returned an error.");
        }
      })
      .catch(function () {
        response_element.textContent =
          "We could not submit your message. Please try again later or email info@civizen.in.";
        response_element.classList.add("error");
      });
  }

  function initialize_site() {
    primary_navigation = document.getElementById("primary-navigation");
    nav_toggle_button = document.querySelector("[data-nav-toggle]");

    if (nav_toggle_button) {
      nav_toggle_button.addEventListener("click", toggle_navigation_state);
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", handle_link_click);
    });

    const contact_form = document.querySelector("[data-contact-form]");
    if (contact_form) {
      contact_form.addEventListener("submit", handle_form_submit);
    }

    set_current_year();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize_site);
  } else {
    initialize_site();
  }
})();

