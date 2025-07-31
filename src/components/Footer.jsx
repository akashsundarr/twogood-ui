export default function FooterSection() {
  return (
    <footer className="w-full  py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Connect With Us */}
          <div>
            <h3 className="text-gray-500 text-sm font-normal mb-6 tracking-wide">
              CONNECT WITH US
            </h3>
            <div className="space-y-1">
              <div className="text-black font-bold">Facebook</div>
              <div className="text-black font-bold">Instagram</div>
              <div className="text-black font-bold">Twitter</div>
              <div className="text-black font-bold">LinkedIn</div>
              <div className="text-black font-bold">YouTube</div>
            </div>
          </div>

          {/* Center Column - Logo */}
          <div className="flex justify-center ">
            <div className="w-64 h-64">
              <img
                src="/src/assets/below-dot.png"
                alt="Two Good Co. Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column - The Nitty Gritties */}
          <div className="text-right">
            <h3 className="text-gray-500 text-sm font-normal mb-6 tracking-wide">
              THE NITTY GRITTIES
            </h3>
            <div className="space-y-1">
              <div className="text-black font-bold">Good Things FAQs</div>
              <div className="text-black font-bold">Good Food FAQs</div>
              <div className="text-black font-bold">Good Places</div>
              <div className="text-black font-bold">Pathways</div>
              <div className="text-black font-bold">Careers</div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 text-gray-500 text-sm">
          <span>© TWO GOOD CO. 2023</span>
          <span>TERMS OF USE</span>
          <span>PRIVACY POLICY</span>
        </div>

        {/* Acknowledgment Text */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-black font-normal text-base tracking-tighter leading-relaxed">
            We are proud and privileged to have our home on this land, and to be
            able to continue the long tradition of community coming together
            around food, begun thousands of years ago by First Nations peoples.
            As we stand together on this unceded land, we acknowledge our First
            Nations people, are the original custodians of this land, and we
            recognise their deep connection to land, water, sky and community
            which continues today. We pay our deep respects to community elders,
            past, present and emerging, for they hold the memories, the
            traditions, the culture and hopes of Aboriginal and Torres Strait{" "}
            <br />
            Islander peoples. Always was, always will be Aboriginal land.
          </p>
        </div>
      </div>
    </footer>
  );
}
