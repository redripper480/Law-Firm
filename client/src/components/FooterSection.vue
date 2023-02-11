<template>
  <section id="footerSection">
    <div id="footer">
      <div class="row footerRow">
        <hr class="footer-divider" />

        <div class="col-12">
          <div class="row footerRow">
            <div class="col-12 col-md-4 col-lg-4">
              <div class="innerFooterDiv">
                <h1 class="leftAlignFooter footerHeading">About Us</h1>
                <p class="footerPara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <a class="leftAlignFooter footerLink" href="">Our Mission</a>
                <a class="leftAlignFooter footerLink" href="">Our Staff</a>
                <a class="leftAlignFooter footerLink" href="">Our Services</a>
              </div>
            </div>
            <hr class="footer-divider hidden-divider" />

            <div class="col-12 col-md-4 col-lg-4">
              <div class="row footerRow">
                <div class="col-12">
                  <h1 class="footerHeading">Locations</h1>
                </div>
                <div class="col-12">
                  <h2 class="leftAlignFooter footerHeading">Pakistan:</h2>
                  <p class="footerPara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    X.Y.Z
                  </p>
                </div>
                <div class="col-12">
                  <h2 class="leftAlignFooter footerHeading">Australia:</h2>
                  <p class="footerPara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    A.B.C
                  </p>
                </div>
              </div>
            </div>
            <hr class="footer-divider hidden-divider" />

            <div class="col-12 col-md-4 col-lg-4">
              <div class="row footerRow socials-row">
                <div class="col-12">
                  <h1 class="footerHeading">Socials</h1>
                </div>
                <div class="col-3 footer-social-icon">
                  <font-awesome-icon icon="fa-brands fa-facebook" />
                </div>
                <div class="col-3 footer-social-icon">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                </div>
                <div class="col-3 footer-social-icon">
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                </div>
                <div class="col-3 footer-social-icon">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="footer-divider" />
        <div class="col-12" id="legals">
            <a class="inline-legals footerLink" href="">Legal</a>
            <p class="spacer inline-legals">|</p>
            <a class="inline-legals footerLink" href="">Legal</a>
            <p class="spacer inline-legals">|</p>

            <a class="inline-legals footerLink" href="">Legal</a>

        </div>
        <div class="col-12" id="legals"><p>Law Firm Copyright All rights reserved.</p></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style>
:root {
  --footerTextColor: white;
}

@media (max-width: 576px) {
  .hidden-divider {
    display: contents;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .hidden-divider {
    display: contents;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .hidden-divider {
        display: none;
  }
}

@media (min-width: 992px) {
    .hidden-divider {
    display: none;
  }
}

.row{
  margin: 0;
  padding: 0;
}
.footerPara {
  text-align: left;
  text-justify: auto;
  color: white;
}

.footer-divider {
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 50%;
  border: 1px solid;
  border-color: white;
}

#footer {
  padding: 2vh 12%;
  background-color: var(--footerColor);
}
.footerRow {
  margin: 0;
}
.spacer{
    margin: 0 1vw;
}
#legals {
  margin-top: 3vh;
}
.innerFooterDiv {
  display: grid;
}
.leftAlignFooter {
  text-align: left;
}
.inline-legals{
    display: inline;
}
.footerLink {
  color: black;
}
.footerLink:hover {
  color: white;
  text-decoration: none;
}
.footerHeading {
  color: var(--footerTextColor);
}

.footer-social-icon {
  font-size: 30px;
}
.footer-social-icon:hover {
  color: white;
}

.socials-row {
  margin: 0 2vw;
}

</style>
