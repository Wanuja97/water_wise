
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import TurbidityLevelImage from '../assets/turbidity_level_icon.png';
import water_level_icon from '../assets/water_level_icon.png';

// Register necessary chart components
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

function RealTimeData() {
  // Dummy data
  const currentWaterLevel = "35 centimeters";
  const turbidityLevel = "12 NTU";
  const waterUsageDataInLastDay = [10, 15, 9, 13, 18, 20, 15, 9, 13, 18, 20, 15, 9, 13, 18, 20, 5, 0, 1, 2, 3,4,1, 4];
  const turbidityDatainLastday = [5, 10, 8, 12, 15, 14, 11, 9, 13, 18, 20, 15, 9, 13, 18, 20, 15, 12, 21, 20, 22, 22, 24, 21];

  const waterUsageDataInLastWeek = [10, 15, 9, 13, 18, 20, 15];
  const turbidityDatainLastWeek = [5, 10, 8, 12, 15, 14, 11];

  // Data for Water Usage Chart for last 24 hrs
  const waterUsageChartDataForLast24hrs = {
    labels: Array.from({ length: waterUsageDataInLastDay.length }, (_, i) => `${i + 1} Hr`),
    datasets: [
      {
        label: 'Water Usage (liters)',
        data: waterUsageDataInLastDay,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Data for Water Usage Chart for last Week
  const waterUsageChartDataForLastWeek = {
    labels: Array.from({ length: waterUsageDataInLastWeek.length }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Water Usage (liters)',
        data: waterUsageDataInLastWeek,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Data for Turbidity Level Chart for last 24 hrs
  const turbidityChartDataForLast24hrs = {
    labels: Array.from({ length: turbidityDatainLastday.length }, (_, i) => `${i + 1} Hr`),
    datasets: [
      {
        label: 'Turbidity Level (NTU)',
        data: turbidityDatainLastday,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  // Data for Turbidity Level Chart for last week
  const turbidityChartDataForLastWeek = {
    labels: Array.from({ length: turbidityDatainLastWeek.length }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Turbidity Level (NTU)',
        data: turbidityDatainLastWeek,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-extrabold mb-4">Real Time Data</h2>
      {/* Button to refresh */}
      <div className="flex justify-end mb-4">
        <button className="flex items-center bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          <span className="ml-2">Refresh</span>
        </button>
      </div>
      {/* Row 01 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Current Water Level */}
        <div className="flex items-center p-4 bg-blue-100 rounded-lg shadow">
          <img src={water_level_icon} alt="Water_Level_Icon" className="mr-4 w-12 h-12" />
          <div>
            <h3 className="text-lg font-bold">Current Water Level</h3>
            <p className="text-md font-semibold text-gray-600">{currentWaterLevel}</p>
          </div>
        </div>
        {/* Turbidity Level */}
        <div className="flex items-center p-4 bg-green-100 rounded-lg shadow">
          <img src={TurbidityLevelImage} alt="Turbidity_Level_Icon" className="mr-4 w-12 h-12" />
          <div>
            <h3 className="text-lg font-bold">Turbidity Level</h3>
            <p className="text-md font-semibold text-gray-600">{turbidityLevel}</p>
          </div>
        </div>
      </div>
      {/* Row 02 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Water Usage Graph */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Water Usage in Last 24 hrs</h3>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <Line data={waterUsageChartDataForLast24hrs} />
          </div>
        </div>
        {/* Turbidity Level Graph */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Turbidity Level in Last 24 hrs</h3>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <Line data={turbidityChartDataForLast24hrs} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Water Usage Graph */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Water Usage in Last 7 Days</h3>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <Line data={waterUsageChartDataForLastWeek} />
          </div>
        </div>
        {/* Turbidity Level Graph */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Turbidity Level in Last 7 Days</h3>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <Line data={turbidityChartDataForLastWeek} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeData;
