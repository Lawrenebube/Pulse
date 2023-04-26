<template>
  <div class="price">
    <headerComponent/> 
    <main>
        <section class="heroTitle">
            <h1>Try Pulse free for 30 days.</h1>
            <p> See why Pulse is the best way to monitor your cash flow.
            Sign up for any plan and try Pulse absolutely free for 30 days.
            </p>
        </section>
        
        <div >
            <div class="hero">
                <div class="pulseBasis">
                    <h2 class="pulseTitle">
                        These are what we call the Pulse Basics. They’re what every customer gets.
                    </h2>
                    <ul >
                        <li>Manage cash flow on a daily, weekly, monthly, or yearly basis</li>
                        <li>Forecast growth with recurring income or expenses that scale automatically</li>
                        <li>Works with any currency</li>
                        <li>See Money In and Money Out, categorize transactions, and run helpful reports</li>
                        <li>Toggle entries and accounts on and off to game out different scenarios</li>
                    </ul>
                    <p>Just need the Pulse Basics?</p>
                    <p>
                        <router-link to="/signup">Get them now </router-link>
                        <span>for $29 per month.</span>  
                    </p>
                </div>
                <router-link to="/signup" class="recommended">
                    <div class="heading">
                        <h2>RECOMMENDED</h2>
                    <p class="recommendedTitle">Small Business Plan</p>
                    <p class="recommendedPrice">$59 per month</p>
                    <button aria-label="signup" class="recommendedSignUp">Sign Up Now</button>
                    <h3>YOU GET PULSE BASICS, PLUS:</h3>
                    </div>
                    
                    <ul class="bulletPoints">
                        <li>
                            <img src="../assets/icon-check-bullet.svg" alt="">
                            <p>
                                Manage cash flow across multiple financial accounts
                            </p>
                        </li>
                        <li>
                            <img src="../assets/icon-check-bullet.svg" alt="">
                            <p>
                                Invite your investors, book keeper, or management
                                team to see reports or manage cash flow
                            </p>
                        </li>
                        <li>
                            <img src="../assets/icon-check-bullet.svg" alt="">
                            <p>Integrate with QuickBooks Online for more accurate cash flow</p>
                        </li>
                        <li>
                            <img src="../assets/icon-check-bullet.svg" alt="">
                            <p> Track your actual cash flow alongside your projected cash flow</p>
                        </li>
                    </ul>
                </router-link>
                <router-link class="complexBusiness" to="/signup" >
                    <h2>
                        Complex business with multiple financial accounts, currencies, or auditing needs?
                    </h2>
                    <div class="heading">
                        <p class="complexBusinessTitle">Unlock Extra Features</p>
                        <p class="complexBusinessPrice">$89 per month</p>
                        <button aria-label="premium" class="premium">Try Premium</button>
                        <h3>GET IT ALL, PLUS</h3>
                    </div>
                    
                    <ul class="bulletPoints">
                        <li>
                            <img src="../assets/icon-check-bullet.svg" alt="">
                            <span>
                                Manage cash flow across unlimited financial accounts
                            </span>
                        </li>
                        <li>
                            <img src="../assets/icon-check-bullet.svg" alt="">
                            <span>Convert to any currency for localized cash flow reporting and projections</span>
                        </li>
                        <li>
                            <img src="../assets/icon-check-bullet.svg" alt="">
                            <span>Attach invoices or contracts to your cash flow
                                entries for accountability and auditing
                            </span>
                        </li>
                        <li></li>
                    </ul>
                </router-link>
            </div>
            <div class="subvert">
                <img src="../assets/subvert-avatar.png" alt="">
                <p class="subvertPulse">
                    “Pulse is worth every penny because it empowers business 
                    owners with critical financial insight and knowledge.”
                </p>
                <p class="subvertname">SUBVERT MARKETING, INC.</p>
            </div>
        </div>
        <section class="faq">
            <h2>FAQ</h2>
            <div class="faqSections">
                <div>
                <h3>How does the 30-day free trial work?</h3>
                <p>
                    You can use Pulse absolutely free for 30 days. After 30 days,
                    we will charge the credit card you used when you sign up. 
                    If you choose to cancel your account before your trial ends, 
                    your card will not be charged.
                </p>
            </div>
            <div>
                <h3>If I upgrade an existing account, do I get another free trial?</h3>
                <p>
                    Brand new accounts are the only ones eligible for a 30-day 
                    free trial. If you upgrade an existing account, 
                    your credit card will be billed the new amount on 
                    the date of your next billing cycle.
                </p>
            </div>
            <div>
                <h3>What is a “Financial Account”?</h3>
                <p>
                    Financial Accounts are a grouping of income and 
                    expense items that can be used for tracking or reporting purposes.

                    They’re designed to be flexible and can be used to differentiate 
                    between bank accounts, companies, individuals or between personal 
                    and business entries.
                </p>
            </div>
            <div>
                <h3>Do I have to commit to a long-term contract?</h3>
                <p>
                    No. There is no contract when you use Pulse, other 
                    than agreeing to our Terms of Service.
                </p>
            </div>
            <div>
                <h3>Will I be able to cancel my account if I don’t use Pulse?</h3>
                <p>
                    Yes – you can cancel your account at any time. To cancel your account, 
                    go to your billing page and click on “Please cancel my account” at 
                    the bottom of the page. The account owner is the only one who can cancel an account. 
                    An email request to delete an account is not considered cancellation.
                </p>
            </div>
            <div>
                <h3>What types of payments do you accept?</h3>
                <p>We accept payments made online using Visa, 
                    Mastercard, Discover, and American Express.
                </p>
            </div>
            </div>
            
        </section>

    </main>
    <footerComponent/>
  </div>
    

    
  
 </template>
 <script>
 import headerComponent from '@/components/HeaderComponent.vue'
 import footerComponent from '@/components/footerComponent.vue'

 
 export default {
   name: 'PricingView',
   components: {
     headerComponent,
     footerComponent
   }
 }
 </script>
 <style scoped>
 .price {
    background-color: #eafaf1;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
    min-height: 100vh;
    width: 84.3em;
    margin: auto;
 }
 main {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5em;
 }
 
 h1 {
    font-weight: 700;
    font-size: 3.4rem;
    width: 9em;
    margin: auto;
    padding-bottom: 0.3em;
 }
 .heroTitle p {
    width: 33em;
    margin: auto;
    font-size: 1.2rem;
 }
 
 .pulseBasis { 
    line-height: 1.5;
    color: #464951;
 }
 .pulseBasis ul {
    font-weight: 400;
    width: 20rem;
    padding: 1em 1.5em 2.4em 1.5em; 
 }
 .pulseBasis li {
    list-style-type:disc;
 }
 .pulseBasis a {
    color: #080c16;
    text-decoration: underline;
 }
 .pulseTitle {
    color: #00ad6a;
    font-size: 1.2rem;
    width: 16em;
    margin: auto;
   
 }
 .hero {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  width: 60em;
  margin:6em auto 2em auto;
 }
 
 .heading {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    text-align: center;
 }
 .recommended {
    background-color: #fcfcfc;
    border: 0.12em solid #1fe374;
    border-radius: 0.2em;
    margin-top: -5em;
 }
 .recommended h2 {
    color: #fcfcfc;
    background-color: #00ad6a;
    font-size: 1rem;
 }
 .recommendedTitle, .complexBusinessTitle {
    width: 6em;
    font-weight: 700;
    font-size: 3.1rem;
    color: #00ad6a;
    margin: auto;
    padding-top: 0.5em;
 }
 .recommendedPrice, .complexBusinessPrice {
    color: #83858a;
    font-size: 1.5rem;
 }
 .recommendedSignUp, .premium {
    display: inline-block;
    height: 3em;
    width: 10em;
    margin: auto; 
    font-weight: 700;
    font-size: 1.2rem;
    background-color: #1fe374;
    color: #464951;
    border: none;
    outline: none;
 }
 .recommendedSignUp:hover, .premium:hover {
    transition: all 0.2s ease-in-out;
   color: #080c16;
   transform: scale(1.1);
 }
 .recommended h3, .complexBusiness h3 {
    color: #464951;
    font-weight: 700;
    font-size: 0.9rem;
    padding-bottom: 1em;
 }
 .bulletPoints {
    font-weight: 400;
    width: 24rem;
    text-align: left;
    padding: 1em 1.5em 2.4em 1.5em;
 }
 .bulletPoints li {
    color: #464951;
    display: grid;
    grid-template-columns: 1fr 19fr;
    padding-bottom: 0.6em; 
 }
 .bulletPoints img {
    margin-top: 0.3em;
 }
 .complexBusiness {
    text-align: center;
    border: 0.1em solid #d6dae5;
    background-color: #fcfcfc;
    max-height: 34em;
 }
 .complexBusiness h2 {
    color: #464951;
    background-color: #f2f3f3;
    line-height: 1.3;
    height: 5em;
    width: 24rem;
    font-weight: 400;
    font-size: 0.8rem;
   padding-top: 0.8em;
 }
 .complexBusinessTitle {
    font-weight: 400;
    font-size: 2.2rem;
    width: 10em;
 }
 .subvert {
    margin: 5em auto;
    width: 60em;
 }
 .subvertPulse {
    width: 34em;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5;
    margin: auto;
    padding-top: 0.5em;
 }
 .subvertname {
    color: #00ad6a;
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    padding-top: 0.6em;
 }
 .faq {
    background-color: #fcfcfc;
    color: #080c16;
    text-align: left;
    padding: 6em ;
    width: 84.3em;
    margin: auto ;
 }
 .faq h2 {
    font-size: 3rem;
    padding-bottom: 0.5em;
 }
 .faqSections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4em;
 }
 .faqSections h3 {
    font-size: 1.25rem;
    padding-bottom: 0.5em;
 }
 .faqSections p {
    font-size: 1.15rem;
    color: #464951;
    line-height: 1.5;
 }
 </style>