import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="text-black bg-white flex flex-col items-center px-6 pt-20">
      {/* Hero Text */}
      <div className="w-full text-[16vw] font-bold leading-none tracking-tight uppercase text-left">
        <h1>
          <div>Change</div>
          <div>The Course</div>
        </h1>
      </div>

      {/* Hero Image */}
      <div className="mt-8 px-6 w-full h-[706px] overflow-hidden">
        <img
          src={heroImage}
          alt="Hero section visual"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
