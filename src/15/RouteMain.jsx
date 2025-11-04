import RouteHome from "./RouteHome"
import RouteNav from "./RouteNav"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function RouteMain() {
  return (
    <BrowserRouter>
    <div className="w-full flex flex-col justify-center items-center">
      <RouteNav />
      <Routes>
        <Route path="/" element={<RouteHome />} />
        <Route path="/p1/:item1/:item2" element={<RoutePage1 />} />
        <Route path="/p2" element={<RoutePage2 />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}
