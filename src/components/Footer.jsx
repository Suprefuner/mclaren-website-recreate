import logo from "../assets/image/mclaren_logo.png"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { navLinks } from "../data"
import { Navlink, Sublinks } from "./"

const Footer = () => {
  return (
    <footer className="relative bg-white">
      <div className="px-3 sm:px-5 2xl:px-[15rem]">
        <div className="py-3 border-b">
          <img src={logo} alt="McLaren logo" className="h-3 invert" />
        </div>
        <ul className="px-2 pt-2 capitalize xl:px-3 lg:flex lg:justify-between">
          {navLinks.map((navlink, i) => (
            <Navlink key={i} navlink={navlink} />
          ))}
        </ul>
        <p className="py-4 text-sm border-t">
          The emissions/fuel economy figures quoted are sourced from official
          regulated test results obtained through laboratory testing. They are
          for comparability purposes only and may not reflect your real driving
          experience, which may vary depending on factors including road
          conditions, weather, vehicle load and driving style.
        </p>
      </div>
    </footer>
  )
}
export default Footer
