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
        <div class="mid-section-holder">
          <div class="aboutContainer" id="containerAbout">
            <div class="row rows">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 inner-col">
                <div class="row">
                  <div
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    style="margin-bottom: 5vh"
                  >
                    <h1 class="aboutHeading"> <strong> Education Consultants</strong></h1>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="aboutText">
                      This here is a holder text, I didnot use Lorem Ipsum
                      because to be honest, it looks extremely Ugly and the
                      gibberish makes you feel like the design is hirrbily done
                      whereas its not the design but the text that it holds.
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
                />
              </div>
            </div>

            <hr style="border-bottom: 10px dotted; width: 10vw;">

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
                />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 inner-col">
                <div class="row">
                  <div
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    style="margin-bottom: 5vh"
                  >
                    <h1 class="aboutHeading"> <strong> Education Consultants</strong></h1>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="aboutText">
                      This here is a holder text, I didnot use Lorem Ipsum
                      because to be honest, it looks extremely Ugly and the
                      gibberish makes you feel like the design is hirrbily done
                      whereas its not the design but the text that it holds.
                    </p>
                  </div>
                </div>
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
import $ from "jquery";
export default {
  name: "HomePage",
  components: {
    NavbarComp,
  },
  mounted() {
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
    width: 100%;
    height: 100%;
  }
  .aboutContainer {
    margin: 0 8%;
  }
  #aboutImageContainer {
    visibility: collapse;
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
    width: 100%;
    height: 100%;
  }
  .aboutContainer {
    margin: 0 8%;
  }
  #aboutImageContainer {
    visibility: collapse;
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
    margin: 0 15%;
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
  transform: translateY(-15vh);
  background-color: var(--topDicColor);
  box-shadow: 3px 3px 5px 0px var(--shadowColor);
}
.inner-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.aboutContainer{
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

.rows{
  padding: 7vh 0;
}
</style>
