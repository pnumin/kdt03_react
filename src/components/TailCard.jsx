
export default function TailCard({ imgurl, title, subtitle, tag }) {
  let tags = "" ;
  if ( tag.includes(',') ) {
    tags = tag.split(',') 
    tags = tags.map(kw => <span key={kw} 
                          className="bg-amber-50 rounded-sm p-2 inline-flex m-1 text-sm">
                              {kw}
                          </span>)
  }
  else tags = tag ;

  // console.log(tags)
  return (
    <div className="max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div>
        <img className="rounded-t-lg w-full h-46 object-cover"
          src={imgurl} alt="" />
      </div>
      <div className="p-2 h-50 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="mb-2 tracking-tight text-gray-800 text-sm">
            {subtitle}
          </p>
        </div>
        <p className="mb-1 font-normal text-gray-700">
          {tags}
        </p>
      </div>
    </div>

  )
}
