const Sublinks = ({ sublinks, showSublinks }) => {
  return (
    <ul
      className={`transition-all ${
        showSublinks ? "max-h-100 pt-3 pb-1 space-y-1" : "max-h-0 pt-0"
      }`}
    >
      {sublinks.map((link, i) => (
        <li
          key={i}
          className={`cursor-pointer ${
            showSublinks ? "opacity-1" : "opacity-0"
          }`}
        >
          {link}
        </li>
      ))}
    </ul>
  )
}
export default Sublinks
