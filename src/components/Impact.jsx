export default function ImpactSection() {
  return (
    <section className="w-full bg-white pt-80 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-2 space-y-3 px-16">
            <h2 className="font-inter text-xl md:text-2xl font-black text-black tracking-tighter leading-tight">
              OUR IMPACT.
            </h2>

            <p className="font-inter text-sm text-black font-normal leading-snug tracking-tighter">
              The thing is, we don't save anyone.
            </p>

            <p className="font-inter text-sm text-black leading-snug">
              What we do is provide a safe space for women to change the course
              of their own lives.
            </p>

            <p className="font-inter text-sm text-black leading-snug">
              After many years of living in crisis, abuse and complex trauma,
              restoring self-worth is foundational for independence. We believe
              that through experiences that promote love and respect, we can
              spark and nurture a sense of self-worth for those on the path of
              healing.
            </p>

            <div className="pt-1">
              <button className="font-playfair text-black font-medium underline underline-offset-4 hover:text-gray-700 transition-colors duration-200 text-sm">
                HERE'S HOW WE DO IT
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 pt-40 ">
            <div className="aspect-[3/4] relative overflow-hidden ">
              <img
                src="../assets/Christina.avif"
                alt="Two women in Two Good Co. t-shirts sitting together in conversation"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="aspect-[3/4] relative overflow-hidden ">
              <img
                src="../assets/Patrica.avif"
                alt="Smiling woman wearing Two Good Co. t-shirt"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
