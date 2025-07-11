export const Button = ({text, bgColor, color, }) => {
  return (
    <button className="px-3 py-3 rounded-xl" style={{backgroundColor: bgColor, color}}>
        {text}
    </button>
  )
}