<template>
  <div class="home">
   
    <headerComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import headerComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    headerComponent
  }
}
</script>
