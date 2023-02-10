<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light" id="main-nav">
    <a class="navbar-brand custom-text before-scroll-title" href="#" id="navText0">
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
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link custom-text active" id="navText1" href="#"
          >Home <span class="sr-only">(current)</span></a
        >
        <a class="nav-item nav-link custom-text" id="navText2" href="#"
          >About Us</a
        >
        <a class="nav-item nav-link custom-text" id="navText3" href="#"
          >Our Staff</a
        >
        <a class="nav-item nav-link custom-text" id="navText4" href="#"
          >Services</a
        >
        <button
          class="nav-item nav-link custom-text btn btn-danger"
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

export default {
  name: "NavbarComp",
  mounted() {
    // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    $(document).ready(function () {
      $(window).on("scroll", function () {
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
      });

      for (let i = 0; i <= 5; i++) {
        $("#navText" + i.toString()).on("click", function () {
          $("#navbarNavAltMarkup").collapse("hide");
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
  --postScrollColor: rgb(128, 249, 249);
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
.nav-item:hover::after {
  content: "";
  height: 2px;
  widows: 100%;
  background-color: greenyellow;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (max-width: 576px) {
}
@media (min-width: 576px) and (max-width: 767.98px) {
}
@media (min-width: 768px) and (max-width: 991.98px) {
}

@media (min-width: 992px) {
  .navbar {
    padding: 2rem 5rem 0 5rem;
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

.before-scroll-title{
  font-size: calc(var(--preScrollFontSize) + 1rem) !important;
}

#navText0{
  transition-duration: 0.5s;
}
</style>
