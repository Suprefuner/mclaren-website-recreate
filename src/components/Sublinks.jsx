const Sublinks = ({ sublinks, showSublinks }) => {
  return (
    <ul
      className={`transition-all ${
        showSublinks ? "max-h-0 pt-0" : "max-h-100 pt-3 pb-1 space-y-1"
      }`}
    >
      {sublinks.map((link, i) => (
        <li
          key={i}
          className={`cursor-pointer ${
            showSublinks ? "opacity-0" : "opacity-1"
          }`}
        >
          {link}
        </li>
      ))}
    </ul>
  )
}
export default Sublinks
