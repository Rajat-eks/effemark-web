import React from "react";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="bg-gradient-to-tr bg-[#D9D9D9] py-10 px-60 ">
      <div className="container mx-auto p-8  bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-center">Refund Policy</h1>

        <section className="mb-6 pt-4 border-t-2">
          <h2 className="text-xl font-semibold mb-4">1. Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Under the following circumstances, clients may choose to cancel & be
            eligible for refund on their trademark search and monitoring
            services:
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">2. Order Not Needed</h2>
          <p className="list-disc list-inside text-gray-700 leading-relaxed">
            If a customer decides that the trademark search or monitoring
            service is no longer necessary, they are free to cancel their order,
            but if the order work is already started, then we will not be able
            to refund you or we might be able to proceed the partial refund.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            3. Timeframe for Free Cancellation & Refund
          </h2>
          <p className="list-disc list-inside text-gray-700 leading-relaxed">
            Customers are not charged a cancellation fee if they decide to
            cancel their order within 6 hours of placing it. A refund will be
            given if the cancellation request is filed within this window of
            time and the consumer has already paid. A one-time refund will be
            processed within approximately 7 to 10 working days.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            4. Starting a Cancellation Request
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Customers can start a cancellation request by sending an email to
            info@effemark.com, which will direct them to the company's customer
            service team. The cause for the cancellation as well as pertinent
            order details should be included in the request. Please be aware
            that refunds may not be available for cancellation requests sent
            beyond the allotted period or if the service has already begun. For
            more information on eligibility and refund processing, the customer
            may consult the previously mentioned refund policy or our customer
            care at +1-972-256-8133.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed ">
            If you have any questions about this Refund Policy, please contact
            us at &nbsp;
            <a
              href="mailto:info@effemark.com"
              className="text-blue-600 underline"
            >
              info@effemark.com
            </a>
          </p>
        </section>
        <div className="flex flex-col pt-6">
          <span>
            <b>Website: </b>
            <a
              href="https://www.effemark.com "
              className="text-blue-700 font-semibold"
            >
              www.effemark.com
            </a>
          </span>
          <span>
            <b>Support Email: </b>
            info@effemark.com
          </span>
          <span>
            <b>Support Call: </b>
            India - +1-972-256-8133, (469) 666-1181
          </span>
          <span>
            <b>Office: </b>: Suite-427, <br /> 425 Broadhollow Road Melville{" "}
            <br /> | NY-11747
          </span>
        </div>
      </div>
    </main>
  );
};

export default page;
