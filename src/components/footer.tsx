import { NavLink } from "react-router-dom"

const Footer =  ()=>   {
  return (
    <div className="bg-black px-2  text-white">
    <div className="flex justify-between bg-black p-4 text-white text-sm">
    <div>
      <p>©2025 RCCG StrongTower Stouffville</p>
    </div>
    <div className="flex gap-3">
      {["home", "join", "sermons", "Events", "Give", "Gallery"].map(
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
    <p className="text-right">intPlus+</p>

    </div>
  )
}

export default Footer