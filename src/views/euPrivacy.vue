<template>
    <div class="eu-privacy">
        <headerComponent/>
        <main>
            <h1>EU Privacy and Data Protection</h1>
            <section>
                <h2>Summary</h2>
                <p>
                    Privacy and security is a priority for us. Our 
                    Privacy Policy(link) and Terms of Use(link) documents 
                    cover most of what you need to know about how we use 
                    personal information that is provided to us, but we 
                    wanted to be extra clear about our practices as they 
                    relate to recent EU privacy legislation.
                </p>
                <p>
                    Unless otherwise defined in this document, terms 
                    used in this document have the same meanings as in 
                    our Privacy Policy(link) and Terms of Use(link).
                </p>
            </section>
            <section>
                <h2>GDPR</h2>
                <p>
                    If you use the Internet, GDPR affects you. 
                    Pulse has made significant changes to 
                    become GDPR compliant.
                </p>
                <h3>What is GDPR?</h3>
                <p>
                    To quote the official GDPR website:
                </p>
                <p>
                    “The EU General Data Protection Regulation (GDPR) replaces 
                    the Data Protection Directive 95/46/EC and was designed to 
                    harmonize data privacy laws across Europe, to protect and 
                    empower all EU citizens data privacy and to reshape the way 
                    organizations across the region approach data privacy.”
                </p>
                <p>
                    Put more simply, GDPR outlines some rules around how companies 
                    process the data of individuals, and has scary fines 
                    for non-compliance.
                </p>
                <p>
                    In light of this new regulation, here are the details about how we handle your data and how you can access it.
                </p>
            </section>
            <section>
                <h2>Security and Data Center Location</h2>
                <p>
                    Pulse’s servers are located in the US and are 
                    managed by Heroku. Our databases are backed up daily, 
                    and those daily backups are stored for one week. 
                    The databases are also backed up weekly, and those 
                    weekly backups are kept for 30 days. All backups are 
                    stored by Heroku. You can learn more about Heroku’s 
                    data architecture here.
                </p>
            </section>
            <section>
                <h2>Data Retention</h2>
                <p>
                    We collect and retain the following 
                    information from our customers:
                </p>
                <ul>
                    <li>Full name</li>
                    <li>Email</li>
                    <li>Company name</li>
                    <li>Username</li>
                    <li>Billing postal code</li>
                </ul>
                <p>
                    We collect this information for the purpose of 
                    providing the Pulse service, identifying and 
                    communicating with our customers, responding to 
                    our customer requests/enquiries, getting paid for 
                    use of our products and services, and improving 
                    our products and services.
                </p>
            </section>
            <section>
                <h2>List of Sub-processors</h2>
                <p>
                    As noted in our Privacy Policy, we may employ third party 
                    companies or service providers and individuals to facilitate 
                    our Service, to provide the Service on our behalf, to perform 
                    Service-related services and/or to assist us in analyzing 
                    how our Service is used.
                </p>
                <p>
                    These third parties have access to your Personal Information 
                    only to perform specific tasks on our behalf and are obligated 
                    not to disclose or use your information for any other purpose.
                </p>
                <p>
                    GDPR defines third party companies and service providers 
                    like these as “sub-processors”.
                </p>
                <p>
                    Where applicable, we’ve linked to each sub-processor’s 
                    policies; we recommend reading each one to make sure 
                    you’re OK with us sharing some of your data with them
                </p>
                <ul>
                    <li>
                        We use 
                        <a href="https://stripe.com/guides/general-data-protection-regulation#stripe-and-the-gdpr"
                         target="_blank" rel="noopener noreferrer">Stripe</a>  
                         to process our customers’ payments for our Service.
                    </li>
                    <li>
                        We use 
                        <a href="https://postmarkapp.com/eu-privacy" target="_blank" rel="noopener noreferrer">
                            Postmark
                        </a>  
                        to send transactional emails (like receipts and notifications).
                    </li>
                    <li>
                        We use 
                        <a href="https://www.google.com/analytics/terms/us.html" target="_blank" rel="noopener noreferrer">
                            Google Analytics
                        </a>  
                        to track visits to our website, but only if 
                        the visitor has consented to being tracked.
                    </li>
                    <li>
                        We use 
                        <a href="https://docs.intercom.com/pricing-privacy-and-terms/data-protection/how-were-preparing-for-gdpr" 
                            target="_blank" rel="noopener noreferrer">
                            Intercom
                        </a>  
                        to provide customer support and to communicate with 
                        customers that are logged into the Service.
                    </li>
                </ul>
                <p>
                    If you have specific questions about what data we send to 
                    any of those services, contact us using the information below 
                    and we’ll be happy to explain in more detail.
                </p>
            </section>
            <section>
                <h2>Access to Your Information (DSR Requests)</h2>
                <p>
                    Another term that GDPR defines is “Data subject”. Put simply, a 
                    data subject is the individual whom particular personal data is 
                    about. A DSR (Data Subject Rights) request is when an individual 
                    asks a data controller to take action on their personal data. 
                    An example of a DSR request would be if a Pulse customer asks 
                    for an export of all the data they have entered into Pulse, or 
                    to permanently delete all the information they’ve 
                    entered into Pulse
                </p>
                <p>
                    We plan on processing these requests manually, though we’ve built 
                    some tools to allow our customers to access, correct, amend, or 
                    delete most of their data themselves.
                </p>
                <p>
                    We will give a Pulse customer access to any personal information we 
                    have about them within 30 days of any request for that information, 
                    and we won’t charge anything to process these requests. Individuals 
                    may request to access, correct, amend or delete information we hold 
                    about them by contacting us using the information below. Unless 
                    prohibited by law, we will remove any Personal Information about an 
                    individual from our servers at their request
                </p>
            </section>
            <section>
                <h2>Contact Information</h2>
                <p>
                    If you have any questions or concerns about this document, 
                    please contact us by email at info@pulseapp.com or by mail 
                    at 2125 Broad Avenue, Memphis, TN 38117, US.
                </p>
            </section>
        </main>
        <footerComponent/>
    </div>
</template>

<script>
import headerComponent from '@/components/HeaderComponent.vue'
import footerComponent from '@/components/footerComponent.vue'


export default {
//   name: '',
  components: {
    headerComponent,
    footerComponent
  }
}
</script>
<style scoped>
    .eu-privacy {
    color: #464951;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
    min-height: 100vh;
    width: 84.3em;
    margin: auto;
}
h1, h2, h3 {
    color: #080c16;
}
main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
    padding: 7em 6em;
}
main h1 {
    font-size: 3.2rem;
}
main h2 {
    font-size: 2.3rem;
}
main h3 {
    font-size: 1.8rem;
}
main p, li {
    font-size: 1.16rem;
    letter-spacing: 0.01em;
    line-height: 1.5;
}
section {
    display: flex;
    flex-direction: column;
    gap: 1em;
}
section a {
    text-decoration: underline;
    color: #00ad6a;
    font-weight: 700;
}
ul li {
    list-style-type: disc;
    margin-left: 1.2em;
}


</style>