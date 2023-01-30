<template>
<nav class="navbar navbar-expand-md navbar-light bcg-color">
  <a class="navbar-brand custom-text" href="#">Firm Name</a>
  <button class="navbar-toggler  tbncolor" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon  "></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link custom-text" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-text" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-text" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled custom-text" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default{
name:"SkeletonStructure"
};
</script>

<style>
ul{
    margin-left: auto;
}
.custom-text{
    color: #c09b6a !important;
}
.bcg-color{
   
    background-color: #1c1f23;
}
.tbncolor{
    background-color: #c09b6a;
}
</style>