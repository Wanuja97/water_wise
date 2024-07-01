import { useState } from 'react';

function UserProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        email: 'user@example.com',
        username: 'user123',
        macAddress: '00:1A:2B:3C:4D:5E',
        mobileNo: '123-456-7890',
        nic: '123456789V'
    });
    const [password, setPassword] = useState('');

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">User Profile</h2>
            {isEditing ? (
                <>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username:</label>
                        <input
                            type="text"
                            value={profile.username}
                            name="username"
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mobile No:</label>
                        <input
                            type="text"
                            value={profile.mobileNo}
                            name="mobileNo"
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            name="password"
                            onChange={handlePasswordChange}
                            className="w-full mt-1 p-2 border rounded bg-white"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={handleEditToggle}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-500 transition duration-300"
                        >
                            Update Profile
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="text"
                            value={profile.email}
                            name="email"
                            disabled
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username:</label>
                        <input
                            type="text"
                            value={profile.username}
                            name="username"
                            disabled
                            className="w-full mt-1 p-2 border rounded bg-gray-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mobile No:</label>
                        <input
                            type="text"
                            value={profile.mobileNo}
                            name="mobileNo"
                            disabled
                            className="w-full mt-1 p-2 border rounded bg-gray-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Device MAC Address:</label>
                        <input
                            type="text"
                            value={profile.macAddress}
                            name="macAddress"
                            disabled
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">NIC:</label>
                        <input
                            type="text"
                            value={profile.nic}
                            name="nic"
                            disabled
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </div>
                    <button
                        onClick={handleEditToggle}
                        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-300"
                    >
                        Edit Profile
                    </button>
                </>
            )}
        </div>
    );
}

export default UserProfile;
