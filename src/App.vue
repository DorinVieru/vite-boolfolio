<!-- SEZIONE JS SCRIPT -->
<script>

// IMPORTO LE COMPONTENTI
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader,
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
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/generals.scss' as *;

</style>