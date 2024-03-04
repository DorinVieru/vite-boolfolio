<!-- SEZIONE JS SCRIPT -->
<script>

export default {
    name: "Header",

    data() {
        return {
            
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h1>Boolfolio</h1>
                </div> 
                <div class="col-8">
                    <div class="float-end">
                        <ul class="list-unstyled d-flex align-items-center">
                            <li class="nav-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Contatti</a>
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>    
        </div>
    </header>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

header{
    background-color: rgb(0, 21, 45);
    padding: 20px 0px;

    h1{
        color: white;
    }

    ul{
        li{
            color: white;
            padding: 10px 15px;
            font-size: 19px;

            a{
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            }

        }
    }
}

</style>