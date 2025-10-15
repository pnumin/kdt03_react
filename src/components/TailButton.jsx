const BTStyle = {
  blue : {
    base : "bg-blue-500",
    hover : "hover:bg-blue-900",
  },
  orange : {
    base : "bg-orange-500",
    hover : "hover:bg-orange-900",
  },
  lime : {
    base : "bg-lime-500",
    hover : "hover:bg-lime-900",
  }
}

export default function TailButton({color, caption, onHandle}) {
  const btstyle = BTStyle[color] ;

  return (
    <button className={`${btstyle.base} text-white rounded
                        ${btstyle.hover} hover:font-bold px-4 py-2`}
            onClick={onHandle}>
      {caption}
    </button>
  )
}
