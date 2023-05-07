<template>
  <div class="home">
   
    <headerComponent/>
    
    <header class="header">
      <h1>Yes, your business can survive that expense.</h1>
      <p>
        Do you know how much money you’ll have in two weeks? 
        Two months? Two years? Business owners who use Pulse 
        have better cash flow habits and a firm grasp on the 
        pulse of their business. <span> First month free.</span>
      </p>
      <router-link to="/signUp">
        <button>Try 30 Days Free</button>
      </router-link>
      <p class="headerPlan">Plans start at $29. <router-link to="/Pricing">See full pricing.</router-link> </p>
    </header>
    <main>
      <section class="businessOwners">
        <h2>Business owners trust Pulse.</h2>
        <p>Below are real quotes from business owners.</p>
      </section>
      <div class="realQuotes">
        <section>
          <h3>“I like that it provides the opportunity to test scenarios.”</h3>
          <p>
            You can quickly toggle income and expenses off and on to see 
            what happens based on different scenarios to see how they 
            impact your bottom line. When you can forecast your cash 
            flow this quickly and easily, you’re empowered to make 
            smarter business decisions.
          </p>
        </section>
        <section>
          <h3>“Pulse shows me how to track cash flow the right way.”</h3>
          <p>
            Stop stumbling your way through spreadsheets not knowing 
            what you don’t know. Pulse shows you a simple, easy to 
            understand chart that answers the questions you have 
            about your cash flow.
          </p>
        </section>
        <section>
          <h3>“It’s easy to set up and understand.”</h3>
          <p>
            Our user friendly design makes Pulse a 
            breeze to set up and manage your cash flow. 
            It’s so easy that over half of our customers 
            are able to use Pulse every day without it 
            taking up too much of their time.
          </p>
        </section>
        <section>
          <h3>
            “It used to take us hours to manually do 
            in Excel what Pulse does out of the box.”
          </h3>
          <p>
            If you’re trying to manage your cash flow 
            in systems that aren’t specifically designed 
            for that purpose, you’re wasting the one resource 
            more valuable than your cash, your time.
          </p>
        </section>
        <section>
          <h3>“I like the simplicity.”</h3>
          <p>
            Pulse is meant to do one thing really well—cash 
            flow management. No other product on the market 
            is as focused on putting you in control of how 
            cash moves in and out of your business.
          </p>
        </section>
        <section>
          <h3>“I like that Pulse is web-based.”</h3>
          <p>
            You can access Pulse from any computer, 
            any time. There’s no software to install.
          </p>
        </section>
        <section>
          <h3>“I can connect it to my accounting software.”</h3>
          <p>
            With our direct connection to QuickBooks Online, 
            keeping your cash flow projections and your 
            actual performance in sync is a breeze.
          </p>
        </section>
      </div>
      <div class="businessDecisions">
        <section>
          <h2>Make smarter business decisions with Pulse.</h2>
          <p>
            Do you know if you can hire another employee or 
            take some money out of the company? Should you take 
            on that new project or should turn it down? With Pulse, 
            you immediately see how business decisions will impact 
            your cash in the future, which in turn gives you the 
            confidence you need to know if the decision is right.
          </p>
        </section>
        <section class="pulseCard">
          <img src="../assets/carl.jpg" alt="">
          <p>
            “Pulse makes my business smarter. 
            We make better decisions because we can see further. 
            You could say it has lowered our stress level by 
            removing the fear of not knowing.”
          </p>
          <h3>CARL SMITH, BUREAU OF DIGITAL</h3>
          <router-link to="/CustomerStories" class="storylink">Read Customer Story →</router-link>
        </section>
      </div>
      <section class="smallBusiness">
        <h2>
          Pulse is specifically designed for small businesses.
        </h2>
        <p>
          Our customers include creative and technology agencies, 
          service providers, restaurants, manufacturers, retail 
          shops, contractors, freelancers, and more.
        </p>
        <router-link to="/signUp">
          <button aria-label="signup"  class="signUp">Sign Up for a Free 30-Day Trial</button>
        </router-link>
      </section>
      <section class="realBusiness">
        <h2>Pulse helps real businesses survive & thrive.</h2>
        <p class="realBusinessPara">
          Our blog features stories from real business owners 
          with real business advice, in addition to our own 
          insights on how you can build better cash flow habits.
        </p>
        <div class="realCards" >
          <section class="realCard">
            <router-link to="/blog/growth-in-a-downturn-how-arash-fayz-of-la-tutoring-pivoted-after-an-80-client-drop" exact>
            <img src="../assets/Growth-Startupsneedpulse.png" alt="">
            <h3>SURVIVE & THRIVE</h3>
            <p class="realCardHead">
              Growth in a Downturn: How Arash Fayz of LA 
              Tutoring Pivoted After An 80% Client Drop
            </p>
            <p class="realCardPara">
              Arash Fayz of LA Tutors knew he needed to change 
              his business model when the pandemic hit. 
              Here’s how he scaled his tutoring business 
              after an 80% drop in clients.
            </p>
            <router-link to="/blog/growth-in-a-downturn-how-arash-fayz-of-la-tutoring-pivoted-after-an-80-client-drop" class="storylink">
               Read Case Study →
            </router-link>
          </router-link>
          </section>
         <section class="realCard">
          <router-link to="/blog/monetizing-a-network-how-jodi-brandstetter-started-her-second-business"  exact>
            <img src="../assets/Growth-Startupsneedpulse.png" alt="">
            <h3> ENTREPRENEURSHIP</h3>
            <p class="realCardHead">
              Monetizing a Network: How Jodi Brandstetter Started Her Second Business
            </p>
            <p>
              STEM talent consultant Jodi Brandstetter started her second business 
              during the pandemic—a business book publishing network. 
              Here’s how she made it work.
            </p>
            <router-link to="/blog/monetizing-a-network-how-jodi-brandstetter-started-her-second-business" class="storylink">
               Read Case Study →
            </router-link>
          </router-link>
         </section>
          <section class="realCard" >
            <router-link to="/blog/5-steps-to-optimizing-a-services-business-from-brogan-renshaw-founder-of-firewire-digital"  exact>
            <img src="../assets/pulse-invoicing-hero.jpg" alt="">
            <h3>PRO TIPS</h3>
            <p class="realCardHead">
              5 Steps to Optimizing A Services Business from 
              Brogan Renshaw, Founder of FireWire Digital
            </p>
            <p>
              Brogan Renshaw filled a gap in his local market 
              by starting an SEO agency, FireWire Digital. Here’s 
              what he’s learned from niching down and streamlining 
              his business.
            </p>
            <router-link to="/blog/5-steps-to-optimizing-a-services-business-from-brogan-renshaw-founder-of-firewire-digital" class="storylink">
               Read Case Study →
            </router-link>
          </router-link>
          </section>
          
        </div>
      </section>
      <section class="spreadsheet">
        <h2>Can your spreadsheets do this?</h2>
        <p>
          Pulse is like your cash flow spreadsheet, except 
          the math isn’t wrong. Also, Pulse has:
        </p>
        <section class="spreadsheetPost">
          <div>
          <img src="" alt="">
          <h3>Multiple Cash Flow Views</h3>
          <p>
            Monitor your cash flow on a yearly, monthly, 
            weekly, daily transactional basis.
          </p>
        </div>
        <div>
          <img src="" alt="">
          <h3>Customers and Projects</h3>
          <p>
            Run cash flow reports on customers and projects 
            to see how profitable they’re going to be.
          </p>
        </div>
        <div>
          <img src="" alt="">
          <h3>Visual Reports</h3>
          <p>
            With our easy-to-understand reports, you can 
            see cash moving in and out of your business.
          </p>
        </div>
        <div>
          <img src="" alt="">
          <h3>Currency Conversion</h3>
          <p>
            If your business operates on multiple currencies, 
            we have you covered with today’s exchange rates.
          </p>
        </div>
        <div>
          <img src="" alt="">
          <h3>Invite Your Team</h3>
          <p>
            Invite your team to help out, or showcase your 
            projections to investors by giving them read-only access.
          </p>
        </div>
        <div>
          <img src="../assets/quickbooks.png" alt="">
          <h3>Connects to Quickbooks Online</h3>
          <p>
            Save time and reduce errors by keeping Pulse 
            and your accounting software in sync.
          </p>
        </div>
        </section>
        <router-link to="/Features" class="storylink">See Everything Pulse Does →</router-link>
      </section>
      <div class="onlineWay">
        <section>
          <h2>Pulse is the easy, online way to manage and project your cash flow.</h2>
          <router-link to="/CustomerStories">
            <button aria-label="Customer Stories" class="onlineWaySignUp signUp" >See All Customer Stories</button>
          </router-link>
        </section>
        <section class="pulseCard">
          <img src="../assets/casmir.jpg" alt="">
          <p>
            “Pulse has allowed us to visualize our cash flow before 
            our brains turned to mush trying to deal with receipts, 
            spreadsheets and accordion folders.”
          </p>
          <h3>CASIMIR LOEBER, REALTYNINJA</h3>
          <router-link to="/customer-stories/case-study-realtyninja" class="storylink">Read Customer Story →</router-link>
        </section>
      </div>
      <signUpforFree/>
    </main>
    
  </div>
  <footerComponent/>
</template>

<script>
// @ is an alias to /src
import headerComponent from '@/components/HeaderComponent.vue'
import footerComponent from '@/components/footerComponent.vue'
import signUpforFree from '@/components/signUpforFree.vue'

export default {
  name: 'HomeView',
  components: {
    headerComponent,
    footerComponent,
    signUpforFree
  }
}
</script>
<style scoped>
 .home {
    background-color: #eafaf1;
    color: #464951;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
    min-height: 100vh;
    width: 84.3em;
    margin: auto;
    line-height: 1.5;
  }
  h1, h2, h3 {
    color: #080c16;
  }
  p {
    font-size:1.13rem;
    letter-spacing: 0.01em;
  }
  .header {
    text-align: left;
    padding: 1em 5em ;
    height: 90vh;
    background: url('../assets/graph.jfif')  no-repeat bottom left ;
    background-size:cover;
    margin: auto;
  }
  .header h1 {
    font-size: 3rem;
    width: 14em;
  }
  .header p {
    font-size: 1.15rem;
    line-height: 1.5;
    margin-right: 25em;
    padding: 1em 0;
  }
  .header span {
    color: #080c16;
    font-weight: 600;
  }
  .header button {
    border-color: #3ba0f2;
    background-color: #3ba0f2;
    color: white;
    font-weight: 600;
    font-size: 1.6rem;
    padding: 0.6em 1em;
    cursor: pointer;
  }
  .header .headerPlan {
    font-size: 0.9rem;
    font-weight: 400;
  }
  .header .headerPlan a {
    color: #080c16;
    font-weight: 500;
    text-decoration: underline;
  }
  main {
    background-color: #fcfcfc;
    padding-top: 2em;
  }
  .businessOwners {
    text-align: center;
  }
  .businessOwners h2 {
    font-size: 2.7rem;
    font-weight: 700;
    padding-bottom: 0.5em;
  }
  .realQuotes {
    width: 31em;
    margin: auto;
    padding: 3em 0 7em 0em;
    display: flex;
    flex-direction: column;
    gap: 3.5em;
  }
  .realQuotes h3 {
    font-size: 1.3rem;
    padding-bottom: 0.2em;
  }
  .businessDecisions {
    border-top: 0.1em solid #d6dae5;
    padding: 5em 5em 6em 5em;
    height: 115vh;
    display: flex;
    flex-direction: row;
    gap: 8em;
  }
  .businessDecisions h2 {
    font-weight: 700;
    font-size: 3rem;
    padding-bottom: 0.6em;
  }
  .businessDecisions p {
    width: 32.6em;
  }
  .pulseCard {
    text-align: center;
    border: 0.1em solid #d6dae5;
   padding: 2.4em 1.5em;
  }
  .pulseCard img {
    height: 5.5em;
    border-radius: 100%;
    margin-bottom: 1em;
  }
  .pulseCard p {
    color: #00ad6a;
    font-size: 1.4rem;
    width: 17em;
    margin: auto;
    padding-bottom: 0.2em;
  }
   .pulseCard h3 {
    color: #464951;
    font-size: 0.9rem;
    padding: 0.8em ;
  }
  .storylink  {
    text-decoration: underline;
    color: #00ad6a;
    font-weight: 700;
  }
  .storylink:hover {
    color: #080c16;
    transition: all 0.5s ease-in-out;
  }
  .smallBusiness {
    background: url('../assets/hero-small-biz.jpg')  no-repeat center ;
    background-size:cover;
    height: 105vh;
    padding:10em 5em 5em 6em;
    color: #fcfcfc;
  }
  .smallBusiness h2 {
    font-weight: 700;
    font-size: 2.9rem;
    width: 10em;
    color: #fcfcfc;
    padding-bottom: 0.5em;
    line-height: 1.1;
  }
  .smallBusiness p {
    width: 24em;
    padding-bottom: 1.2em;
  }
  .signUp {
    display: inline-block;
    text-align: center;
    background-color: #fcfcfc;
    width: 20rem;
    height: 3.5em;
    padding: 1em ;
    color: #080c16;
    font-weight: 700;
    font-size: 1rem;
}
.signUp:hover {
    box-shadow: -0.5em 0.7em #fcfcfc;
    background-color: #fcfcfc;
    transform: translate3d(-5px,5px,-1px);
    transition: all ease-in-out 0.3s;
    transform-style: preserve-3d;
}
.realBusiness {
  margin: 6em auto ;
}
.realBusiness h2 {
    font-weight: 700;
    font-size: 3rem;
    padding-bottom: 0.4em;
    width: 15em;
    margin: auto;
    text-align: center;
}
.realBusinessPara {
  width: 35em;
  margin: auto;
  text-align: center;
  padding-bottom: 6em;
}
.realCards {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1.5em;
  padding: 0 5em;
}
.realCard {
  border: 0.1em solid #d6dae5;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 0.5em;
  outline: none;
  width: 23em;
 height: 35em;
  
}
.realCard:hover {
  border-color: #00ad6a;
    box-shadow: -0.5em 0.7em #00ad6a;
    background-color: inherit;
    transform: translate3d(-5px,5px,-1px);
    transition: all ease-in-out 0.3s;
    transform-style: preserve-3d;
}
.realCard img {
  height: 14em;
 width: 22.8rem;
}
.realCard h3 {
  color: #464951;
  font-size: 0.9rem;
  padding: 0 0 0 1.2em;
}
.realCard p {
  width: 21.6em;
  font-size: 1rem;
  color: #464951;
  padding: 0 0 0 1em;
}
.realBusiness .realCardHead {
  color:#080c16;
  font-weight: 700;
  font-size: 1.2rem;
  width: 17em;
  padding: 0 0 0 1em;
}
.realBusiness .storylink {
  margin: 0 0 7em 1em;
}
.spreadsheet {
  text-align: center;
  padding-top: 5em;
}
.spreadsheet a {
  font-size: 1.2rem;
}
.spreadsheet h2 {
  font-weight: 700;
  font-size: 2.8rem;
  width: 12em;
  margin: auto;
  line-height: 1.1;
}
.spreadsheetPost {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1.8em;
  padding: 3em 7em;
}
.spreadsheetPost img {
  height: 2.9em;
}
.spreadsheetPost p {
  font-size: 0.9rem;
}
.onlineWay {
  display: flex;
  padding: 10em 7em 9em 7em;
  gap: 7em;
}
button {
  cursor: pointer;
}
.onlineWay h2 {
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.1;
  padding-top: 2em;
}
.onlineWaySignUp {
  color: #00ad6a;
  border: 0.2em solid #00ad6a;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: white;
  margin-top: 3em;

}
.onlineWaySignUp:hover {
    box-shadow: -0.5em 0.7em #00ad6a;
}
.onlineWay .pulseCard p {
  width: 15em;
}
</style>
