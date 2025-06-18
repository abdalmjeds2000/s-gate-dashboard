import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import AppHeader from "./components/Header"
import Dashboard from "./pages/dashboard/Dashboard"
import Attendance from "./pages/attendance/Attendance"

function App() {

  return (
    <BrowserRouter /* basename="باسل حط هنا الرابط اللي رح يشتغل عليه المشروع ابحث عنها ال basename رح تعرف لإيش" */>
      <div className="text-salic dark:text-white min-h-svh">
        <AppHeader />
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
