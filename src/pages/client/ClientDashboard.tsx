// import components
import Navbar from "../../components/common-components/Navbar"
import UserProfile from "../../components/user-components/UserProfile"
import ControlPanel from "../../components/user-components/ControlPanel"
import RealTimeData from "../../components/user-components/RealTimeData"

export default function ClientDashboard() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="flex flex-wrap">

        {/* left side 75% width */}
        <div className="w-full lg:w-3/4 p-4">
          <RealTimeData/>
          <ControlPanel/>
        </div>

        {/* right side 25% width */}
        <div className="w-full lg:w-1/4 p-4">
          <UserProfile/>
        </div>
      </div>
    </div>
  )
}
