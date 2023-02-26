<template>
  <div class="container-fluid">
    <NavbarComp></NavbarComp>
    <div id="staff-header">
      <h1><strong>OUR STAFF</strong></h1>
    </div>
    <div class="staff-container">
      <div
        class="employee-card-holder"
        id="containerAbout"
   
      >
        <div class="row rows">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <EmpolyeeCard></EmpolyeeCard>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <EmpolyeeCard></EmpolyeeCard>
            
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <EmpolyeeCard></EmpolyeeCard>
            
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <EmpolyeeCard></EmpolyeeCard>
            
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <EmpolyeeCard></EmpolyeeCard>
            
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <EmpolyeeCard></EmpolyeeCard>
            
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <EmpolyeeCard></EmpolyeeCard>
            
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <EmpolyeeCard></EmpolyeeCard>
            
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
import EmpolyeeCard from "./EmpolyeeCard.vue";
export default {
  name: "StaffPage",
  components: {
    NavbarComp,
    FooterSection,
    EmpolyeeCard
  },
  mounted() {
    var scrollThrottle = _.throttle(() => {
      if ($(document).scrollTop() > 50) {
        $("#containerAbout").addClass("afterScrollAbout");
      } else {
        $("#containerAbout").removeClass("afterScrollAbout");
      }
    }, 50);

    $(document).ready(function () {
      $(window).on("scroll", scrollThrottle);
    });
  },
};
</script>

<style>
@media (max-width: 576px) {
  .employee-card-holder {
    margin: 0 4vw;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .employee-card-holder {
    margin: 0 4vw;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .employee-card-holder {
    margin: 0 8vw;
  }
}

@media (min-width: 992px) {
  .employee-card-holder {
    margin: 0 8vw;
  }
}
.container-fluid {
  padding: 0;
  margin: 0;
}
.staff-container {
  background-color: var(--backgroundcolor);
}
#staff-header {
  padding: 20vh 0 15vh 0;
  color: black;
  background-color: white;
}
.employee-card-holder {
  transition-duration: 0.5s;
}
</style>
