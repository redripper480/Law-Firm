<template>
  <div class="container-fluid">
    <NavbarComp />
    <section id="Body">
      <div style="height: 300vh">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
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
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/img3.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="mid-section-holder">
          <div class="aboutContainer" id="containerAbout">
            <div class="row rows">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 inner-col">
                <div class="row">
                  <div
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    style="margin-bottom: 5vh"
                  >
                    <h1 class="aboutHeading hiddenLeft">
                      <strong> Education Consultants</strong>
                    </h1>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="aboutText hiddenLeft">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sit amet tellus cras adipiscing enim eu turpis
                      egestas. Venenatis lectus magna fringilla urna porttitor.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
                id="aboutImageContainer"
              >
                <img
                  src="../assets/courtroom1.jpg"
                  alt="court_room"
                  style="
                    width: 350px;
                    height: 350px;
                    right: 2%;
                    border-radius: 50%;
                  "
                  id="aboutimage"
                  class ="hiddenRight"
                />
              </div>
            </div>

            <hr
              style="border-bottom: 10px dotted; width: 10vw; color: aliceblue"
            />

            <div class="row rows">
              <div
                class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
                id="aboutImageContainer"
              >
                <img
                  src="../assets/courtroom1.jpg"
                  alt="court_room"
                  style="
                    width: 350px;
                    height: 350px;
                    right: 2%;
                    border-radius: 50%;
                  "
                  id="aboutimage"
                  class ="hiddenLeft"
                />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 inner-col">
                <div class="row">
                  <div
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    style="margin-bottom: 5vh"
                  >
                    <h1 class="aboutHeading hiddenRight">
                      <strong> Education Consultants</strong>
                    </h1>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="aboutText hiddenRight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sit amet tellus cras adipiscing enim eu turpis
                      egestas. Venenatis lectus magna fringilla urna porttitor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin: 0" id="testimonials">
          <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 statCol">
            <div class="statBox">
              <h3>Helloooo</h3>
              <span class="count" data-val="69"> <strong> 000</strong></span>
              <h2><strong> CASES WON </strong></h2>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 statCol">
            <div class="statBox">
              <h3>Helloooo</h3>

              <span class="count" data-val="89"><strong> 000</strong></span>
              <h2><strong> STUDENTS HELPED </strong></h2>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 statCol">
            <div class="statBox">
              <h3>Helloooo</h3>

              <span class="count" data-val="280"><strong> 000</strong></span>
              <h2><strong> SOMETHING HELPED </strong></h2>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 statCol">
            <div class="statBox">
              <h3>Helloooo</h3>

              <span class="count" data-val="403"><strong> 000</strong></span>
              <h2><strong> SOMETHING HELPED </strong></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarComp from "./NavbarComp.vue";
import $ from "jquery";
export default {
  name: "HomePage",
  components: {
    NavbarComp,
  },
  mounted() {

    let observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) => {

        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }
      })
    });

    let observerRight = new IntersectionObserver((entries) =>{
      entries.forEach((entry) => {

        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }
      })
    });

    let LeftHiddenElements = document.querySelectorAll(".hiddenLeft");
    LeftHiddenElements.forEach((element) => {observer.observe(element); console.log(element)});

    let RightHiddenElements = document.querySelectorAll(".hiddenRight");
    RightHiddenElements.forEach((element) => {observerRight.observe(element); console.log(element)});


    let stats = document.querySelectorAll(".count");
    let interval = 1;
    console.log(stats);
    stats.forEach((stat) => {
      let startVal = 0;
      let endVal = parseInt(stat.getAttribute("data-val"));
      let duration = Math.floor(interval / endVal);
      let increment = endVal - (endVal % 3)
      let additional_increment = endVal % 3
      let counter = setInterval(function () {
        startVal += 3;
        stat.textContent = startVal;
        if (startVal == increment) {
          startVal += additional_increment;
          stat.textContent = startVal;
          clearInterval(counter);
        }
      }, duration);
    });

    $(document).ready(function () {
      $(window).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
          $("#containerAbout").addClass("afterScrollAbout");
        } else {
          $("#containerAbout").removeClass("afterScrollAbout");
        }
      });
    });
  },
};
</script>

<style>
:root {
  --textContentSize: 1.3rem;
  --backgroundcolor: rgb(0, 0, 0);
  --topDicColor: rgb(25, 25, 25);
  --shadowColor: rgb(68, 68, 68);
  --textColor: white;
}
h2 {
  font-size: 0.8rem;
  text-align: center;
  margin: 2vh 0;
  color: var(--textColor);
}

h3 {
  color: white;
}

.count {
  margin-top: 2vh;
  font-size: 2.5rem;
  color: var(--textColor);
}

.statBox {
  height: fit-content;
  margin: 2vh;
  height: 20vh;
  width: 20vh;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  background-color: black;
  padding: 0;
  margin: 2vh 0;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  border-bottom: 10px solid;
  border-color: rgb(203, 203, 203);
  position: relative;
  padding: 1vh 0 0 0;
}
.statCol {
  display: flex;
  align-items: center;
  justify-content: center;
}

#testimonials {
  background-color: rgb(32, 32, 32);
  padding: 5vh 0;
}

.container-fluid {
  padding: 0;
}
.carousel-item {
  background-color: rgb(220, 218, 178);
  position: relative;
}

#about {
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
  #about {
    padding-top: 0;
  }
  #aboutimage {
    visibility: collapse;
  }
  .aboutContainer {
    margin: 0 3%;
  }
  #aboutImageContainer {
    visibility: collapse;
    height: 0;
  }
  .statBox {
    width: 100vw !important;
    border-bottom-left-radius: 1%;
    border-bottom-right-radius: 1%;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .carousel-inner img {
    height: 60vh;
    object-fit: cover;
  }
  #about {
    padding-top: 0;
  }
  #aboutimage {
    visibility: collapse;
  }
  .aboutContainer {
    margin: 0 3%;
  }
  #aboutImageContainer {
    visibility: collapse;
    height: 0;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .carousel-inner img {
    height: 80vh;
    object-fit: cover;
  }
  #about {
    padding-top: 0vh;
  }
  #aboutimage {
    width: 100%;
    height: 100%;
    aspect-ratio: 4/1;
  }
  .aboutContainer {
    margin: 0 6%;
  }
}

@media (min-width: 992px) {
  .carousel-inner img {
    height: 85vh;
    object-fit: cover;
  }
  #about {
    padding-top: 0vh;
  }
  .aboutContainer {
    margin: 0 15%;
  }
}

#aboutRow {
  height: 50vh;
  transition-duration: 0.5s;
}
.afterScrollAbout {
  transform: translateY(-10vh);
  background-color: var(--topDicColor);
  box-shadow: 3px 3px 5px 0px var(--shadowColor);
}
.inner-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.aboutContainer {
  transition-duration: 0.8s;
}

#aboutImageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
}

.aboutText {
  text-align: left;
  text-align: justify;
  margin-left: 3vw;
  margin-right: 3vw;
  color: var(--textColor);
}

.aboutHeading {
  text-align: left;
  margin-left: 3vw;
  color: var(--textColor);
}

.mid-section-holder {
  background-color: var(--backgroundcolor);
  backdrop-filter: blur(5px);
}

.hiddenLeft{
  filter: blur(5px);
  transition: all 0.5s;
  opacity: 0;
  transform: translateX(-100%);
}

.hiddenRight{
  filter: blur(5px);
  transition: all 0.5s;
  opacity: 0;
  transform: translateX(100%);
}
.show{
  filter: blur(0);
  opacity: 1;
  transform: translateX(0);

}

.rows {
  padding: 7vh 0;
}
</style>
