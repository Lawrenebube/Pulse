<template>
  <div>
    <headerComponent/>
    <header>
      <h1>Need an accurate financial forecast?</h1>
      <h2>Use Pulse to project your cash flow with confidence.</h2>
      <router-link to="/signUp">
        <button>Try 30 Days Free</button>
      </router-link>
    </header>
    <main>
      <section>
        <h2>Manage your cash flow.</h2>
      </section>
      <section>
        <div>
          <h3>Enter your cash flow projections</h3>
          <p>
            Add single income or expenses to your cash 
            flow for complete control.
          </p>
        </div>
        <div>
          <h3>Automate recurring entries</h3>
          <p>
            Reduce manual entry with powerful recurring income and expense logic.
          </p>
        </div>
        <div>
          <h3>View Detailed Transactions</h3>
          <p>
            Add multiple lines to a single item to make 
            your cash flow easy to understand.
          </p>
        </div>
        <div>
          <h3>Adjust past transactions</h3>
          <p>
            If something needs to be edited, you can 
            do that to any entry, at any time.
          </p>
        </div>
        <div>
          <h3>Dial in growth and expense curves</h3>
          <p>
            Anticipating some growth? Pulse can automate that, too.
          </p>
        </div>
        <div>
          <h3>Play with scenarios</h3>
          <p>
            Quickly see what would happen to your bottom line by 
            toggling income and expenses on and off.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Visualize your income and expenses.</h2>
        </div>
        <div>
          <section>
            <h3>Track you cash flow over any time range</h3>
            <p>
              Monitor your cash flow by week, month, or 
              custom date range. Check your cash on hand at 
              the beginning of each month and view each day’s 
              incoming and outgoing funds.
            </p>
          </section>
          <section>
            <h3>Organize cash flow into categories</h3>
            <p>Know where your money’s coming from and going.</p>
          </section>
          <section>
            <h3>Group cash flow by customer</h3>
            <p>Know who your best (and worst) customers will be.</p>
          </section>
          <section>
            <h3>Group cash flow by project</h3>
            <p>Quickly measure potential profitability on a project basis.</p>
          </section>
        </div>
      </section>
      <SignUpforFree/>
      <section>
        <div>
          <h2>Connect your accounting software.</h2>
        </div>
        <div>
          <section>
            <h3>Quickbooks Online Integration</h3>
            <p>
              Sync at any time to get the latest transactions 
              from QuickBooks Online.
            </p>
          </section>
          <section>
            <h3>Compare actuals and projections</h3>
            <p>
              By putting your accounting data 
              right alongside your cash flow projections, 
              you can compare your projections with your actual cash flow.
            </p>
          </section>
          <section>
            <h3>Less manual entry and errors</h3>
            <p>
              With a direction connection, you don’t have 
              to worry about messing anything up.
            </p>
          </section>
        </div>
      </section>
      <section>
        <div>
          <h2>Share your projections.</h2>
        </div>
        <div>
          <section>
            <h3>Invite collaborators</h3>
            <p>
              Share the work load with your team by 
              inviting them to manage cash flow with you.
            </p>
          </section>
          <section>
            <h3>Share with investors</h3>
            <p>
              We offer read-only access so you can share 
              cash flow projections with people who don’t 
              need to make changes.
            </p>
          </section>
          <section>
            <h3>Attach files</h3>
            <p>
              Include proposals, invoices and contracts with 
              transactions to audit or help evaluate income 
              and expenses.
            </p>
          </section>
          <section>
            <h3>Export data and print reports</h3>
            <p>
              Easily export your cash flow data from Pulse 
              to a CSV file.
            </p>
          </section>
        </div>
      </section>
      <SignUpforFree/>
    </main>
    <footerComponent/> 
  </div>
   
 </template>
 <script>
 import headerComponent from '@/components/HeaderComponent.vue'
 import footerComponent from '@/components/footerComponent.vue'
import SignUpforFree from '@/components/signUpforFree.vue';

 
 export default {
   name: 'FeaturesView',
   components: {
    headerComponent,
    footerComponent,
    SignUpforFree
}
 }
 </script>