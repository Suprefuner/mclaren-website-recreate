import { useState, useRef } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar, Sidebar, Footer, Loader } from "./components"
import { HomePage, ModelPage, ConfigurePage } from "./pages/"
import useSnap from "./hooks/useSnap"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const sidebarRef = useRef(null)
  const snap = useSnap()

  const toggleSidebar = () => {
    sidebarRef.current.toggleSidebar((prev) => !prev)
  }

  return (
    <div className="bg-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader">
            <Loader setIsLoading={setIsLoading} />
          </motion.div>
        ) : (
          <BrowserRouter>
            {snap.showNavbar ? (
              <Navbar
                toggleSidebar={toggleSidebar}
                sidebarState={sidebarRef?.current?.sidebarState}
              />
            ) : null}
            <Sidebar ref={sidebarRef} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/configure/:model" element={<ConfigurePage />} />
              <Route path="/:model" element={<ModelPage />} />
            </Routes>
            {snap.showFooter ? <Footer /> : null}
          </BrowserRouter>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
