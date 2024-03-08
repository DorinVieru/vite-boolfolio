<!-- SEZIONE JS SCRIPT -->
<script>
export default {
    name:'Home',
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <div>
        <div class="container-fluid jumbo">
            <div class="row justify-content-center">
                <div class="col-4 home-title text-center py-3">
                    <h1 class="fw-bold">Boolfolio</h1>
                    <h4 class="fst-italic">Il tuo gestionale preferito made Boolean!</h4>
                </div>
            </div>
        </div>
        <div class="container mt-5"> 
            <div class="row"> 
                <div class="col-12 mt-5">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda adipisci quibusdam aliquam, asperiores maiores, nobis, harum ad nesciunt perferendis beatae exercitationem molestias odio et quos nam fugit corporis voluptatum esse.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim debitis natus recusandae quasi beatae aliquid totam consectetur ipsa consequatur, quos id, dolorem suscipit alias corrupti molestias sunt accusamus laboriosam!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

.jumbo {
    background-image: url('../../public/website-jumbo.png');
    background-size: cover;
    background-position: center;
    height: 800px;

    .home-title{
        position: absolute;
        top: 250px;
        left: 640px;
        border: 5px solid #6C63FF;
        border-radius: 20px;
    }
}

h1{
    color: #6C63FF;
}
</style>