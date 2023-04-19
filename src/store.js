import { proxy } from "valtio"
import { modelData } from "./data"

const state = proxy({
  showNavbar: true,
  showSidebar: false,
  sidebarCurrentHover: "racing",
  showFooter: true,
  navbarChangeBlack: false,
  currentModel: Object.keys(modelData)[0],
  config: {
    body: {
      material: null,
      color: "",
    },
    interior: {
      material: null,
      color: "",
    },
  },
})

export default state
