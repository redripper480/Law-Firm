<template>
  <div id="navbar-container">
    <nav class="navbar navbar-expand-md sticky-top navbar-light bcg-color">
      <a class="navbar-brand custom-text" href="#">Law Firm Name</a>
      <button
        class="navbar-toggler collapse-button-clr"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link custom-text navbar-hyperlink-text" href="#"
              >Home</a
            >
          </li>
          <p class="custom-text navitems-border">|</p>
          <li class="nav-item">
            <a class="nav-link custom-text navbar-hyperlink-text" href="#"
              >Objectives</a
            >
          </li>
          <p class="custom-text navitems-border">|</p>

          <li class="nav-item">
            <a class="nav-link custom-text navbar-hyperlink-text" href="#"
              >About us</a
            >
          </li>
          <p class="custom-text navitems-border">|</p>

          <li class="nav-item">
            <a
              class="nav-link disabled custom-text navbar-hyperlink-text"
              href="#"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style>
#navbar-container{
  margin: 0 1.4vw 0 1.4vw;
}
p{
    visibility: collapse;
}
@media (min-width: 768px) {
  #navbar-container {
    padding: 1vh 0 1vh 0 !important;
  }
  p{
    visibility: visible;
  }
}

.absolute {
  position: absolute;
}
ul {
  margin-left: auto;
}
.custom-text {
  color: #c09b6a !important;
}
.bcg-color {
  background-color: #1c1f23;
}
.collapse-button-clr {
  background-color: #c09b6a;
}
.footer-class {
  background-color: #1c1f23;
}

.navitems-border{
  text-align: center;
  margin: auto 10px auto 10px;
}
.navbar-hyperlink-text{
 font-size: 14px;
}
</style>
