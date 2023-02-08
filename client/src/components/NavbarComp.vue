<template>
  <nav
    class="navbar navbar-expand-md fixed-top navbar-light navbar-light"
    id="main-nav"
  >
    <a class="navbar-brand" href="#"> <strong>LAW </strong>FIRM</a>
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
        <a class="nav-item nav-link active" href="#"
          >Home <span class="sr-only">(current)</span></a
        >
        <a class="nav-item nav-link" href="#">About Us</a>
        <a class="nav-item nav-link" href="#">Our Staff</a>
        <a class="nav-item nav-link" href="#">Services</a>
        <a class="nav-item nav-link" href="#">Contact Us</a>
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
        } else {
          $("#main-nav").removeClass("afterScroll", "navbar-light");
        }
      });
    });
  },
};
</script>

<style>
:root {
  --navbarColor: rgba(255, 255, 255, 0.5);
  --postScrollColor: rgb(128, 249, 249);
  --postScrollPadding: 0.8rem;
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
.navbar {
  background-color: var(--navbarColor);

  transition-duration: 0.5s;
}

.afterScroll {
  padding-top: var(--postScrollPadding);
  padding-bottom: var(--postScrollPadding);
  background-color: var(--postScrollColor);
}
</style>
