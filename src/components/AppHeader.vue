<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';

export default {
    name: "Header",

    data() {
        return {
            store,
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
                    <a href="/" class="text-decoration-none"><h1>Boolfolio</h1></a>
                </div> 
                <div class="col-8">
                    <div class="float-end">
                        <ul class="list-unstyled d-flex align-items-center">
                            <li class="nav-item" v-for="item, index in store.menuItems" :key="index">
                                <router-link class="nav-link" :to="{ name: item.name }">{{ item.label }}</router-link>
                            </li>
                            <li class="nav-item">
                                <a href="http://127.0.0.1:8000/login" target="_blank" class="nav-link"><i class="fa-solid fa-right-to-bracket"></i> Login</a>
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
    padding: 30px 15px 20px;

    h1{
        color: white;
    }

    ul{
        li{
            color: white;
            padding: 10px 15px;
            font-size: 21px;
            font-weight: 700;

            .nav-link{
                text-decoration: none;
                color: white;
                transition: 0.2s;

                &.active,
                &:hover {
                    color: white;
                    font-weight: 900;
                    transform: scale(1.1);
                    border-bottom: 4px solid white;
                }
            }

        }
    }
}

</style>