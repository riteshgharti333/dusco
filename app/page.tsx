import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import JoinCTA from "./components/JoinCTA";
import LeadershipSection from "./components/LeadershipSection";
import Testimonials from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return <div className="">
    <Hero />
    <AboutSection />
    <EventsSection />
    <GallerySection />
    <LeadershipSection />
    <Testimonials />
    <WhatWeDo />
    <JoinCTA />
  </div>;
}
