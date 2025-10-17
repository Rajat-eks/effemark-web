// pages/business-model.tsx
import Head from "next/head";

export default function BusinessModel() {
  return (
    <>
      <Head>
        <title>EffeMark | Business Model</title>
        <meta name="description" content="Learn about EffeMark’s trademark services, international payments, compliance, and business model." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Business Model: EffeMark</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>
            EffeMark is a specialized digital service provider focused on delivering comprehensive trademark search and monitoring services for intellectual property professionals, law firms, businesses, and entrepreneurs worldwide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Services Offered</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Trademark Search Services</li>
            <li>Trademark Monitoring</li>
            <li>Global Trademark Search</li>
            <li>Trademark Docketing Services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Workflow</h2>
          <p>
            Clients submit their trademark requirements through our website. We then deliver comprehensive reports via secure digital delivery channels.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Revenue Model</h2>
          <p>
            Our revenue model is service-based. We charge clients per search, subscription-based monitoring, or based on custom quotations depending on the complexity and scope of services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">International Use Case</h2>
          <p className="mb-2">
            A significant portion of our clientele is international — primarily from the US, UK, Canada, Europe, and Australia.
          </p>
          <p>We intend to use Razorpay's international payment capabilities to:</p>
          <ul className="list-decimal list-inside mt-2 space-y-1">
            <li>Accept payments from global customers via international credit/debit cards and other supported global payment methods.</li>
            <li>Offer a seamless and secure checkout experience for clients purchasing trademark services on our platform.</li>
            <li>Receive payments in foreign currencies for digital services rendered remotely from India.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Compliance</h2>
          <p>
            All services are delivered online and no physical goods are involved. Our operations are fully compliant with relevant cross-border digital service regulations and we ensure strict adherence to data protection and confidentiality norms required in the intellectual property domain.
          </p>
        </section>
      </main>
    </>
  );
}
