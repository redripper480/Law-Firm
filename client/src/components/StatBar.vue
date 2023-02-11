<template>
  <div class="row stat-row" style="margin: 0" id="testimonials">
    <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 statCol">
      <div class="statBox">
        <font-awesome-icon class="icon" icon="fa-solid fa-gavel" />
        <span class="count" data-val="69"> <strong> 000</strong></span>
        <h2><strong> CASES WON </strong></h2>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 statCol">
      <div class="statBox">
        <font-awesome-icon class="icon" icon="fa-solid fa-gavel" />

        <span class="count" data-val="89"><strong> 000</strong></span>
        <h2><strong> STUDENTS HELPED </strong></h2>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 statCol">
      <div class="statBox">
        <font-awesome-icon class="icon" icon="fa-solid fa-gavel" />

        <span class="count" data-val="280"><strong> 000</strong></span>
        <h2><strong> SOMETHING HELPED </strong></h2>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 statCol">
      <div class="statBox">
        <font-awesome-icon class="icon" icon="fa-solid fa-gavel" />

        <span class="count" data-val="403"><strong> 000</strong></span>
        <h2><strong> SOMETHING HELPED </strong></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatBar",
  mounted() {
    let calledOnce = false

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if(calledOnce === false){
            calledOnce = true
          callbackCount()
          }
        }
        
      });
    });



    let statsRow = document.querySelectorAll(".stat-row");
    statsRow.forEach((element) => {
      observer.observe(element);
      console.log(element);
    });

let callbackCount = function(){
  let stats = document.querySelectorAll(".count");
    let interval = 5000;
    console.log(stats);
    stats.forEach((stat) => {
      let startVal = 0;
      let endVal = parseInt(stat.getAttribute("data-val"));
      let duration = Math.floor(interval / endVal);
      let increment = endVal - (endVal % 3);
      let additional_increment = endVal % 3;
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

}
   


  },
};
</script>

<style>
@media (max-width: 576px) {
  .statBox {
    width: 100vw !important;
    border-bottom-left-radius: 1%;
    border-bottom-right-radius: 1%;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
  }
}

h2 {
  font-size: 0.8rem;
  text-align: center;
  margin: 1vh 0;
  color: var(--textColor);
}

.count {
  margin-top: 0.5vh;
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
  display: grid;
  place-items: center;
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

.icon {
  display: block;
  font-size: 2rem;
  color: greenyellow !important;
}
</style>
