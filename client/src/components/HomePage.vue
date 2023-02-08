<template>
  <div class="container-fluid">
    <NavbarComp />
    <section id="Body">
      <div style="height: 200vh">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/img3.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/img3.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="../assets/img3.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="row" id="aboutRow">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" id="aboutImageContainer">
            <img src="../assets/courtroom1.jpg" alt="court_room" style="right: 2%;" id="aboutimage">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" id="aboutPara">
            <div class="row">
              <div class="col-12 inner-col">
                <h1 style="margin: 5vh 0; display: inline-block;" > <strong>ODIO FASCILISIS</strong></h1>
           
              </div>
              <div class="col-12 inner-col">
                <p id="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse platea dictumst. Purus in mollis nunc sed id semper risus in hendrerit. Lorem sed risus ultricies tristique. Fermentum dui faucibus in ornare. Massa id neque aliquam vestibulum morbi blandit cursus. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Eget duis at tellus at urna condimentum mattis pellentesque. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Ac orci phasellus egestas tellus rutrum. Turpis massa tincidunt dui ut ornare.</p>
           
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
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
:root{
  --textContentSize: 1.3rem;
}

.container-fluid {
  padding: 0;
}
.carousel-item {
  background-color: rgb(220, 218, 178);
  position: relative;
}

#about{
 font-size: var(--textContentSize);
 text-align: justify;

 margin-right: 5vw;
line-height: 40px;
}
@media (max-width: 576px) {
  .carousel-inner img {
    height: 60vh;
    object-fit: cover;
  }
  #about{
    padding-top: 0;
  }
  #aboutimage{
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .carousel-inner img {
    height: 60vh;
    object-fit: cover;
  }
  #about{
    padding-top: 0;
  }
  #aboutimage{
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .carousel-inner img {
    height: 80vh;
    object-fit: cover;
  }
  #about{
    padding-top: 0vh;
  }
  #aboutimage{
    width: 100%;
    height: 100%;
    aspect-ratio: 4/1;
  }
}

@media (min-width: 992px) {
  .carousel-inner img {
    height: 85vh;
    object-fit: cover;
  }
  #about{
    padding-top: 0vh;
  }

}

#aboutRow{

  height: 50vh;
  margin: 5vh 0;
}

.inner-col{
    display: flex;
    align-items: center;
    justify-content: left;
}

#aboutImageContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
}
</style>
