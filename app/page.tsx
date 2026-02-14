import HeroSection from './components/HeroSection';
import ProcessFlow from './components/ProcessFlow';
import ImpactStats from './components/ImpactStats';
import HowToContribute from './components/HowToContribute';
import WasteSubmissionForm from './components/WasteSubmissionForm';
import LocationSection from './components/LocationSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProcessFlow />
      <ImpactStats />
      <HowToContribute />
      <WasteSubmissionForm />
      <LocationSection />
      <Footer />
    </main>
  );
}
