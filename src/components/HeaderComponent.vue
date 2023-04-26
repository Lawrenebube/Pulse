<template>
  <header>
        <img src="../assets/pulse-logo.svg" alt="">
        <nav>
          <router-link to="/" exact>Features</router-link> 
          <router-link to="/CustomerStories" class="customer-link" exact>Customer Stories</router-link>
          <router-link to="/Pricing" exact>Pricing</router-link> 
          <router-link to="/blog" exact>Blog</router-link>
          <button class="signUp">Sign Up</button>
        </nav>
    </header>
</template>

<script>
 export default {
  name: 'headerComponent',
}
</script>
<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  padding: 3em 5em;
  margin: auto;
  background-color: inherit;
}
nav {
  display: grid;
  grid-template-columns: repeat(5,1fr );
  gap: 1.5em;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  margin: auto;
}
a {
  color: #00ad6a;
  
}
.customer-link {
  width: 10em;
}
.router-link-exact-active{
  color: #080c16;
}
.signUp {
 display: inline-block;
 text-align: center;
 background-color: inherit;
 border: 0.2em solid #00ad6a;
 width: 6rem;
 padding: 0.5em ;
 color: #00ad6a;
 font-weight: 700;
  font-size: 1rem;
  margin-top: -0.6em;
}
.signUp:hover {
    box-shadow: -0.5em 0.7em;
    background-color: transparent;
    transform: translate3d(-5px,5px,-1px);
    transition: all ease-in-out 0.3s;
    transform-style: preserve-3d;
}
</style>

