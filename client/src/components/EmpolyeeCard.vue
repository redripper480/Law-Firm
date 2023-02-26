<template>
<div class="container-card">
    <div class="row row-employee">

        <div class="col-4 employee-img-holder">
            <img class="employee-img " src="../assets/courtroom1.jpg" alt="Employee_Picture">
        </div>
        <div class="col-8">
            <div class ="row row-employee">
                <div class="col-12">
                    <h2 class="employee-text-align employee-name">{{name}}</h2>
                </div>
                <hr class="employee-card-divider">
                <div class="col-12 ">
                    <h2 class="employee-text-align emp-desc">{{role}}</h2>
                </div>  
                <div class="col-12">
                    <h2 class="employee-text-align emp-desc">{{qualification}}</h2>
                </div>  
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default{
    name: "EmployeeCard",
    props:{
        name:{
            type: String,
            default:"Name"
        },
        role:{
            type: String,
            default: "Role"
        },
        qualification:{
            type: String,
            default: "Qualification"
        }
    },

}

</script>

<style>
:root{
    --empTextColor: rgb(255, 255, 255);
}
@media (max-width: 576px) {
    .container-card{
        width: 100%;
    }
    .employee-img{
        width: 10vh;
    height:10vh;
    }
}
@media (min-width: 576px) and (max-width: 767.98px) {
    .container-card{
        width: 100%;
    }
    .employee-img{
        width: 10vw;
    height:10vw;
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .employee-img{
        width: 6vw;
    height:6vw;
    }
}

@media (min-width: 992px) {
    .employee-img{
        width: 6vw;
    height:6vw;
    }
}
.container-card{
    background-color:rgb(16, 16, 16);

    height: fit-content;
    padding: 2vh 0;
    border-radius: 2%;
    margin: 2vh 2vw;
}

.container-card:hover{
    background-color: rgb(0, 0, 0);
    --empTextColor: rgb(255, 255, 255);
}

.employee-img{

    border-radius: 50%;
    transition-duration: 0.5s;
}


.employee-img-holder{
    display: flex;
    align-items: center;
    justify-content: center;
}

.row-employee{
    margin-left:  0;
    margin-right:  0;

}

.employee-text-align{
    text-align: left;
    color:var(--empTextColor)
}
.employee-card-divider{
    border: 1px solid;
    width: 100%;
    margin-left: 15px;
    margin-right: 10%;

}
.employee-name{
    font-size: 1.2rem;
}
.emp-desc{
    font-size: 1rem;
}
.post-scroll-emp-color{
    color: rgb(19, 19, 19);
}
</style>