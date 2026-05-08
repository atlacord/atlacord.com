import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Events from '@/components/home/Events';
import Navbar from '@/components/common/Navbar';
import DraftBanner from '@/components/common/DraftBanner';

export const metadata: Metadata = {
  title: 'Home | ATLAcord',
  description: 'The largest Discord community for fans of Avatar: The Last Airbender',
};

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Events />
        </>
    )
}