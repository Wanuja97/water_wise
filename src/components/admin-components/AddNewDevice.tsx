import React, { useState } from 'react';

const AddNewDevice: React.FC = () => {
  const [macaddress, setMacaddress] = useState<string>('');
  const [mobileNo, setMobileNo] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const handleAddDevice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle adding device logic here
    console.log('Device added:', { mobileNo, username });
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-extrabold mb-4">Add New Device</h2>
        <form onSubmit={handleAddDevice} className="space-y-4">
        <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
              Device MAC Address
            </label>
            <input
              type="text"
              id="macaddress"
              name="macaddress"
              value={macaddress}
              onChange={(e) => setMacaddress(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              Add Device
            </button>
          </div>
        </form>
    </div>
  );
};

export default AddNewDevice;
