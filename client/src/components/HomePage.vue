<template>
  <div class="container-fluid">
    <NavbarComp :textcolor="white" />
    <section id="Body">
      <div>
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
                    <h1 class="aboutHeading hiddenLeft hidden-element">
                      <strong> Education Consultants</strong>
                    </h1>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="aboutText hiddenLeft hidden-element">
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
                  class="hiddenRight hidden-element"
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
                  class="hiddenLeft hidden-element"
                />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 inner-col">
                <div class="row">
                  <div
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    style="margin-bottom: 5vh"
                  >
                    <h1 class="aboutHeading hiddenRight hidden-element">
                      <strong> Education Consultants</strong>
                    </h1>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="aboutText hiddenRight hidden-element">
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
       <StatBar></StatBar> 
       <ContactUsBar></ContactUsBar>
      </div>
    </section>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import _ from "lodash";
import NavbarComp from "./NavbarComp.vue";
import StatBar from "./StatBar.vue"
import ContactUsBar from "./ContactUsBar.vue";
import FooterSection from "./FooterSection.vue"
import $ from "jquery";
export default {
  name: "HomePage",
  components: {
    NavbarComp,
    StatBar,
    ContactUsBar,
    FooterSection,
  },
  mounted() {

    var scrollThrottle = _.throttle(() => {
      if ($(document).scrollTop() > 50) {
        $("#containerAbout").addClass("afterScrollAbout");
      } else {
        $("#containerAbout").removeClass("afterScrollAbout");
      }
    }, 200);
    
    $(document).ready(function () {
      $(window).on("scroll", scrollThrottle);
    });



    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        else{
          entry.target.classList.remove("show");
        }
      });
    });



    let HiddenElements = document.querySelectorAll(".hidden-element");
    HiddenElements.forEach((element) => {
      observer.observe(element);
      console.log(element);
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
  --footerColor: rgb(63, 63, 63);
}




.container-fluid {
  padding: 0;
}
.carousel-item {
  background-color: rgb(220, 218, 178);
  position: relative;
}


@media (max-width: 576px) {
  .carousel-inner img {
    height: 60vh;
    object-fit: cover;
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
  .hiddenRight{
    transform: translateX(-100%);
  }

}
@media (min-width: 576px) and (max-width: 767.98px) {
  .carousel-inner img {
    height: 60vh;
    object-fit: cover;
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
  .hiddenRight{
    transform: translateX(-100%);
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .carousel-inner img {
    height: 80vh;
    object-fit: cover;
  }

  #aboutimage {
    width: 100%;
    height: 100%;
    aspect-ratio: 4/1;
  }
  .aboutContainer {
    margin: 0 6%;
  }
  .hiddenRight{
    transform: translateX(100%);
  }
}

@media (min-width: 992px) {
  .carousel-inner img {
    height: 85vh;
    object-fit: cover;
  }

  .aboutContainer {
    margin: 0 15%;
  }
  .hiddenRight{
    transform: translateX(100%);
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
  transition-duration: 0.5s;
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
}

.hiddenLeft {
  filter: blur(5px);
  transition: all 0.5s;
  opacity: 0;
  transform: translateX(-100%);
}

.hiddenRight {
  filter: blur(5px);
  transition: all 0.5s;
  opacity: 0;
  overflow-x: hidden;

}
.show {
  filter: blur(0);
  opacity: 1;
  transform: translateX(0);
}

.rows {
  padding: 7vh 0;
}
</style>
