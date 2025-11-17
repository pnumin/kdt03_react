import { Link } from "react-router-dom"
import { useAtomValue } from "jotai"
import { isLoginAtom } from "../atoms/atoms"

export default function Header() {
  const isLogin = useAtomValue(isLoginAtom) ;
  console.log("Header", isLogin)
  return (
    <header className='bg-blue-600 text-white shadow-md'>
      <nav className='container h-16 mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold text-blue-50'>KDT03</div>
        <ul className='flex space-x-4'>
          <li>
            <Link to="/"
                   className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-900'>
                    홈
            </Link>
          </li>
          {isLogin && <>
          <li>
            <Link to="/lotto"
                   className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-900'>
                    로또
            </Link>
          </li>
          <li>
            <Link to="/box"
                   className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-900'>
                    박스오피스
            </Link>
          </li>
          <li>
            <Link to="/gallery"
                   className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-900'>
                    관광사진
            </Link>
          </li>
          <li>
            <Link to="/festival"
                   className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-900'>
                    부산축제
            </Link>
          </li>
          <li>
            <Link to="/ChargerInfo"
                   className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-900'>
                    전기자동차
            </Link>
          </li>
           <li>
            <Link to="/todolist"
                   className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-900'>
                    할일목록
            </Link>
          </li>
          <li>
            <Link to="/subway"
                   className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-900'>
                    부산지하철실내공기
            </Link>
          </li>
          </>
          }
        </ul>
      </nav>
    </header>
  )
}
