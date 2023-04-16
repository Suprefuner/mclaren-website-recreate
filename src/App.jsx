import { useRef } from "react"
import {
  Navbar,
  HeroSection,
  VideoSection,
  ModelSection,
  Footer,
  Sidebar,
} from "./components"

function App() {
  const sidebarRef = useRef(null)

  const toggleSidebar = () => {
    sidebarRef.current.toggleSidebar((prev) => !prev)
  }

  return (
    <div className="App">
      <Navbar
        toggleSidebar={toggleSidebar}
        sidebarState={sidebarRef?.current?.sidebarState}
      />
      <Sidebar ref={sidebarRef} />
      <HeroSection />
      <ModelSection />
      <VideoSection />
      <Footer />
    </div>
  )
}

export default App
