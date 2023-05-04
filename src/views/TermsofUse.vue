<template>
    <headerComponent/>
    <main>
        <section>
            <h1>Terms of Use</h1>
            <p>Last updated: May 16th, 2018</p>
            <p>
                Please read these Terms of Use ("Terms", "Terms of Use") 
                carefully before using the Pulseapp.com website (the "Service") 
                operated by Pulse, LLC (referred to hereinafter as "us", "we", or "our").
            </p>
            <p>
                Your access to and use of the Service is conditioned upon your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who wish to access or use the Service.
            </p>
            <p>
                By accessing or using the Service you agree to be bound by 
                these Terms. If you disagree with any part of the terms then 
                you do not have permission to access the Service.
            </p>
        </section>
        <article>
            <h2>Communications</h2>
            <p>
                By creating an Account on our service, you agree to subscribe to 
                newsletters, marketing or promotional materials and other information
                we may send. However, you may opt out of receiving any, or all, 
                of these communications from us by following the unsubscribe link or
                instructions provided in any email we send. You agree that we can use 
                your company name or logo in our advertising and marketing unless and 
                until you tell us in writing not to.
            </p>
        </article>
        <article>
            <h2>Purchases</h2>
            <p>
                If you wish to purchase any product or service made available through 
                the Service ("Purchase"), you may be asked to supply certain information
                relevant to your Purchase including, without limitation, your credit card
                number, the expiration date of your credit card, your billing address, 
                and your shipping information.
            </p>
            <p>
                You represent and warrant that: (i) you have the legal right to use any 
                credit card(s) or other payment method(s) in connection with any Purchase; 
                and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p>
                The service may employ the use of third party services for the purpose of 
                facilitating payment and the completion of Purchases. By submitting your 
                information, you grant us the right to provide the information to these 
                third parties subject to our Privacy Policy.
            </p>
            <p>
                We reserve the right to refuse or cancel your order at any time for reasons 
                including but not limited to: product or service availability, errors in the
                description or price of the product or service, error in your order or other reasons.
            </p>
            <p>
                We reserve the right to refuse or cancel your order if fraud or an unauthorized or 
                illegal transaction is suspected.
            </p>
            <p>
                If you sign up for an Account, and you don't cancel your Account within 30 days, 
                you will be billed monthly starting on the 30th day after your Account was initially
                created. If you cancel prior to the processing of your first invoice on the 30th day, 
                you will not be charged.
            </p>
        </article>
        <article>
            <h2>Refunds</h2>
            <p>
                If you are not satisfied with the service, we will issue a full refund up to 30 days 
                after Purchase if your Account is canceled within 30 days of that Purchase. Subsequent
                Purchases are not eligible for refunds.
            </p>
            <p>
                Refunds will be issued to the credit card used to make the Purchase. We will not issue 
                cash refunds. If we determine that charges were made in error, then we will credit your 
                account with the appropriate amount.
            </p>
        </article>
        <article>
            <h2>Availability, Errors and Inaccuracies</h2>
            <p>
                We are constantly updating product and service offerings on the Service. 
                We may experience delays in updating information on the Service and in our 
                advertising on other web sites. The information found on the Service may contain 
                errors or inaccuracies and may not be complete or current. Products or services 
                may be mispriced, described inaccurately, or unavailable on the Service and we 
                cannot guarantee the accuracy or completeness of any information found on the Service.
            </p>
            <p>
                We therefore reserve the right to change or update information and to correct errors, 
                inaccuracies, or omissions at any time without prior notice.
            </p>
        </article>
        <article>
            <h2>Acceptable Use</h2>
            <p>
                You are solely responsible for all Customer Data (as defined below), and are 
                liable for your Customer Data and the manner in which you collect or distribute 
                your Data to third parties. We reserve the right to remove any Customer Data from 
                our Service that we determine is in violation of these Terms.
            </p>
            <p>
                The following is a non-exhaustive list of Terms that you agree to abide 
                by when you use the Service:
            </p>
            <ol>
                <li>You must be 18 years or older to use this Service.</li>
                <li>
                    You must be a human. Accounts registered by "bots" or 
                    other automated methods are not permitted.
                </li>
                <li>
                    You must provide your legal full name, a valid email 
                    address, and any other information requested in order 
                    to complete the signup process.
                </li>
                <li>
                    You are responsible for maintaining the security of 
                    your account and password. Pulse cannot and will not 
                    be liable for any loss or damage from your failure to 
                    comply with this security obligation.
                </li>
                <li>
                    You are responsible for all Content posted and activity that occurs under your account.
                </li>
                <li>
                    You may not use the Service for any illegal or unauthorized purpose. 
                    You must not, in the use of the Service, violate any laws in your 
                    jurisdiction (including but not limited to copyright laws).
                </li>
            </ol>
            <p>
                We may suspend your account at any time without notice for conduct that violates 
                these Terms. Additionally, if you violate these Terms, you may be subject to legal 
                liability and prosecution.
            </p>
        </article>
    </main>
    <footerComponent/> 
 </template>
 <script>
 import headerComponent from '@/components/HeaderComponent.vue'
 import footerComponent from '@/components/footerComponent.vue'

 
 export default {
   name: 'TermsofUse',
   components: {
     headerComponent,
     footerComponent
   }
 }
 </script>