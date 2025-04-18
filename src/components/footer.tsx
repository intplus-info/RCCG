import { NavLink } from "react-router-dom"

// Adding props interface with className
interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <div className={`bg-black px-2 py-4 text-white ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>©2025 RCCG StrongTower Stouffville</p>
        </div>

        {/* Navigation for small screens */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-1 md:hidden text-center">
          {["home", "join", "sermons", "Events", "Give", "Gallery","blogs"].map(
            (link) => (
              <NavLink
                key={link}
                to={`/${link === "home" ? "" : link.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-2 py-1 capitalize cursor-pointer ${
                    isActive ? "underline" : "hover:underline"
                  }`
                }
              >
                {link}
              </NavLink>
            )
          )}
        </div>

        {/* Navigation for medium screens and above */}
        <div className="hidden md:flex gap-3">
          {["home", "join", "sermons", "Events", "Give", "Gallery","blogs"].map(
            (link) => (
              <NavLink
                key={link}
                to={`/${link === "home" ? "" : link.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-1 capitalize cursor-pointer ${
                    isActive ? "underline" : "hover:underline"
                  }`
                }
              >
                {link}
              </NavLink>
            )
          )}
        </div>
      </div>

      {/* Attribution */}
      <div className="mt-4 text-center text-xs md:text-sm text-gray-400 text-[7px]">
       <span className="text-[8px]">Powered by{" "}</span> 
        <a
          href="https://www.intplus.co"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-orange-500 font-medium text-[8px]"
        >
          Int+ Technology
        </a>
      </div>
    </div>
  )
}

export default Footer