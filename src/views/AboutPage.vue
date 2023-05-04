<template>
    <div class="about">
        <headerComponent/>
        <main>
            <h1>About</h1>
            <h2>
                We created Pulse because we needed a way to understand our 
                cash flow and make smarter financial decisions 
                for our small business.
            </h2>
            <p>
                In any business, it’s important to understand what your current 
                and future financial situation looks like. It helps you plan, 
                make decisions and change course if necessary. But, it’s tough 
                to do that with accounting software alone
            </p>
            <p>
                While our accounting software allowed us to enter our income, 
                expenses and invoices and view reports, it didn’t handle 
                forecasts very well. It definitely didn’t let us add 
                possible income and expense items to see how they would 
                affect our bottom line into the future.
            </p>
            <p>
                We built Pulse as a way to help small businesses (like ours) manage 
                their cash flow more easily.
            </p>
            <p>
                Pulse gives you the ability to understand your financial position 
                at any time, past, present or future. While cash flow spreadsheets 
                and accounting software focus on the totals, Pulse gives you the 
                ability to make the tough daily decisions you face when 
                running a small business.
            </p>
        </main>
        <footerComponent/>
    </div>
</template>
<script>
 import headerComponent from '@/components/HeaderComponent.vue'
 import footerComponent from '@/components/footerComponent.vue'

 
 export default {
   components: {
     headerComponent,
     footerComponent
   }
 }
 </script>
 <style scoped>
    .about {
    color: #464951;
    display: grid;
    grid-template-columns: 1fr;
    place-items: left;
    place-content: center;
    min-height: 100vh;
    width: 84.3em;
    margin: auto;
    }
    
    h1, h2 {
    color: #080c16;
    }
    main {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2em;
        padding: 2em 6em 6em 6em;
        text-align: left;
        
    }
    main h1 {
        font-size: 3.2rem;
        width: 10em;
    }
    main h2 {
        font-size: 2.3rem;
        width: 16em;
    }
    main p {
        font-size: 1.15rem;
        letter-spacing: 0.01em;
        line-height: 1.5;
        width: 32em;
    }
</style>