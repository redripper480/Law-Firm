<template>
    <div class="container-fluid">
        <NavbarComp></NavbarComp>
        <!-- <FooterSection></FooterSection> -->
    </div>
</template>

<script>
import NavbarComp from "./NavbarComp.vue";
// import FooterSection from "./FooterSection.vue";
export default {
  name: "AboutPage",
  components: { 
    NavbarComp,
    // FooterSection
     },
};
</script>

<style>
.container-fluid{
    padding: 0;
    margin: 0;
}
</style>
