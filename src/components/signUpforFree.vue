<template>
    <div class="signupsection">
        <router-link to="/plus" class="signUp">Sign Up for a Free 30-Day Trial →</router-link>
      </div>
</template>
<script>
 export default {
  name: 'signUpforFree',
}
</script>
<style scoped>
.signupsection {
    text-align: center;
    background-image: linear-gradient(90deg,#00ab6a,#23ea76);
    font-weight: 700;
    font-size: 2.5rem;
    padding: 1.5em 0em 1.5em 0em;
  }
  .signUp {
    color: white;
    text-decoration: underline;
  }
  .signUp:hover {
    color: #080c16;
    transition: all 0.5s ease-in-out;
  }
</style>