<template>
    <div class="signup">
        <header>
            <router-link to="/signUp">
                <img src="../assets/pulse-logo.svg" alt="logo">
            </router-link>
            <p>Take control of your cash flow with the #1 cash flow software.</p>
        </header>
        <main>
            <div class="sectionn" >
                <div class="square">
                    <form action="">
                        <div class="labels">
                            <label for="firstname">First Name</label>
                            <span class="error">{{ error }}</span>
                        </div>
                        <input type="text" v-model="firstname" name="firstname" id="firstname">
                        <div>
                           <label for="Lastname">Last Name</label>
                           <span class="error">{{ error }}</span>
                        </div>
                        <input type="text" v-model="Lastname" name="Lastname" id="Lastname">
                        <div>
                           <label for="Companyname">Company Name</label>
                           <span class="error">{{ error }}</span>
                        </div>
                        <input type="text" v-model="Companyname" name="Companyname" id="Companyname">
                        <div>
                           <label for="CreatePassword">Create a Password</label>
                           <span class="error">{{ error }}</span>
                        </div>
                        <input type="password" v-model="CreatePassword" name="CreatePassword" id="CreatePassword">
                        <div>
                           <label for="ConfirmPassword">Confirm Password</label>
                           <span class="error">{{ error }}</span>
                        </div>
                        <input type="password" v-model="ConfirmPassword" name="ConfirmPassword" id="ConfirmPassword">
                    </form>
                    <div class="site">
                        <label for="siteaddress">Your Pulse Site Address</label>
                        <p class="everyAccount">
                            Every Pulse account has its own unique web 
                            address where you'll log in. Remember to bookmark it!
                        </p>
                        <input v-model="siteaddress" type="text" name="siteaddress">
                        <span>.pulseapp.com</span>
                        <p class="letter">Letters and numbers only, no spaces.</p>
                    </div>
                </div>
                <section class="secondSection">
                    <div>
                        <h1>Pulse Plus</h1>
                        <p class="trial">Free Trial • $59/mo after</p>
                    </div>
                    <div >
                        <section class="inspo">
                            <h2>
                                "Pulse takes the fear and stress out of cash 
                                flow projection and management.”
                            </h2>
                            <img src="../assets/casmir.jpg" alt="">
                        </section>
                        
                        <section>
                            <h3>CASIMIR LOEBER</h3>
                            <p class="title">BASE-10 DESIGN & DEVELOPMENT INC.</p>
                        </section>
                    </div>
                    <div class="needMore">
                        <h3>Need more from Pulse?</h3>
                        <p>
                            If you have a complex business with multiple financial accounts, 
                            currencies, or auditing needs, you should try our Pulse Unlimited
                            plan for only $30 more per month.
                        </p>
                    </div>
                    <router-link to="/signUp" class="signed">Switch now.</router-link>
                </section>
            </div>
            <h2 class="bills">
                Billing Information
                <span><img src="../assets/lock.png" alt=""></span>
            </h2>
            <section class="sectionn second">
                <form action="">
                    <label for="cardname">Name on card</label>
                    <input type="text" name="cardname" id="">
                    <label for="Creditdebitcardno">Credit or debit card</label>
                    <input type="number" placeholder="Card number" name="Creditdebitcardno" id="" >
                    <p>
                        All data and transactions are securely stored 
                        and processed using industry standards.
                    </p>
                </form>
                <section class="cancelNow">
                    <h2>Cancel any time.</h2>
                    <p>
                        Your first month is free, but we ask for your credit
                        card upfront to prevent an interruption in service. 
                        We won't charge you until the end of your 30-day free trial.
                    </p>
                    <p>
                        We'll email you reminders before your free trial is up, 
                        and we'll send you invoices each month when we charge your card.
                    </p>
                </section>
            </section>
            <div class="policies">
                <p>
                You’re signing up for a free 30-day trial of the Plus plan.
                At the end of the trial on May 31 we’ll charge you $59 a 
                month to keep using Pulse, and you can <router-link to="">cancel any time.</router-link> 
                </p>
                <div class="check">
                  <div>
                     <input type="checkbox" name="terms" id="">
                        I have read and agree to Pulse's 
                        <router-link to="/TermsofUse" >Terms of Use</router-link>
                        <span class="error"></span>
                     <input/>
               </div>
                <div>
                  <input type="checkbox" name="privacy" id="">
                     I have read and agree to Pulse's 
                     <router-link to="/privacy" >Privacy Policy</router-link>
                     <span class="error"></span>
                  <input/>
               </div>
                <div>
                  <input type="checkbox" name="newsletter" id="">
                     I want to receive a  
                     <router-link to="" >monthly newsletter</router-link>
                     with helpful cash flow advice
                     <span class="error"></span>
                  <input/>
               </div>
                </div>
                <button aria-label="start button">Start Trial</button>
            </div>
        </main>
        <footer>
            <p>
                Pulse is made by
                <a href="https://simplefocus.com/" target="_blank" rel="noopener noreferrer">Simple Focus.</a>
                We also make
                <a href="https://getballpark.com/" target="_blank" rel="noopener noreferrer">Ballmark, </a>
                <a href="https://sifterapp.com/" target="_blank" rel="noopener noreferrer">Sifter, </a> and
                <a href="https://curated.co/" target="_blank" rel="noopener noreferrer">Curated.</a>
            </p>
            <p>
                   &copy; 2019 Pulseapp.com, Inc. All Rights Reserved |
                   <router-link to="/TermsofUse" exact>Terms of Use  </router-link>| 
                   <router-link to="/privacy" exact>Privacy Policy  </router-link>| 
                   <router-link to="/eu-privacy" exact>EU Privacy</router-link> 
            </p>
        </footer>
    </div>
</template>
<script>
   export default {
      name :'signUp',
      data() {
         return {
            firstname:'',
            Lastname:'',
            Companyname:'',
            CreatePassword:'',
            ConfirmPassword:'',
         }
      }
   }
</script>
<style scoped>
    .signup {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
    min-height: 100vh;
    width: 84.3em;
    margin: auto;
    color: #464951;
    background-color: #fcfcfc;
 }
 header {
    background-color: #eafaf1;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    text-align: center;
    width: 84.3em;
    padding: 3em 0 2em 0;

 }
 header img {
    height: 3.5em;
 }
 header p {
    font-size: 1.1rem;
 }
 main {
    display:flex;
    flex-direction: column;
    gap: 3em;
    padding: 3em 7em;
    margin-bottom: 3em;    
 }
 .sectionn {
    display: flex;
    justify-content: space-between;
    gap: 2em;
    margin: auto;
 }
 .square, .second form {
    box-shadow: #464951 0px 3px 8px;
   width: 24em;
    margin: auto;
    border: 0.1em solid #d6dae5;
 }
 form {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    background-color: white;
    padding: 1.8em 2em;
 }
 .sectionn input {
    border: 0.14em solid #d6dae5;
    height: 2.8em;
    box-shadow: #464951 0px 0px 3px;
    border-radius: 0.2em;
    padding-left: 0.7em;
 }
 .sectionn input:hover {
    border: 0.14em solid #46b3ee;
    box-shadow: #46b3ee 0px 0px 3px;
 }
 input:focus {
    background-color: #e1eaf0;
 }
 input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  appearance: textfield;
}
 .labels {
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
 }
 .error {
    color: red;
    text-transform: uppercase;
    font-weight: 600;
 }
 .site {
    background-color: #eaecf0 ;
    padding: 2em 2em;
 }
 .site label {
    font-weight: 700;
 }
 .site p {
    font-size: 0.76rem;
    padding-bottom: 1.7em;
    padding-top: 0.4em;
 }
 .site .letter {
   padding-top: 0.7em;
 }
 .secondSection {
    width: 18em;
    display: flex;
    flex-direction: column;
    gap: 1em;
 }
 .secondSection div {
    border-top: 0.1em solid #d6dae5;
    padding-top: 2em;
 }
 .secondSection div:first-child {
    border-top: none;
 }
 .secondSection h1 {
    font-size: 2.5rem;
    color: #080c16;
 }
 .trial {
    font-size: 1.3rem;
 }
 .secondSection h3 {
    font-size: 0.9rem;
    color: #080c16;
 }
 .inspo {
    display: flex;
    padding-bottom: 1em;
 }
 .inspo h2 {
    font-size: 1rem;
    color: #080c16;
 }
 .sectionn img {
    height: 4.5em;
    border-radius: 100%;
    border: 0.1em solid #080c16;
 }
 .title {
    font-weight: 700;
    font-size: 0.9rem;
    padding-top: 0.4em;
 }
 .needMore h3, .cancelNow h3 {
    font-size: 1.28rem;
    color: #464951;
    /* padding-bottom: 0.2em; */
 }
 .needMore p, .cancelNow p, .second form p {
    font-size: 0.9rem;
    line-height: 1.6;
    padding-bottom: 1em;
 }
 .signed {
   color: #46b3ee;
   font-weight: 700;
   font-size: 1.2rem;
   text-decoration: underline;
 }
 .second form {
    box-shadow: #464951 0px 3px 8px;
    width: 24em;
    margin: auto;
    border: 0.1em solid #d6dae5;
    margin-top: -1.5em;
 }
 .second form input {
   margin-bottom: 0.8em;
 }
 .second form label {
   margin-top: 0.6em;
 }
 .second form p {
   padding-top: 1em;
 }
 .cancelNow {
   width: 18em;
 }
 .bills {
   font-size: 1.5rem;
 }
 .policies {
   width: 44em;
 }
 .check {
   display: flex;
   flex-direction: column;
   padding-top: 1em;
 }
 .check div {
   font-size: 0.9rem;
   padding-bottom: 0.4em;
   display: inline-block;
 }
 .check a {
   color: #46b3ee;
   font-weight: 600;
 }
 button {
   background-color:#1fe374;
   display: inline-block;
   padding: 0.8em 1.5em;
   border-radius: 0.5em;
   color: #080c16;
   font-weight: 600;
   font-size: 1.2rem;
   margin-top: 2em;
 }
 footer{
    width: 84.3em;
    margin: auto;
    background-color: #080c16;
    color: #d6dae5;
    display: flex;
    justify-content: space-between;
    padding: 1em 4em ;
 }
 footer p {
    font-size: 0.8rem;
 }
 footer a {
    color: #d6dae5;
    text-decoration: underline;
 }
 @media screen and (max-width:768px) {
   .signup {
      width: 23rem;
      margin: auto;
   }
   header, footer {
      width: 23.4em;
      margin: auto;
   }
   header p {
      width: auto;
   }
   main {
    display:flex;
    flex-direction: column;
    gap: 3em;
    padding: 2em;
    margin-bottom: 3em;  
 }
   .sectionn {
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin: auto;   
 }
 .square, .second form {
   width: 19em;
 }
 .bills {
   width: 12.6em;
   margin: auto;
 }
 .policies {
   width: 18em;
 }
 footer {
   text-align: center;
   display: flex;
   flex-direction: column;
   padding: 1em 2em ;
 }
}
</style>