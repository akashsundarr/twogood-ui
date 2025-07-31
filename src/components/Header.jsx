import { Menu, ShoppingCart } from "lucide-react";
import logo from "../assets/revised-logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      {/* Logo Image */}
      <img src={logo} alt="Two Good Co Logo" className="h-40 w-auto" />

      {/* Navigation */}
      <nav className="flex items-center gap-10 text-sm font-medium -mt-32 mr-7">
        <a href="#">SHOP</a>
        <a href="#">CATERING</a>
        <a href="#">DONATE</a>
        <div className="flex items-center gap-6 ml-20">
          {" "}
          {/* adds BIG gap before buttons */}
          <button>
            <Menu size={22} />
          </button>
          <button>
            <ShoppingCart size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
