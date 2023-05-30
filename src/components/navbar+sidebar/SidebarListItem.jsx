import { motion } from "framer-motion"

export default function SidebarListItem({
  link,
  sublinks,
  setCurrentHover,
  setShowSubmenu,
}) {
  return (
    <motion.li
      whileHover={{ x: 15 }}
      transition={{ type: "tween" }}
      className="w-max py-1.5 text-[1.8rem] select-none cursor-pointer "
      onHoverStart={() => {
        setCurrentHover(link)
        setShowSubmenu(sublinks ? true : false)
      }}
    >
      {link}
    </motion.li>
  )
}
