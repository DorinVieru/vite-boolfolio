<!-- SEZIONE JS SCRIPT -->
<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name:'ProjectsType',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: [],
            types: [],
            currentTypePage: 1,
            lastTypePage: null,
        }
    },
    created() {
        this.getProjects();
        this.getTypes();
    },
    methods: {
        getProjects(page_number){
            this.projects = [];
            axios.get(`${this.store.baseUrl}/api/projects/type/${this.$route.params.slug}`, {
                params: {
                    page: page_number
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentTypePage = response.data.results.current_page;
                this.lastTypePage = response.data.results.last_page;
            })
        },

        getTypes(){
            axios.get(`${this.store.baseUrl}/api/types/`).then((response) => {
                this.types = response.data.results;
            })
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <main>
        <div class="container mt-5"> 
            <div class="row"> 
                <div class="col-12"> 
                    <h1 class="text-center">I tipi di progetti presenti</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro earum, tenetur quidem totam corporis pariatur magnam hic obcaecati ad ipsa nesciunt accusantium consequatur asperiores. Consequatur nostrum voluptatem fugit quo necessitatibus.</p>
                    <div @click="getProjects(page_number)">
                        <router-link :to="{ name: 'projects-type', params: { slug: type.slug } }" class="badge rounded-pill text-bg-primary me-2 text-decoration-none type-badge" v-for="type, index in types" :key="index">{{ type.name }}</router-link>
                    </div>
                </div>
                <div class="row"> 
                    <ProjectCard v-for="project, index in projects" :key="index" :project="project" />
                </div>
                <div class="row"> 
                    <div class="col-12">
                        <ul class="pagination d-flex justify-content-center">
                            <li> <button :class="currentTypePage == 1 ? 'disabled' : ''" class="btn btn-square btn-outline-success me-3 fw-bold" @click="getProjects(currentTypePage - 1)">Precedente</button> </li>
                            <li> <button :class="currentTypePage == lastTypePage ? 'disabled' : ''" class="btn btn-outline-success fw-bold" @click="getProjects(currentTypePage + 1)">Successivo</button> </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 text-center mt-5">
                    <a href="/blog" > <button class="btn my-btn px-5 fs-5 text-white"><i class="fa-solid fa-door-open"></i> Torna a visualizzare i progetti</button></a>
                </div>
            </div>
        </div>
    </main>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

.pagination{
    margin: 20px 10px;
}

.type-badge{
    background-color: rgb(0, 21, 45) !important;
    font-size: 18px;
    transition: 0.4s;

    &.active,
    &:hover{
        background-color: #00c1d4 !important;
    }
}

.btn-outline-success{
    --bs-btn-color: #6C63FF;
    --bs-btn-border-color: #6C63FF;
    --bs-btn-hover-bg: #6C63FF;
    --bs-btn-hover-border-color: #6C63FF;
    --bs-btn-active-bg: #6C63FF;
    --bs-btn-active-border-color: #6C63FF;
    --bs-btn-disabled-color: #6C63FF;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #6C63FF;
}

.my-btn{
    background-color: #00c1d4;
    transition: 0.5s;

    &:hover{
        background-color: white;
        border: 2px solid #00c1d4 !important;
        color: black !important;
    }
}
</style>