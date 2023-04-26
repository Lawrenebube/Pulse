<template>
    <headerComponent/>
    <h1>hello</h1>
    <footerComponent/> 
 </template>
 <script>
 import headerComponent from '@/components/HeaderComponent.vue'
 import footerComponent from '@/components/footerComponent.vue'

 
 export default {
   name: 'FeaturesView',
   components: {
     headerComponent,
     footerComponent
   }
 }
 </script>