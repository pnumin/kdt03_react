
export default function MyListCard() {
  const title =  "HTML" ;
  const imgUrl = "./img/html.png" ;
  const content =  "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용";
  
  return (
    <div className="w-full flex justify-start items-start 
                    p-5
                    border-1 border-gray-400">
      <div className="w-1/3">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="w-2/3 h-44 flex flex-col justify-between">
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div>
          <div>좋아요 ❤️</div>  
        </div>
      </div>
    </div>
  )
}
