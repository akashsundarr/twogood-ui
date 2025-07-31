import { ChevronRight } from "lucide-react";

export default function Component() {
  const products = [
    {
      title: "NEW GOODIES",
      bg: "bg-[#B2D5B7] hover:bg-[#A0C6A5]",
      src: "/src/assets/goodies.avif",
      alt: "Person in apron in kitchen setting",
    },
    {
      title: "PANTRY",
      bg: "bg-[#F4DECF] hover:bg-[#E9D1C0]",
      src: "/src/assets/pantry.avif",
      alt: "Hands preparing energy balls on parchment paper",
    },
    {
      title: "BATH",
      bg: "bg-[#FEFEFF] hover:bg-[#F0F0F0]",
      src: "/src/assets/Bath.avif",
      alt: "Black bath and body care products on marble surface",
    },
  ];

  return (
    <section className="w-full bg-white">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 px-4 md:px-12 mt-16">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="relative group aspect-[2/3] w-full cursor-pointer overflow-hidden"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300" />

            <button
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${item.bg} text-black px-6 py-3 rounded-full font-medium text-base flex items-center gap-2 transition-all duration-200 shadow-md w-[260px] justify-center`}
            >
              <span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
              <span className="truncate">SHOP</span>
              <span className="font-bold truncate">{item.title}</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <div className="px-2 py-24 md:px-10 lg:px-12">
        <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 md:gap-20 lg:gap-[175px] items-start xl:gap-[200px]">
          {/* Left - Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight text-black max-w-[90%] mx-auto lg:mx-0 lg:max-w-[1000px]">
              WE BELIEVE IN PEOPLE, UNTIL THEY BELIEVE IN THEMSELVES{" "}
              <span>AGAIN.</span>
            </h2>
          </div>

          {/* Right - Paragraphs */}
          <div className="mt-12 lg:mt-0 space-y-4 text-sm sm:text-base md:text-[17px]  xl:text-2xl leading-relaxed  px-4 sm:px-8 md:px-12 lg:px-0 lg:ml-[115px] xl:ml-[90px]">
            <p className="font-inter text-sm tracking-wide leading-relaxed">
              Everything we do is designed to rebuild self-worth and
              independence, in order to break free from the cycle of <br />{" "}
              disadvantage.
            </p>
            <p className="font-inter text-sm tracking-wide leading-relaxed">
              With every purchase you make with us, you're helping to change the
              course of someone's life; you're walking alongside vulnerable
              women as they find their way home again.
            </p>
            <button className="text-gray-500 hover:text-black font-medium underline underline-offset-4 transition-colors duration-200 text-sm">
              SHOP TO SUPPORT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
