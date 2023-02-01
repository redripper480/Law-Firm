<template>
  <nav class="navbar navbar-expand-md sticky-top navbar-light bcg-color ">
    <a class="navbar-brand custom-text" href="#">Firm Name</a>
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
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link custom-text navbar-hyperlink-spacing" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link custom-text navbar-hyperlink-spacing" href="#">Objectives</a>
        </li>
        <li class="nav-item">
          <a class="nav-link custom-text navbar-hyperlink-spacing" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled custom-text navbar-hyperlink-spacing" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style>
.absolute{
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
.navbar-hyperlink-spacing{
margin-right: 20px;
}


</style>
