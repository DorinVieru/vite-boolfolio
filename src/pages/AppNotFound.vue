<!-- SEZIONE JS SCRIPT -->
<script>
export default {
    name:'AppNotFound',
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <div>
        <div class="container mt-5"> 
            <div class="row"> 
                <div class="col-12"> 
                    <h1 class="text-center fw-bold">404 - Not Found</h1>
                    <h4 class="text-center">Sembra che tu non stia trovando quello che stai cercando!</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

h1{
    font-size: 80px;
}
</style>