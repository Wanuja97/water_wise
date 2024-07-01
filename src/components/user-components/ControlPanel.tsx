import React, { useState } from 'react';

const ControlPanel: React.FC = () => {
  const [waterInputValve, setWaterInputValve] = useState<boolean>(true);
  const [waterOutputValve, setWaterOutputValve] = useState<boolean>(false);
  const [waterPump, setWaterPump] = useState<boolean>(false);

  const handleToggleWaterInputValve = (setFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
    setFunction(prevState => !prevState);
  };

  const handleToggleWaterOutputValve = (setFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
    setFunction(prevState => !prevState);
  };

  const handleToggleWaterPump = (setFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
    setFunction(prevState => !prevState);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-extrabold mb-4">Control Panel</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Water Input Valve */}
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <div className="mb-2">
            <span className="font-semibold text-gray-600">Water Input Valve</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">Disable</span>
            <button
              className={`mx-4 p-2 rounded-full ${waterInputValve ? 'bg-green-500' : 'bg-red-400'}`}
              onClick={() => handleToggleWaterInputValve(setWaterInputValve)}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                  waterInputValve ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
            <span className="text-gray-600">Enable</span>
          </div>
        </div>

        {/* Water Output Valve */}
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <div className="mb-2">
            <span className="font-semibold text-gray-600">Water Output Valve</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">Disable</span>
            <button
              className={`mx-4 p-2 rounded-full ${waterOutputValve ? 'bg-green-500' : 'bg-red-400'}`}
              onClick={() => handleToggleWaterOutputValve(setWaterOutputValve)}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                  waterOutputValve ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
            <span className="text-gray-600">Enable</span>
          </div>
        </div>

        {/* Water Pump */}
        <div className="p-4 bg-yellow-100 rounded-lg shadow">
          <div className="mb-2">
            <span className="font-semibold text-gray-600">Water Pump</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">Disable</span>
            <button
              className={`mx-4 p-2 rounded-full ${waterPump ? 'bg-green-500' : 'bg-red-400'}`}
              onClick={() => handleToggleWaterPump(setWaterPump)}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                  waterPump ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
            <span className="text-gray-600">Enable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
