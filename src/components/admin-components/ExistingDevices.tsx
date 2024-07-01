import React, { useState } from 'react';

const ExistingDevices: React.FC = () => {
  // Dummy data for existing devices
  const [devices, setDevices] = useState([
    {
      macAddress: '00:1B:44:11:3A:B7',
      username: 'user1',
      email: 'user1@example.com',
      mobileNo: '123-456-7890',
    },
    {
      macAddress: '00:1B:44:11:3A:B8',
      username: 'user2',
      email: 'user2@example.com',
      mobileNo: '098-765-4321',
    },
  ]);

  const handleRemove = (macAddress: string) => {
    setDevices(devices.filter(device => device.macAddress !== macAddress));
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-extrabold mb-4">Existing Devices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">MAC Address</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Username</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Mobile No</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map(device => (
              <tr key={device.macAddress}>
                <td className="py-2 px-4 border-b border-gray-200 text-sm">{device.macAddress}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm">{device.username}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm">{device.email}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm">{device.mobileNo}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                    onClick={() => handleRemove(device.macAddress)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExistingDevices;
