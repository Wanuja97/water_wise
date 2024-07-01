import AddNewDevice from "../../components/admin-components/AddNewDevice";
import ExistingDevices from "../../components/admin-components/ExistingDevices";
import Navbar from "../../components/common-components/Navbar";

export default function AdminDashboard() {
  return (
    <div>
      <Navbar/>
      <div className="m-6 h-screen">
        <div className="mb-4">
        <h1 className="text-2xl font-extrabold text-gray-800">Admin Dashboard</h1>
        </div>
        {/* existing devices */}
        
        {/* Add new device */}
        <AddNewDevice/>
        <ExistingDevices/>
        </div>
    </div>
  )
}
