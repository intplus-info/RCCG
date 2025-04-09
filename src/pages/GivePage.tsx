import { Dialog, DialogTrigger, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import Footer from "@/components/footer";
import BankPage from "./BankPage";

const image2 = "https://i.imgur.com/K38ANvA.png";

const GivePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [inputMoney, setInputMoney] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMoney(e.target.value);
  };

  const navigationLinks = ["home", "join", "sermons", "Events", "Give", "Gallery"];

  return (
    <>
      <div
        className="flex flex-col"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />

        <div className="flex items-center justify-between p-4 w-full">
        <NavLink to="/">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-24 md:w-33" />
            </div>
            </NavLink>

          <div className="hidden md:flex gap-4 text-white text-sm capitalize cursor-pointer">
            {navigationLinks.map((link) => (
              <NavLink
                key={link}
                to={`/${link === "home" ? "" : link.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-1 ${isActive ? "underline" : "hover:underline"}`
                }
              >
                {link}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-3xl"
            >
              ☰
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 min-h-screen">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="flex flex-col items-center gap-3 w-full max-w-xs px-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link}
                  to={`/${link === "home" ? "" : link.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-white text-lg py-2 w-full text-center border-b border-white/20 cursor-pointer capitalize transition-all duration-200 ${
                      isActive ? "font-bold" : "hover:bg-white/10"
                    }`
                  }
                >
                  {link}
                </NavLink>
              ))}
            </nav>
          </div>
        )}

        <div className="flex flex-col gap-4 justify-center items-center p-6">
          <hr className="w-full h-0.5 text-white opacity-50" />
          <h1 className="text-4xl capitalize text-white">Giving</h1>
          <hr className="w-full h-0.5 text-white opacity-50" />
        </div>
      </div>

      <div className="flex flex-col text-center gap-4 py-9 px-6 md:px-20 text-[#00000099] text-lg md:text-2xl">
        <p>
          Welcome to <span className="textext-[#00000099] font-bold"> RCCG Strongtower Stouffville</span>, a thriving Christian community rooted in faith,
          love, and the transformative power of God’s Word...
        </p>
        <p>
          Our vision goes beyond the walls of the church—we are committed to fostering a sense of
          belonging and purpose...
        </p>
        <p>
          As we grow together, our focus remains on preparing the Church for the glorious return of
          our Lord Jesus Christ...
        </p>
      </div>

      <div className="max-w-[700px] mx-auto mb-28 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-[#666666] text-left mb-4">
          Select type of donation
        </h2>

        <label className="block mb-2 font-medium text-[#666666]">Type</label>
        <select className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#666666]">
          <option value="Offering">Offering</option>
          <option value="Tithe">Tithe</option>
          <option value="Thanksgiving">Thanksgiving</option>
          <option value="First Offering">First Offering</option>
        </select>

        <label className="block mb-2 font-medium text-[#666666]">Amount (CAD)</label>
        <input
          type="number"
          min="5"
          placeholder="5"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={handleChange}
          value={inputMoney}
        />

        <div className="flex justify-between">
          <button
            type="reset"
            onClick={() => setInputMoney("")}
            className="px-10 py-3 bg-white text-orange-500 rounded border border-orange-500 hover:opacity-60"
          >
            Clear
          </button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="px-10 py-3 bg-orange-500 text-white rounded hover:opacity-60 cursor-pointer">
                Next
              </button>
            </DialogTrigger>

            <DialogOverlay className="fixed inset-0 bg-white z-50" />

            <DialogContent className="bg-white md:min-w-[800px] max-h-[95vh] overflow-y-auto p-6 z-50">
              <BankPage money={Number(inputMoney) || 0} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GivePage;
