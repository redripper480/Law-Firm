<template>
    <div class="container-fluid">
        <NavbarComp></NavbarComp>
        <div class="staff-container">

        </div>
        <FooterSection></FooterSection>
    </div>
</template>

<script>
import NavbarComp from "./NavbarComp.vue";
import FooterSection from "./FooterSection.vue";
export default {
  name: "StaffPage",
  components: { 
    NavbarComp,
     FooterSection
     },
};
</script>

<style>
.container-fluid{
    padding: 0;
    margin: 0;
}
.staff-container{
    height: 100vh;
    background-color: var(--backgroundcolor);
}
</style>
