<template>
  <div>
    <headerComponent/> 
    <footerComponent/>
  </div>
    
 </template>
 <script>
 import headerComponent from '@/components/HeaderComponent.vue'
 import footerComponent from '@/components/footerComponent.vue'

 
 export default {
   name: 'CustomerStories',
   components: {
     headerComponent,
     footerComponent
   }
 }
 </script>