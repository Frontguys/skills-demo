import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { ContactDirectSection } from '../components/sections/ContactDirectSection';
import { ContactFormSection } from '../components/sections/ContactFormSection';
import { EngagementsAdresseSection } from '../components/sections/EngagementsAdresseSection';

export function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ContactDirectSection />
        <ContactFormSection />
        <EngagementsAdresseSection />
      </main>
      <Footer />
    </>
  );
}
