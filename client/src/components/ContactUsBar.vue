<template>
  <div id="contactDiv">
    <div class="row" id="contactRow">
      <div class="col-12 col-md-12 col-lg-12">
        <p id="contactPara"> <strong> Get Started With Us Today. </strong></p>
        <a href="/contact-us"><button class="btn btn-dark" type="button">Contact Us</button></a>
      </div>
      <div class="col-12 col-md-12 col-lg-12">
        <div class="row" id="innerConactRow">
          <div class="col-3 col-md-3 col-lg-3 socialIcon hiddenSocials" id="socialIcons" ><a class="icons" target="_blank" href="https://www.facebook.com/"><font-awesome-icon icon="fa-brands fa-facebook" /></a></div>
          <div class="col-3 col-md-3 col-lg-3 socialIcon hiddenSocials" id="socialIcons" ><a class="icons" target="_blank" href="https://www.instagram.com/"><font-awesome-icon icon="fa-brands fa-instagram" /></a> </div>
          <div class="col-3 col-md-3 col-lg-3 socialIcon hiddenSocials" id="socialIcons" ><a class="icons" target="_blank" href="mailto:user@domain.com?Subject=Hello%20User"><font-awesome-icon icon="fa-solid fa-envelope" /></a></div>
          <div class="col-3 col-md-3 col-lg-3 socialIcon hiddenSocials" id="socialIcons" ><a class="icons" target="_blank" href="https://twitter.com/"><font-awesome-icon icon="fa-brands fa-twitter" /></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUsBar",
  mounted(){
    let socialsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showSocials");
        }
        else{
          entry.target.classList.remove("showSocials");
        }
      });
    });

    let socialIcons = document.querySelectorAll(".socialIcon");
    socialIcons.forEach((icon) => {
      socialsObserver.observe(icon);
    });
  }
};
</script>

<style>
@media (max-width: 576px) {
  #innerConactRow {
    margin: 0;
    padding: 5% 5%;
  }
  .socialIcon{
    margin: 1vh 0;
    font-size: 2rem;
  }
  #contactPara{
    font-size: 1.8rem;
    margin: 4% 0;
}

}
@media (min-width: 576px) and (max-width: 767.98px) {
  #innerConactRow {
    margin: 0;
    padding: 5% 5%;
  }
  .socialIcon{
    margin: 1vh 0;
    font-size: 2rem;
  }
  #contactPara{
    font-size: 2rem;
    margin: 4% 0;
}
}
@media (min-width: 768px) and (max-width: 991.98px) {
  #innerConactRow {
    margin: 0;
    padding: 3% 25%;
  }
  .socialIcon{
    font-size: 2.5rem;
  }
  #contactPara{
    font-size: 3rem;
    margin: 4% 0;
}
}

@media (min-width: 992px) {
  #innerConactRow {
    margin: 0;
    padding: 3% 25%;
  }
  .socialIcon{
    font-size: 2.5rem;
  }
  #contactPara{
    font-size: 3rem;
    margin: 4% 0;
}
}

#contactRow #innerContactRow{
  margin: 0;
}

#socialIcons:nth-child(4){
transition-duration: 1.5s;
}
#socialIcons:nth-child(3){
    transition-duration: 1.125s;

}
#socialIcons:nth-child(2){
    transition-duration: 0.75s;

}
#socialIcons:nth-child(1){
    transition-duration: 0.375s;
}

.hiddenSocials{
  filter: blur(5px);
  opacity: 0;
  transform: translateX(-100%);
}

.showSocials{
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
}

.icons{
    color: black;
}
.icons:hover{
    color: gray;
}


</style>
