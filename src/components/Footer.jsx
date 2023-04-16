import logo from "../assets/image/mclaren_logo.png"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { navLinks } from "../data"
import { Navlink, Sublinks } from "./"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="py-3 border-b ">
          <img src={logo} alt="mclaren logo" className="invert h-3" />
        </div>
        <ul className="capitalize pt-2 lg:flex lg:justify-between xl:px-5 2xl:px-8">
          {navLinks.map((navlink, i) => (
            <Navlink key={i} navlink={navlink} />
          ))}
        </ul>
        <p className="text-sm border-t py-4">
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
