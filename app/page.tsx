import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import {ValueStrip} from "@/components/landing/ValueStrip";
import {FeaturesSection} from "@/components/landing/FeaturesSection";
import {HowItWorks} from "@/components/landing/HowItWorks";
import {FinalCTA} from "@/components/landing/FinalCTA";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ValueStrip />
            <FeaturesSection />
            <HowItWorks />
            <FinalCTA />
        </>
    );
}
