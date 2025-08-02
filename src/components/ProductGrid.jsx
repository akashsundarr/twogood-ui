const products = [
  {
    id: 1,
    name: "THE LOVE + CARE PACK",
    price: "$50",
    image: "/assets/fullpack.avif",
  },
  {
    id: 2,
    name: "TWO GOOD TOTE BAG",
    price: "$40",
    image: "/assets/bag.avif",
  },
  {
    id: 3,
    name: "NOURISH & SOOTHE HAND LOTION",
    price: "$38",
    image: "/assets/lotion.avif",
  },
  {
    id: 4,
    name: "COOKBOOK TWO",
    price: "$45",
    image: "/assets/green-book.avif",
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="text-center mt-6 space-y-2">
                <h3 className="text-gray-600 font-extralight text-sm tracking-wide uppercase">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
