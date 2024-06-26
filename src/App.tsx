// import packages
import { BrowserRouter, Route, Routes } from "react-router-dom"

// import admin pages
import AdminAuthPage from "./pages/admin/AdminAuthPage"
import AdminDashboard from "./pages/admin/AdminDashboard"

// import client pages
import ClientDashboard from "./pages/client/ClientDashboard"
import ClientAuthPage from "./pages/client/ClientAuthPage"

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientAuthPage/>} />
        <Route path="/admin/login" element={<AdminAuthPage/>} />
        <Route path="/dashboard" element={<ClientDashboard/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

