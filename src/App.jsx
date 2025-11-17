import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MyClock from './02/MyClock'
import MyDiv1 from './03/MyDiv1'
import MyList from './04/MyList'
import MyToggle from './05/MyToggle'
import Lotto from './06/Lotto'
import Food from './07/Food'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import MyRef from './11/MyRef'
import RefCal from './12/RefCal'
import Gallery from './13/Gallery'
import Festival from './14_1/Festival'
import RouteMain from './15/RouteMain'
import FestivalContents from './14_1/FestivalContents'
import ChargerInfo from './16/ChargerInfo'
import ChargerDetail from './16/ChargerDetail'
// import JotaiCnt from './17/JotaiCnt'
import TodoList from './18_3/TodoList'
import Subway from './19/subway'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-y-hidden'>
        <Header />
        <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/festival' element={<Festival />} />
            <Route path='/festival/contents' element={<FestivalContents />} />
            <Route path='/ChargerInfo' element={<ChargerInfo />} /> 
            <Route path='/ChargerInfo/detail' element={<ChargerDetail />} /> 
            <Route path='/todolist' element={<TodoList />} /> 
            <Route path='/subway' element={<Subway />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
