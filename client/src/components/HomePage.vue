<template>
  <NavbarComp />
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <button class="btn btn-dark " type="button" id="carouselButton">Click me</button>
      <img class="d-block w-100" src="../assets/wide-firewatch.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/wide-mountain.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/2.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
import NavbarComp from "./NavbarComp.vue";
export default {
  name: "HomePage",
  components: {
    NavbarComp,
  },
};
</script>

<style>
.carousel-item{
  background-color: rgb(220, 218, 178);
  position: relative;
  
}
@media(max-width: 800px){

  .carousel-inner img{
  height: 35vh;
  object-fit: cover;
  }
}
@media(min-width: 800px) and (max-width: 1200px){

  .carousel-inner img{
  height: 50vh;
  object-fit: cover;

  }
}
@media(min-width: 1201px){

  .carousel-inner img{
  height: 70vh;
  object-fit: cover;

  }
}
#carouselButton{
  position: absolute;
  top: 50%;
  right: 47.8%;
  

}
</style>
