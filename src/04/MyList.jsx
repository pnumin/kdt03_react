import MyListCard from "./MyListCard"
import MyListData from "./MyListData.json"

export default function MyList() {
  const tags = MyListData.map(item => <MyListCard 
                                        key = {item.title}
                                        title={item.title} 
                                        imgUrl={item.imgUrl}
                                        content={item.content}
                                        />) ;
  
  return (
    <div className=" w-8/10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {tags}
    </div>
  )
}
