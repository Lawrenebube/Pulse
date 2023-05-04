<template>
    <header>
        <img src="../assets/pulse-logo.svg" alt="logo">
        <p>Take control of your cash flow with the #1 cash flow software.</p>
    </header>
    <div>
        <div>
            <form action="">
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" id="">
                <label for="Lastname">Last Name</label>
                <input type="text" name="Lastname" id="">
                <label for="Companyname">Company Name</label>
                <input type="text" name="Companyname" id="">
                <label for="CreatePassword">Create a Password</label>
                <input type="password" name="CreatePassword" id="">
                <label for="ConfirmPassword">Confirm Password</label>
                <input type="password" name="ConfirmPassword" id="">
            </form>
            <label for="siteaddress">Your Pulse Site Address</label>
            <p>
                Every Pulse account has its own unique web 
                address where you'll log in. Remember to bookmark it!
            </p>
            <input type="text" name="siteaddress">
            <span>.pulseapp.com</span>
            <p>Letters and numbers only, no spaces.</p>
         </div>
        <section>
            <div>
                <h1>Pulse Plus</h1>
                <p>Free Trial • $59/mo after</p>
            </div>
            <div>
                <p>"Pulse takes the fear and stress out of cash flow projection and management.”</p>
                <img src="../assets/casmir.jpg" alt="">
                <div>
                    <p>CASIMIR LOEBER</p>
                    <p>BASE-10 DESIGN & DEVELOPMENT INC.</p>
                </div>
            </div>
            <div>
                <h3>Need more from Pulse?</h3>
                <p>
                    If you have a complex business with multiple financial accounts, 
                    currencies, or auditing needs, you should try our Pulse Unlimited
                    plan for only $30 more per month.</p>
            </div>
        </section>
        <section>
            <h2>
                Billing Information
                <span><img src="../assets/lock.png" alt=""></span>
            </h2>
            <form action="">
                <label for="cardname">Name on card</label>
                <input type="text" name="cardname" id="">
                <label for="Creditdebitcardno">Credit or debit card</label>
                <input type="number" name="Creditdebitcardno" id="">
                <p>
                    All data and transactions are securely stored 
                    and processed using industry standards.
                </p>
            </form>
            <section>
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
        <div>
            <p>
            You’re signing up for a free 30-day trial of the Plus plan.
             At the end of the trial on May 31 we’ll charge you $59 a 
             month to keep using Pulse, and you can <router-link to="">cancel any time.</router-link> 
            </p>
        </div>
    </div>
</template>
<script>
</script>