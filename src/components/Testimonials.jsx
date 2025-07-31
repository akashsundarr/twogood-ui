export default function TestimonialSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Testimonial Text */}
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl  text-black leading-tight mb-12 tracking-tight">
          THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING
          WITH A COMPANY SUCH AS TWO GOOD CO.
        </h2>

        {/* CTA Button */}
        <div className="mb-8 mt-32 ">
          <button className="bg-black text-white font-inter font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm tracking-wide">
            SEND YOUR OWN MESSAGE
          </button>
        </div>

        {/* Supporting Text */}
        <p className="font-medium text-gray-700 text-sm leading-[1.1] tracking-tight max-w-[300px] mx-auto text-center">
          Sometimes it’s the smallest actions <br /> that can make the biggest
          impact.
        </p>
      </div>
    </section>
  );
}
