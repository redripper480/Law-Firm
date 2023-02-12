<template>
  <nav
    class="navbar navbar-expand-lg fixed-top fixed navbar-light"
    id="main-nav"
  >
    <a
      class="navbar-brand custom-text before-scroll-title"
      href="#"
      id="navText0"
    >
      <strong>LAW </strong>FIRM</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
      id="toggleButton"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link custom-text active" id="navText1" href="/"
          >Home <span class="sr-only">(current)</span></a
        >
        <a class="nav-item nav-link custom-text" id="navText2" href="/about"
          >About Us</a
        >
        <a class="nav-item nav-link custom-text" id="navText3" href="/our-staff"
          >Our Staff</a
        >
        <a class="nav-item nav-link custom-text" id="navText4" href="#"
          >Services</a
        >
        <button
          class="nav-item nav-link custom-text btn btn-dark"
          type="button"
          id="navText5"
          href="#"
          style="color: white !important"
        >
          Contact Us
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from "jquery";
import _ from 'lodash'

export default {
  name: "NavbarComp",
  mounted() {
    // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let menuClick = false;
    let throttledScroll = _.throttle(() => {
      if ($(document).scrollTop() > 50) {
        $("#main-nav").addClass("afterScroll", "navbar-light");
        $("#navText0").addClass("after-scroll-title");
        $("#navText0").removeClass("before-scroll-title");

        for (let i = 0; i <= 5; i++) {
          $("#navText" + i.toString()).removeClass("custom-text");
        }
      } else {
        $("#main-nav").removeClass("afterScroll", "navbar-light");
        $("#navText0").addClass("before-scroll-title");
        $("#navText0").removeClass("after-scroll-title");

        for (let i = 0; i <= 5; i++) {
          $("#navText" + i.toString()).addClass("custom-text");
        }
      }
    }, 200);
    $(document).ready(function () {
      $(window).on("scroll", throttledScroll);

      $("#toggleButton").on("click", function () {
        if (menuClick == false) {
          $("#main-nav").addClass("bcg-change");
          menuClick = true;
        } else {
          $("#main-nav").removeClass("bcg-change");
          menuClick = false;
        }
      });
      for (let i = 0; i <= 5; i++) {
        $("#navText" + i.toString()).on("click", function () {
          $("#navbarNavAltMarkup").collapse("hide");
          $("#main-nav").removeClass("bcg-change");
        });
      }
    });
  },
};
</script>

<style>
:root {
  --navbarColor: rgba(255, 255, 255, 0);
  --textColorBeforeScroll: white;
  --postScrollColor: rgb(233, 233, 233);
  --postScrollPadding: 0.8rem;
  --preScrollFontSize: 1.2rem;
}
.collapse {
  justify-content: end;
}
.nav-item {
  margin-right: 1rem;
  transition-duration: 0.5s;
  position: relative;
}

@media (max-width: 576px) {
  .navbar {
    position: fixed;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .navbar {
    position: fixed;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .navbar {
    position: fixed;
  }
}

@media (min-width: 992px) {
  .navbar {
    padding: 2rem 5rem 0 5rem;
    position: fixed;
  }
}
.navbar {
  background-color: var(--navbarColor);
  transition-duration: 0.8s;
}

.afterScroll {
  padding-top: var(--postScrollPadding);
  padding-bottom: var(--postScrollPadding);
  background-color: var(--postScrollColor);
}

.bcg-change {
  background-color: var(--postScrollColor);
}

.custom-text {
  color: var(--textColorBeforeScroll) !important;
  font-size: var(--preScrollFontSize);
}

#navText5 {
  transition-duration: 0.5s;
}
.after-scroll-title {
  font-size: calc(var(--preScrollFontSize) + 0.5rem) !important;
}

.before-scroll-title {
  font-size: calc(var(--preScrollFontSize) + 1rem) !important;
}

#navText0 {
  transition-duration: 0.5s;
}
</style>
