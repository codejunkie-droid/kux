import CustomCursor from '@/react-app/components/CustomCursor';
import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import TrustProof from '@/react-app/components/TrustProof';
import Portfolio from '@/react-app/components/Portfolio';
import Services from '@/react-app/components/Services';
import WhyChooseUs from '@/react-app/components/WhyChooseUs';
import Process from '@/react-app/components/Process';
import Pricing from '@/react-app/components/Pricing';
import Testimonials from '@/react-app/components/Testimonials';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <CustomCursor />
      <Navigation />
      <Hero />
      <TrustProof />
      <Portfolio />
      <Services />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
