import React from 'react';

const PaymentPolicy = () => {
  return (
    <section id='next-section' className="bg-white flex justify-center items-start pt-12 pb-12 lg:pt-16 lg:pb-20 px-8 md:px-12">
      <div className="max-w-3xl text-black text-left md:text-justify space-y-4 text-base leading-relaxed">
        <p>
         At Justvy Global Innovations LLP, we are committed to maintaining a transparent and straightforward payment process for our clients. 
         Whether you are engaging with us for a one-time project or subscribing to ongoing services, it is important that you fully understand 
         the terms and conditions surrounding payments. This Payment Policy provides detailed information about the payment methods we accept, 
         the terms and conditions governing payments, and how we handle related matters such as late payments, payment disputes, and third-party fees.
        </p>

        <h1 className="font-bold text-4xl py-3">Payment Methods</h1>
        <h3 className="font-bold text-2xl">Overview</h3>
        <p>
          To accommodate our diverse clientele, Justvy Global Innovations LLP offers a variety of payment methods. We strive to make the 
          payment process as convenient as possible, while also ensuring security and reliability in all transactions.
        </p>
        <h3 className="font-bold text-2xl">Accepted Payment Methods</h3>
        <p>
          We accept the following payment methods, each of which is subject to our standard processing terms:
        </p>
        <ul className="list-disc pl-6 space-y-1">
        <li>
            <strong>Credit/Debit Cards:</strong> We accept all major credit and debit cards, including Visa, MasterCard, and American 
            Express. Card payments are processed securely through our payment gateway provider, ensuring that your financial information 
            is protected at all times.
        </li>
        <li>
            <strong>Bank Transfers:</strong> Clients may choose to pay via direct bank transfer. Bank transfer details will be provided upon 
            request or during the invoicing process. Please note that bank transfers may take a few days to clear, and services will only 
            commence once the payment has been confirmed.
        </li>
        <li>
            <strong>Digital Wallets:</strong> For clients who prefer digital payments, we accept payments through popular digital wallets 
            such as PayPal, Google Pay, and other similar services. These methods offer a quick and convenient way to complete your transaction.
        </li>
        <li>
            <strong>UPI (Unified Payments Interface):</strong> For clients based in India, we accept payments through UPI, a real-time payment 
            system that facilitates inter-bank transactions. This method is both fast and efficient, often completing within seconds.
        </li>
        <li>
            <strong>Other Payment Gateways:</strong> Depending on the client's location or preference, we may accept payments through additional 
            payment gateways as specified during the transaction. Any specific payment gateway options will be communicated to the client in advance.
        </li>
        </ul>
        <h3 className="font-bold text-2xl">Security Measures</h3>
        <p>
          Justvy Global Innovations LLP prioritizes the security of our clients' payment information. We use industry-standard encryption 
          and secure payment gateways to process all transactions. Clients can be assured that their financial data is handled with the 
          utmost care and is never stored on our servers without consent.
        </p>

        <h1 className="font-bold text-4xl py-3">Payment Terms</h1>
        <h3 className="font-bold text-2xl">Project-Based Services</h3>
        <p>
          For project-based services, the following payment terms apply:
        </p>
        <ul className="list-disc pl-6 space-y-1">
        <li>
            <strong>Upfront Payment:</strong> A minimum of 50% of the total project cost is required upfront before any work commences. 
            This advance payment secures your project's place in our schedule and covers initial costs, including planning, design, and 
            any preliminary development work.
        </li>
        <li>
            <strong>Final Payment:</strong> The remaining balance is due upon completion of the project and prior to the final delivery 
            of deliverables. Clients will receive a final invoice detailing the work completed and any additional charges incurred (if applicable). 
            Full payment must be received before the final product is handed over or deployed.
        </li>
        <li>
            <strong>Milestone Payments:</strong> In some cases, where projects are particularly large or complex, payment may be broken 
            down into milestones. Each milestone will represent a specific phase of the project (e.g., design, development, testing), and 
            payment will be required upon the completion of each milestone. This approach ensures that both parties remain aligned throughout 
            the project's duration.
        </li>
        </ul>
        <h3 className="font-bold text-2xl">Subscription-Based Services</h3>
        <p>
          For clients utilizing our subscription-based services, the following payment terms apply:
        </p>
        <ul className="list-disc pl-6 space-y-1">
        <li>
            <strong>Advance Payments:</strong> Payments for subscription-based services must be made in advance, according to the billing cycle 
            selected (monthly, quarterly, or annual). Clients will receive an invoice or payment reminder before the start of each billing period.
        </li>
        <li>
            <strong>Automatic Renewal:</strong> Unless otherwise specified, subscriptions will automatically renew at the end of each billing 
            cycle. Clients are responsible for ensuring that payment details are up-to-date to avoid service interruptions.
        </li>
        <li>
            <strong>Suspension of Service:</strong> Failure to renew a subscription before the due date may result in the suspension or 
            termination of the service. If a service is suspended due to non-payment, it will only be reactivated once full payment of 
            any outstanding balance is received.
        </li>
        </ul>
        <h3 className="font-bold text-2xl">Custom Payment Plans</h3>
        <p>
          In some cases, Justvy Global Innovations LLP may offer custom payment plans tailored to the specific needs of a client or project. 
          These plans will be detailed in the project contract or service agreement and must be adhered to throughout the duration of the 
          project or service period.
        </p>
        
        <h1 className="font-bold text-4xl py-3">Invoices</h1>
        <h3 className="font-bold text-2xl">Invoice Issuance</h3>
        <p>
          Invoices for services rendered by Justvy Global Innovations LLP are issued electronically and sent to the customer’s registered 
          email address. This ensures that clients have immediate access to their billing information and can process payments promptly.
        </p>
        <h3 className="font-bold text-2xl">Invoice Details</h3>
        <p>
          Each invoice will include the following details:
        </p>
        <ul className="list-disc pl-6 space-y-1">
        <li>
            <strong>Invoice Number:</strong> PA unique identifier for tracking and reference purposes.
        </li>
        <li>
            <strong>Project or Service Description:</strong> A detailed breakdown of the services provided or the project milestones achieved.
        </li>
        <li>
            <strong>Payment Terms:</strong> The due date for payment and any applicable terms.
        </li>
        <li>
            <strong>Total Amount Due:</strong> The full amount to be paid, including any applicable taxes or additional charges.
        </li>
        <li>
            <strong>Payment Instructions:</strong> Information on how to complete the payment, including bank details for transfers or links 
            to online payment gateways.
        </li>
        </ul>
        <h3 className="font-bold text-2xl">Payment Deadline</h3>
        <p>
          Unless otherwise agreed upon in the contract, invoices must be paid within 15 business days from the date of issuance. This timeframe 
          allows clients sufficient time to process payments while ensuring that Justvy Global Innovations LLP receives timely compensation for 
          the services provided.
        </p>

        <h1 className="font-bold text-4xl py-3">Late Payments</h1>
        <h3 className="font-bold text-2xl">Late Payment Fees</h3>
        <p>
          Invoices that are not paid within the specified timeframe are subject to a late payment fee of 2% per month on the outstanding balance. 
          This fee is applied to cover the administrative costs associated with managing overdue accounts and to encourage prompt payment.
        </p>
        <h3 className="font-bold text-2xl">Service Suspension</h3>
        <p>
          Continuous delays in payment may result in the suspension of services until all outstanding payments are received. If services are 
          suspended due to non-payment, Justvy Global Innovations LLP reserves the right to charge a reactivation fee to cover the costs 
          associated with resuming services.
        </p>
        <h3 className="font-bold text-2xl">Debt Collection</h3>
        <p>
          In cases where invoices remain unpaid for an extended period, Justvy Global Innovations LLP may engage third-party debt collection 
          agencies to recover the outstanding balance. Clients will be responsible for any additional fees incurred as a result of debt 
          collection efforts.
        </p>
        
        <h1 className="font-bold text-4xl py-3">Payment Disputes</h1>
        <h3 className="font-bold text-2xl">Dispute Resolution</h3>
        <p>
          Any disputes related to payments must be raised within 7 business days of receiving the invoice. This ensures that any issues are 
          addressed promptly, minimizing disruption to services.
        </p>
        <h3 className="font-bold text-2xl">Submission of Disputes</h3>
        <p>
          Disputes should be submitted in writing to <a href="mailto:info@Justvy.in" className="text-blue-600">info@Justvy.in</a> and 
          include the following:
        </p>
        <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Invoice Number:</strong> The specific invoice being disputed.
            </li>
            <li>
              <strong>Details of the Dispute:</strong> A clear explanation of the issue, including any supporting documentation.
            </li>
            <li>
              <strong>Desired Resolution:</strong> The client’s preferred outcome, whether it be an adjustment to the invoice, a payment 
              extension, or another form of resolution.
            </li>
        </ul>
        <h3 className="font-bold text-2xl">Response Time</h3>
        <p>
          We will review and respond to disputes within 10 business days. During this time, any late payment fees will be temporarily suspended 
          until the dispute is resolved. If the dispute is resolved in favor of the client, necessary adjustments will be made to the invoice.
        </p>


        <h1 className="font-bold text-4xl py-3">Refunds and Cancellations</h1>
        <h3 className="font-bold text-2xl">Refund Policy</h3>
        <p>
          For information on refunds, please refer to our <a href="/policies/refund-policy" className='text-blue-600'>Refund Policy</a>. 
          This document outlines the conditions under which refunds may be issued and the process for requesting a refund.
        </p>
        <h3 className="font-bold text-2xl">Cancellation of Services</h3>
        <p>
          In the case of cancellation of services, any outstanding payments for work already completed are due immediately. Clients will 
          receive a final invoice reflecting the work completed up to the point of cancellation. Services will only be fully terminated 
          once this payment is received.
        </p>

        <h1 className="font-bold text-4xl py-3">Currency</h1>
        <h3 className="font-bold text-2xl">Default Currency</h3>
        <p>
          All payments must be made in INR unless otherwise agreed upon in writing. The currency will be specified in the project contract 
          or service agreement.
        </p>
        <h3 className="font-bold text-2xl">Exchange Rates</h3>
        <p>
          If payment is made in a currency different from the specified currency, the client is responsible for any exchange rate differences 
          or conversion fees charged by their bank or payment provider. The amount received by Justvy Global Innovations LLP must equal the 
          invoiced amount, regardless of currency fluctuations.
        </p>

        <h1 className="font-bold text-4xl py-3">Third-Party Fees</h1>
        <h3 className="font-bold text-2xl">Responsibility for Fees</h3>
        <p>
          Any fees charged by third-party payment providers (e.g., currency conversion fees, transaction fees) are the responsibility of the 
          customer. Justvy Global Innovations LLP is not liable for any additional charges incurred during the payment process.
        </p>
        <h3 className="font-bold text-2xl">Fee Transparency</h3>
        <p>
          Clients are encouraged to review the terms and conditions of their chosen payment method to understand any applicable fees. Justvy 
          Global Innovations LLP will not adjust the invoice amount to account for third-party fees.
        </p>

        <h1 className="font-bold text-4xl py-3">Changes to the Payment Policy</h1>
        <h3 className="font-bold text-2xl">Right to Amend</h3>
        <p>
          Justvy Global Innovations LLP reserves the right to amend this Payment Policy at any time. Amendments may be made to reflect changes 
          in our business practices, industry standards, or legal requirements.
        </p>
        <h3 className="font-bold text-2xl">Notification of Changes</h3>
        <p>
          Changes to the Payment Policy will be communicated to customers via email and will take effect for all new transactions and renewals. 
          Clients are encouraged to review the policy periodically to stay informed about any updates.
        </p>

        <h1 className="font-bold text-4xl py-3">Contact Information</h1>
        <h3 className="font-bold text-2xl">Support Contact</h3>
        <p>
          For any questions or concerns regarding this Payment Policy, clients are encouraged to reach out to our billing department at
          <a href="mailto:info@Justvy.in" className="text-blue-600"> info@Justvy.in</a>. Our team is available to assist with any 
          inquiries related to payments, billing, and account management.
        </p>
        <h3 className="font-bold text-2xl">Business Hours</h3>
        <p>
          Our support team operates during standard business hours, Monday through Friday. Any inquiries submitted 
          outside of these hours will be addressed on the next business day.
        </p>
      </div>
    </section>
  );
};

export default PaymentPolicy;