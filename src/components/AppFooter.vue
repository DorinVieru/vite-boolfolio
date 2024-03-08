<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';

export default {
    name: "Footer",

    data() {
        return {
            store,
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <footer class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-3 d-flex">
                    <img src="../../public/website-jumbo.png" alt="logo" class="border rounded-4" width="100px">
                    <a href="/" class="text-decoration-none ms-3 pt-3"><h1>Boolfolio</h1></a>
                </div>
                <div class="col-5 ps-5 pt-2">
                    <ul class="list-unstyled d-flex align-items-center">
                        <li class="nav-item"><i class="fa-brands fa-facebook fs-1"></i></li>
                        <li class="nav-item"><i class="fa-brands fa-instagram fs-1"></i></li>
                        <li class="nav-item"><i class="fa-brands fa-youtube fs-1"></i></li>
                        <li class="nav-item"><i class="fa-brands fa-telegram fs-1"></i></li>
                        <li class="nav-item"><i class="fa-brands fa-whatsapp fs-1"></i></li>
                        <li class="nav-item"><i class="fa-brands fa-x-twitter fs-1"></i></li>
                        <li class="nav-item"><i class="fa-brands fa-pinterest fs-1"></i></li>
                    </ul>
                </div> 
                <div class="col-4">
                    <div class="float-end pt-3">
                        <ul class="list-unstyled d-flex align-items-center">
                            <li class="nav-item-link">
                                <a href="http://localhost:5174/contacts" class="nav-link"><i class="fa-solid fa-envelope"></i> info@boolfolio.com</a>
                            </li>
                            <li class="nav-item-link">
                                <a href="http://127.0.0.1:8000/login" target="_blank" class="nav-link"><i class="fa-solid fa-right-to-bracket"></i> Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
        <div class="container-fluid">
            <div class="row pt-4">
                <hr>
                <div class="col-12 text-center text-white">
                    <p><i class="fa-regular fa-copyright"></i> Tutti i diritti riservati | Ogni contenuto presente all'interno del sito è di esclusiva proprietà di Boolfolio s.p.a.</p>
                </div>
            </div> 
        </div>
    </footer>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

footer{
    background-color: rgb(0, 21, 45);
    padding: 50px 15px 30px; 

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
                    color: #6C63FF;
                    font-weight: 900;
                    border-bottom: 4px solid #6C63FF;
                }
            }

        }
    }

    hr{
        color: #6C63FF;
        border: 2px solid;
    }

    .nav-item{
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            transform: scale(1.2);
        }
    }
}

</style>