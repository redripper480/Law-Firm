<template>
  <div class="container-fluid">
    <NavbarComp :textcolor="black"/>
    <div class="about-us-container">
      <div class="about-title">
        <h1 id="about-title-page-heading">ABOUT <strong>LAW </strong> FIRM.</h1>
      </div>
      <div class="mid-section-holder">
        <div class="aboutContainer" id="containerAbout">
          <div class="row rows">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" id="aboutImageContainer"
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
                    <strong> What We Do.</strong>
                  </h1>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p class="aboutText hiddenRight hidden-element">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                    egestas. Venenatis lectus magna fringilla urna porttitor. ,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                    egestas. Venenatis lectus magna fringilla urna porttitor.
                  </p>
                </div>
              </div>
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
                    <strong> How We Started.</strong>
                  </h1>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p class="aboutText hiddenRight hidden-element">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                    egestas. Venenatis lectus magna fringilla urna porttitor. ,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                    egestas. Venenatis lectus magna fringilla urna porttitor. ,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                    egestas. Venenatis lectus magna fringilla urna porttitor.
                  </p>
                </div>
              </div>
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
                    <strong>Where We Are Now.</strong>
                  </h1>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p class="aboutText hiddenRight hidden-element">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                    egestas. Venenatis lectus magna fringilla urna porttitor. ,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                    egestas. Venenatis lectus magna fringilla urna porttitor. ,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                    egestas. Venenatis lectus magna fringilla urna porttitor.
                    aliqua. Sit amet tellus cras adipiscing enim eu turpis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import $ from "jquery";
import _ from "lodash";
import NavbarComp from "./NavbarComp.vue";
import FooterSection from "./FooterSection.vue";
export default {
  name: "AboutPage",
  components: {
    NavbarComp,
    FooterSection,
  },
  mounted() {
    var scrollThrottle = _.throttle(() => {
      if ($(document).scrollTop() > 10) {
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
        } else {
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
@media (max-width: 576px) {
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
  .hiddenRight {
    transform: translateX(-100%);
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
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
  .hiddenRight {
    transform: translateX(-100%);
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  #aboutimage {
    width: 100%;
    height: 100%;
    aspect-ratio: 4/1;
  }
  .aboutContainer {
    margin: 0 6%;
  }
  .hiddenRight {
    transform: translateX(-100%);
  }
}

@media (min-width: 992px) {
  .aboutContainer {
    margin: 0 15%;
  }
  .hiddenRight {
    transform: translateX(100%);
  }
}

.container-fluid {
  padding: 0;
  margin: 0;
}
.about-us-container {
  background-color: var(--backgroundcolor);
}
.about-title {
  padding: 15vh 0;
  color: black;
  background-color: white;
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
</style>
