<template>
  <NavbarComp></NavbarComp>
  <div class="contact-us-heading">
    <h1 class="contact-title"><strong> CONTACT US. </strong></h1>
  </div>
  <div class="mid-contact-container">
    <h1 class="text-contact" id="title-contact">Getting In Touch Is Easy.</h1>
    <div class="row main-row">
      <div class="col-12 col-lg-6 col-xl-6">
        <form ref="form" @submit.prevent="sendEmail">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputName1"
              name="user_name"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="user_email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="Textarea"
              rows="10"
              placeholder="Your Message."
              name="message"
            ></textarea>
          </div>
          <div class="form-group">
            <input id="email-button" type="submit" value="Send" />
          </div>
        </form>
      </div>
      <div class="col-12 col-lg-6 col-xl-6">
        <hr class="contact-div-divider" />

        <div class="row rows" id="inner-column">
          <div class="col-12">
            <div class="row rows inner-contact-row">
              <div class="col-2 inner-columns">
                <font-awesome-icon
                  class="contact-icons"
                  icon="fa-solid fa-location-dot"
                />
              </div>
              <div class="col-10">
                <h2 id="location-title">Pakistan:</h2>
                <p id="location-info">Lorem Ipsum Dolar Is my location X.Y.Z</p>
                <h2 id="location-title">Australia:</h2>
                <p id="location-info">Lorem Ipsum Dolar Is my location X.Y.Z</p>
              </div>
              <div class="col-2 inner-columns">
                <font-awesome-icon
                  class="contact-icons"
                  icon="fa-solid fa-phone"
                />
              </div>
              <div class="col-10">
                <h2 class="contact-info">+00000000000</h2>
              </div>
              <div class="col-12 inner-columns">
                <div class="row rows social-contact-row">
                    <div class="col-3 contact-social-icon">
                  <a class="contact-social-icon" target="_blank" href="https://www.facebook.com/">
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                  </a>
                </div>
                <div class="col-3 contact-social-icon">
                  <a class="contact-social-icon" target="_blank" href="https://www.instagram.com/">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                  </a>
                </div>
                <div class="col-3 contact-social-icon">
                  <a class="contact-social-icon" target="_blank" href="mailto:user@domain.com?Subject=Hello%20User">

                  <font-awesome-icon icon="fa-solid fa-envelope" />
                  </a>
                </div>
                <div class="col-3 contact-social-icon">
                  <a class="contact-social-icon" target="_blank" href="https://twitter.com/">

                  <font-awesome-icon icon="fa-brands fa-twitter" />
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
        <hr class="contact-div-divider" />
      </div>
    </div>
  </div>
  <FooterSection></FooterSection>
</template>

<script>
import emailjs from "@emailjs/browser";
import NavbarComp from "./NavbarComp.vue";
import FooterSection from "./FooterSection.vue";
export default {
  name: "ContactUsPage",
  components: {
    NavbarComp,
    FooterSection,
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_dg3yzy8",
          "template_e0yly7u",
          this.$refs.form,
          "oWcZfT7M73qTHZ-n3"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style>
@media (max-width: 576px) {
  .main-row {
    padding: 8vh 2vw 0 2vw;
  }
  #title-contact{
    padding-left: 2%;
    padding-right: 2%;

  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .main-row {
    padding: 8vh 2vw 0 2vw;
  }
  #title-contact{
    padding-left: 2%;
    padding-right: 2%;

  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .main-row {
    padding: 10vh 10vw 0 10vw;
  }
}

@media (min-width: 992px) {
  .main-row {
    padding: 10vh 10vw 0 10vw;
  }
}

#title-contact {
  padding-top: 3vh;
}
.text-contact {
  color: white;
}
.mid-contact-container {
  background-color: var(--backgroundcolor);
}
.main-row {
  margin: 0;
}
.rows {
  margin: 0;
}
.contact-div-divider {
    margin-top: 0;
    margin-left: 5vw;
    margin-right: 5vw;
    
  border: 1px solid;
  border-color: white;
}
.contact-us-container {
  background-color: var(--backgroundcolor);
}
.contact-title {
  padding: 15vh 0;
  color: black;
  background-color: white;
}
#Textarea {
  max-height: 50vh;
}
.tag {
  color: white;
}
#inner-column {
  padding-top: 0;
}
#email-button {
  color: black;
  background-color: white;
  border-radius: 10%;
  padding: 0.5% 4%;
}

.contact-icons {
  color: white;
  font-size: 1.5rem;
}
.inner-contact-row {
  padding-top: 3%;
  padding-bottom: 3%;
  margin: 0 5vw;
}
#location-title {
  text-align: left;
  color: white;
}
#location-info {
  text-align: left;
  color: white;
}
.contact-info {
  margin: 0;
  padding: 0;
  color: white;
  text-align: left;
  font-size: 1.5rem;
}
.social-contact-row {
  padding: 5% 0;
}
.contact-social-icon {
  color: white;
  font-size: 2rem;
}
.contact-social-icon:hover {
  color: gray;
}
#inner-column{
    padding-bottom: 0;
}
.inner-columns {
  padding: 2% 0;
}
</style>
