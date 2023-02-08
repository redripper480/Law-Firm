<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light navbar-dark" id="main-nav">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
  </template>
  
  <script>
  import $ from 'jquery';
  export default {
    name: "NavbarComp",
    mounted(){
     // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      
      $(document).ready(function () {
      $(window).on("scroll", function () {
          if ($(document).scrollTop() > 50) {
              $("#main-nav").addClass('afterScroll');
          }
          else {
              $("#main-nav").removeClass('afterScroll');
          }
      })
    });
  
    }
  };
  </script>
  
  <style>
  :root{
    --navbarColor: transparent;
    --postScrollColor: purple;
  }
  .collapse{
    justify-content: end;
  }
  .navbar{
    background-color: var(--navbarColor);
    padding-left: 1.5625rem;
    padding-right: 1.5625rem;

    transition-duration: 0.5s;
  }
  
  .afterScroll{
    padding: 1rem ;
    padding-left: 1.5625rem;
    padding-right: 1.5625rem;
    background-color: var(--postScrollColor);
  }
  </style>
  