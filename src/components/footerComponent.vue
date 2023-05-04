<template>
    <footer>
        <div class="footlinks">
            <div class="logoButton">
                <router-link to="/">
                    <img src="../assets/pulse-logo.svg" alt="">
                </router-link>
                <button aria-label="signup"  class="signUp">Sign Up for a Free 30-Day Trial</button>
            </div>
            <div class="links">
                <ul class="link">
                <li>Product</li>
                <li>
                    <router-link to="/" exact>Features</router-link> 
                </li>
                <li>
                    <router-link to="/Pricing" exact>Pricing</router-link> 
                </li>
                <li>
                    <router-link to="/signup" exact>Sign Up</router-link> 
                </li>
            </ul>
            <ul class="link">
                <li>Company</li>
                <li>
                    <router-link to="/CustomerStories" class="customer-link" exact>Customer Stories</router-link>
                </li>
                <li>
                    <router-link to="/about" exact>About</router-link> 
                </li>
                <li>
                    <router-link to="/contact" exact>Contact</router-link> 
                </li>
            </ul>
            <ul class="link">
                <li>Resources</li>
                <li>
                    <router-link to="/help" exact>Support</router-link>
                </li>
                <li>
                    <router-link to="/blog" exact>Blog</router-link>
                </li>
            </ul>
            </div>
            
        </div>
        

        <div class="foot">
            <p>
                   &copy; 2019 Pulseapp.com, Inc. All Rights Reserved |
                   <router-link to="/TermsofUse" exact>Terms of Use  </router-link>| 
                   <router-link to="/privacy" exact>Privacy Policy  </router-link>| 
                   <router-link to="/eu-privacy" exact>EU Privacy</router-link> 
            </p>
            <p>
                Pulse is made by
                <a href="https://simplefocus.com/" target="_blank" rel="noopener noreferrer">Simple Focus.</a>
                We also make
                <a href="https://getballpark.com/" target="_blank" rel="noopener noreferrer">Ballmark, </a>
                <a href="https://sifterapp.com/" target="_blank" rel="noopener noreferrer">Sifter, </a> and
                <a href="https://curated.co/" target="_blank" rel="noopener noreferrer">Curated.</a>
            </p>
        </div>
    </footer>
</template>

<script>
 export default {
  name: 'footerComponent'
}
</script>
<style scoped>
footer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 7em;
    place-content: center;
    background-color: #080c16;
    height: 28em;
    padding: 4em 6em 2em 6em;
    max-width: 84.3em;
    width: 100%;
    margin: auto;
    
}
.logoButton {
    display: grid;
    grid-template-columns:  1fr;
    gap: 5rem;
}
.signUp {
 display: inline-block;
 text-align: center;
 background-color: inherit;
 width: 20rem;
 height: 3.5em;
 padding: 1em ;
 color: #080c16;
 font-weight: 700;
  font-size: 1rem;
  background-image: linear-gradient(to right,#00ad6a, #1fe374);
}
.signUp:hover {
    box-shadow: -0.5em 0.7em #1e1f24;
    background-color: transparent;
    transform: translate3d(-5px,5px,-1px);
    transition: all ease-in-out 0.3s;
    transform-style: preserve-3d;
}
.footlinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    font-weight: 500;
    font-size: 1.3rem;
}
.links {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    font-size: 1.2rem;
}
.link {
    display: grid;
    grid-template-columns: 1fr;
    color: #fcfcfc;
}
.footlinks a {
    color: #1fe374;
    font-weight: 400;
    font-size: 1.1rem;
    cursor: pointer;
}
.foot {
    color: #8c8d8f;
    font-size: 0.8rem;
}
.foot a {
    color: #8c8d8f;
    text-decoration: underline;  
}
</style>