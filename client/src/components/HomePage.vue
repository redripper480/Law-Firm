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
          <div class="aboutContainer">
            <div class="row" id="aboutRow">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 inner-col">
                <h1 style="text-align: left; display: inline">Hello</h1>

                <p>
                  This here is a holder text, I didnot use Lorem Ipsum because
                  to be honest, it looks extremely Ugly and the gibberish makes
                  you feel like the design is hirrbily done whereas its not the
                  design but the text that it holds.
                </p>
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
          $("#aboutRow").addClass("afterScrollAbout");
        } else {
          $("#aboutRow").removeClass("afterScrollAbout");
        }
      });
    });
  },
};
</script>

<style>
:root {
  --textContentSize: 1.3rem;
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
}

@media (min-width: 992px) {
  .carousel-inner img {
    height: 85vh;
    object-fit: cover;
  }
  #about {
    padding-top: 0vh;
  }
}

#aboutRow {
  height: 50vh;
  transition-duration: 0.5s;
}
.afterScrollAbout{
transform: translateY(-100px);
background-color: rgb(166, 166, 166);
}
.inner-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

#aboutImageContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
}
.aboutContainer {
  padding: 0 15%;
}
.mid-section-holder {
  background-color: gray;
}
</style>
