<!-- SEZIONE JS SCRIPT -->
<script>

// IMPORTO LE COMPONTENTI
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      
    }
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div>
      <!-- HEADER -->
      <AppHeader />
      <div>
        <!-- ROUTER VIEW -->
        <router-view></router-view>
      </div>
      <!-- FOOTER -->
      <AppFooter />
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/generals.scss' as *;

</style>