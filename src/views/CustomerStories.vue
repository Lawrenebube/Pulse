<template>
  <div class="customerStories">
    <headerComponent/>
    <main>
      <h1>See What Our Customers Are Saying About Pulse.</h1>
      <div class="stories">
        <section>
          <router-link to="/case-study-realtyninja" >
            <img src="../assets/casmir.jpg" alt="casmir-img">
          </router-link>
          <p> “Casimir Loeber from RealtyNinja 
              tells us how Pulse takes the 'fear and stress out 
              of cash flow projection and management.'”
          </p>
          <h2>HOW REALTYNINJA USES PULSE TO AVOID STRESS ABOUT CASH FLOW</h2>
          <router-link to="/case-study-realtyninja"  class="storylink"> Read Case Study →</router-link>
        </section>
        <section>
          <router-link to="/case-study-boldunderline" >
            <img src="../assets/boldunderline.jpg" alt="">
          </router-link>
          <p> “Pulse helps us monitor the heart-rate 
              of our business and reconcile our monthly 
              operational expenses.”
          </p>
          <h2>HOW BOLDUNDERLINE USES PULSE TO STAY FINANCIALLY STRONG</h2>
          <router-link to="/case-study-boldunderline" class="storylink"> Read Case Study →</router-link>
        </section>
        <section>
          <router-link to="/case-study-ngen-works" >
            <img src="../assets/ngen.jpg" alt="">
          </router-link>
          <p> “Pulse gives the folks at nGen 
              Works confidence in their cash flow.”
          </p>
          <h2>HOW NGEN WORKS USES PULSE TO MAKE BETTER BUSINESS DECISIONS</h2>
          <router-link to="/case-study-ngen-works" class="storylink"> Read Case Study →</router-link>
        </section>
        <section>
          <router-link to="/case-study-bureau-of-digital" >
            <img src="../assets/carl.jpg" alt="">
          </router-link>
          <p> “After using Pulse at his previous 
              agency, Carl came back to Pulse because it 
              gives him a feeling of control over his business.”
          </p>
          <h2>BUREAU OF DIGITAL USES PULSE TO CONTROL CASH FLOW</h2>
          <router-link to="/case-study-bureau-of-digital" class="storylink"> Read Case Study →</router-link>
        </section>
      </div>
      <section class="somethingtosay">
        <h3>Have something to say about Pulse? We’d love to hear it.
           <a href="mailto:support@pulseapp.com">Tell us your story.</a>
        </h3>
        <div class="testimonies">
          <div>
            <p>
              “Cash flow is king, and yet, there are no tools to properly 
              manage it. I think Pulse is really onto something. It took 
              me about an hour to finish entering all of my inflows and 
              outflows and share it with the other partners. I now have a 
              really clear idea of where I need to tighten things up to hit my goals.”
            </p>
            <p class="name">
              Navid Safabakhsh,
              <a href="http://freshout.us/" target="_blank" rel="noopener noreferrer">Freshout</a>
            </p>
          </div>
          <div>
            <p>
              “Pulse is perfect for those of us who are not 
              accounting-minded and need something more automated 
              than an Excel spreadsheet and less complicated than 
              Quickbooks.”
            </p>
            <p class="name">
              Scott Allen, Founder/CCO, 
              <a href="http://www.monkeyfoot.com/" target="_blank" rel="noopener noreferrer">Monkeyfoot Interactive</a>
            </p>
          </div>
          <div>
            <p>
              “Pulse is the only app that has allowed me to easily see how 
              my cash flow changes if I add additional income or expenses 
              and plan accordingly. I would rebuild Pulse as a spreadsheet
               if you guys stopped offering it.”
            </p>
            <p class="name">
              Daryl Freier, Fine Council
            </p>
          </div>
          <div>
            <p>
              “Pulse is exactly the application I was looking for when 
              I was trying to figure out how to track eight accounts 
              in a single view. It was very difficult with Excel and 
              beyond my accounting skills.”
            </p>
            <p class="name">
              Karin Armstrong, 
              <a href="https://www.uvic.ca/" target="_blank" rel="noopener noreferrer">UVic.CA</a>
            </p>
          </div>
          <div>
            <p>
              “Our company, which has offices in Milan, Italy and 
              a network of more than 400 consultants worldwide, 
              has been using Pulse for some weeks, and 
              we love it because it’s simple and totally web-based.”
            </p>
            <p class="name">
              Simone Lovati, founder, 
              <a href="https://fashionbi.com/" target="_blank" rel="noopener noreferrer">Fashionbi.com</a>
            </p>
          </div>
          <div>
            <p>
              “Thank you for developing Pulse App. I have been using
               Excel to manage my cash flow for years, 
              as there was no robust online alternative available. 
              Pulse is excellently designed and has no junk features. 
              It’s nice and simple and does an excellent job!”
            </p>
            <p class="name">
              Niall Kearns
            </p>
          </div>
          <div>
            <p>
              “Pulse gives me a fluid overview of my cash flow 
              that I can not achieve using my accounting package.”
            </p>
            <p class="name">
              Rachel, 
              <a href="https://www.boost.co.nz/" target="_blank" rel="noopener noreferrer">Boost New Media</a>
            </p>
          </div>
        </div>
        

      </section>
      <div class="signupsection">
        <router-link to="/plus" class="signUp">Sign Up for a Free 30-Day Trial →</router-link>
      </div>
      
    </main> 
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
 <style scoped>
  .customerStories {
    background-color: #eafaf1;
    color: #464951;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
    min-height: 100vh;
    width: 84.3em;
    margin: auto;
  }
  .customerStories h1  {
    font-weight: 700;
    font-size: 3.4rem;
    width: 17em; 
    margin: auto;
    text-align: center;
    padding-bottom: 1em;
    color: #080c16;
  } 
  .stories section {
    width: 17rem;
    margin: auto;
  }
  .stories {
    display: grid;
    grid-template-columns: repeat(4,1fr);   
    gap: 1.6em;
    padding: 0.5em 5em 2em 5em;
    line-height: 1.3;
  }
  .stories img {
    width: 10em;
    height: 10em;
   display: grid;
   place-items: center;
   margin: auto;
    border-radius: 100%;
    border: 0.1em solid #062c27;
  }
  .stories p {
    font-size: 1rem;
    
  }
  .stories h2 {
    font-size: 0.9rem;
    padding-top: 1em;
    line-height: 1.5;
  }
  .storylink,.somethingtosay a  {
    text-decoration: underline;
    color: #00ad6a;
    font-weight: 700;
  }
  .storylink:hover,.somethingtosay a:hover {
    color: #080c16;
    transition: all 0.5s ease-in-out;
  }
  .somethingtosay {
    background-color: #fcfcfc;
    padding: 4em;
    width: 84.3em;
    margin: auto;
    line-height: 1.4;
  }
  .somethingtosay h3 {
    font-weight: 400;
    font-size: 1.2rem;
    text-align: center;
    padding-bottom: 2em;
  }
  
  .testimonies {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }
  .testimonies div{
    background-color: white;
    border: 0.1em solid #d6dae5;
    padding: 1.9em;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3em;
  }
  .testimonies p {
    font-size: 1.1rem;
  }
  .name {
    font-weight: bold;
    font-size: 0.3rem;
  }
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