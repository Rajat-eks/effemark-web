import Card from "@/components/Article/Card";
import CaseStudy from "@/components/CaseStudy";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";
import Testimonial from "@/components/Testimonial";
import WhyChoose from "@/components/WhyChoose";
import Banner from "@/components/assets/bg/trademark-bg.svg";
import Global from "@/components/assets/icons/global.svg";
import Hybrid from "@/components/assets/icons/hybrid.svg";
import Timely from "@/components/assets/icons/timely.svg";
import Premium from "@/components/assets/icons/premium.svg";
import SolutionShowcase from "@/components/SolutionShowcase";
import { monitorProduct, trademarkProducts } from "@/data/products";

const searchProducts: {
  title: string;
  desc: string;
  coverage: string;
  turnaround: string;
  addOns: string;
  price: number;
  note: string;
}[] = [
  {
    title: "Advanced AI-Full US Trademark Search",
    desc: "Similar + Phonetic Alternatives [Searched + Curated by Advanced AI]",
    coverage: "US Federal, WIPO",
    turnaround: "1-2 Business Days",
    addOns: "5+ Add-Ons Available",
    note: "*All results designated by the US at WIPO are always included.",
    price: 65,
  },
  {
    title: "Manual Full US Trademark Search",
    desc: "Similar + Phonetic Alternatives [Searched + Curated by Advanced AI]",
    coverage: "US Federal, WIPO",
    turnaround: "1-2 Business Days",
    addOns: "5+ Add-Ons Available",
    note: "*All results designated by the US at WIPO are always included.",
    price: 65,
  },
];
const monitorProducts: {
  title: string;
  desc: string;
  coverage: string;
  turnaround: string;
  addOns: string;
  price: number;
  note: string;
}[] = [
  {
    title: "Advanced AI-Full US Trademark Search",
    desc: "Similar + Phonetic Alternatives [Searched + Curated by Advanced AI]",
    coverage: "US Federal, WIPO",
    turnaround: "1-2 Business Days",
    addOns: "5+ Add-Ons Available",
    note: "*All results designated by the US at WIPO are always included.",
    price: 65,
  },
  {
    title: "Manual Full US Trademark Search",
    desc: "Similar + Phonetic Alternatives [Searched + Curated by Advanced AI]",
    coverage: "US Federal, WIPO",
    turnaround: "1-2 Business Days",
    addOns: "5+ Add-Ons Available",
    note: "*All results designated by the US at WIPO are always included.",
    price: 65,
  },
];
export default function Home() {
  return (
    <div>
      <HeroSection
        title="Comprehensive Trademark Search and Monitoring Services"
        description="Transform your brand's legal security with industry-leading search and monitoring services"
        banner={Banner}
        cunsultant={false}
      />
      {/* <Clients /> */}
      <WhyChoose />
      <SolutionShowcase
        searchProducts={trademarkProducts}
        monitorProducts={monitorProduct}
      />
      <Features
        features={[
          {
            title: "Global Coverage",
            description:
              "Comprehensive search across 180+ countries and specialized industry databases",
            logo: Global,
          },
          {
            title: "Hybrid Technology",
            description:
              "Proprietary AI-powered search algorithms enhanced by expert manual verification",
            logo: Hybrid,
          },
          {
            title: "Premium Quality",
            description:
              "Detailed analysis reports with clear risk assessments and actionable recommendations",
            logo: Premium,
          },
          {
            title: "Timely Insights",
            description:
              "Early detection of potential conflicts to prevent costly legal disputes",
            logo: Timely,
          },
        ]}
      />
      <Process />
      <Testimonial />
      <CTA />
      {/* <CaseStudy /> */}
      <GetInTouch />
      <div className="py-5">
        <h5 className="text-center">Checkout Our Latest Articles</h5>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 m-10">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <button className="bg-[#C31117] hover:bg-[#202F5A] text-white py-2 px-4 rounded">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
