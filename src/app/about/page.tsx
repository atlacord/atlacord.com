import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import AboutHero from '@/components/about/AboutHero';
import Timeline from '@/components/about/Timeline';
import Stats from '@/components/about/Stats';
import Founders from '@/components/team/Founders';
import Footer from '@/components/common/Footer';
 
export const metadata: Metadata = {
  title: 'About Us | ATLAcord',
  description: 'Learn more about ATLAcord',
};
 
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Stats />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}