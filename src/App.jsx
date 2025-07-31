import FooterSection from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactSection from "./components/Impact";
import Component from "./components/Product";
import ProductGrid from "./components/ProductGrid";
import TestimonialSection from "./components/Testimonials";

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Component/>
      <ProductGrid/>
      <TestimonialSection/>
      <ImpactSection />

      <div className="p-0 m-0">
  <div className="h-1 bg-black w-full"></div>
</div>

    <FooterSection/>
    
    </div>
  );
}

export default App;
