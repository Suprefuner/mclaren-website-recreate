import { AnimatePresence, motion } from "framer-motion"
import { useRef, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Loader, Navbar, Sidebar } from "./components"
import useSnap from "./hooks/useSnap"
import { ConfigurePage, HomePage, ModelPage } from "./pages/"

function App() {
  const [isLoading, setIsLoading] = useState(1)
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
            <Navbar
              toggleSidebar={toggleSidebar}
              sidebarState={sidebarRef?.current?.sidebarState}
            />
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
