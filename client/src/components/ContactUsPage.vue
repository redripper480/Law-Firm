<template>
<NavbarComp></NavbarComp>
<div class="contact-us-heading">
<h1 class="contact-title"> <strong> CONTACT US. </strong></h1>
</div>
<div class="mid-contact-container">
    <div class="row main-row">
        <div class="col-12 col-lg-6 col-xl-6">
            <div class="form-group">
                
                <input type="text" class="form-control" id="exampleInputName1" placeholder="Your Name">
                
            </div>
            <div class="form-group">
                
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address">
                
            </div>
            <div class="form-group">
                
                <textarea class="form-control" id="Textarea" rows="10" placeholder="Your Message."></textarea>
             </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-6">
            <hr class="contact-div-divider">

            <div class="row rows" id="inner-column">
                <div class="col-12">
                    <h1 class="text-contact">Getting In Touch Is Easy.</h1>
                </div>
                <div class="col-12">
                    
                </div>
                <div class="col-12">
                    
                </div>
            </div>
            
        </div>
    </div>
</div>
<FooterSection></FooterSection>
</template>

<script>
import NavbarComp from './NavbarComp.vue';
import FooterSection from './FooterSection.vue';
export default{
    name:"ContactUsPage",
    components: {
        NavbarComp,
        FooterSection,
    }
}
</script>

<style>
.text-contact{
    color: white;
    margin: 0;
}
.mid-contact-container{
    background-color: var(--backgroundcolor);

}
.main-row{
    margin: 0;
    padding-top: 10vh;
}
.rows{
    margin:0;
}
.contact-div-divider{
    margin: 0 5vw 2vh 5vw;
    border: 1px solid;
    border-color: white;
}
.contact-us-container {
  background-color: var(--backgroundcolor);
}
.contact-title {
  padding: 10vh 0;
  color: black;
  background-color: white;
}
#Textarea{
    max-height: 50vh;
}
.tag{
    color: white;
}
#inner-column{
    padding-top: 0;
}
</style>