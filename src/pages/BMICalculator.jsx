import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [activity, setActivity] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Determine the BMI category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory('Healthy');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  return (
    <>
      <div className="bg-red-500 h-[1000px]">
        <div className="bg-[url('https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg?auto=compress&cs=tinysrgb&w=400')] bg-no-repeat bg-center bg-cover h-[400px] w-auto bg-fixed text-white">
          <h1 className="text-5xl text-white font-extrabold p-40">BMI CALCULATOR</h1>
        </div>

        <div className="grid grid-cols-2 p-16 gap-2 ">
          {/* BMI Chart */}
         
          {/* BMI Calculator */}
          <form onSubmit={calculateBMI} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                id="height"
                placeholder="Height / cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
              <input
                type="number"
                id="weight"
                placeholder="Weight / kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                id="age"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              />
              <select
                id="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="" disabled>Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 w-full"
              required
            >
              <option value="" disabled>Select an activity factor:</option>
              <option value="sedentary">Sedentary</option>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
            </select>
            <button
              type="submit"
              className="w-full flex justify-center items-center bg-red-600 text-white p-3 rounded-lg shadow hover:bg-red-700 transition"
            >
              Calculate
              <span className="ml-2">➔</span>
            </button>
          </form>

          <div className="w-full absolute right-5 sm:w-[300px] lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">BMI Calculator Chart</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b py-2">BMI</th>
                  <th className="border-b py-2">Weight Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Below 18.5</td>
                  <td className="py-2">Underweight</td>
                </tr>
                <tr>
                  <td className="py-2">18.5 - 24.9</td>
                  <td className="py-2">Healthy</td>
                </tr>
                <tr>
                  <td className="py-2">25.0 - 29.9</td>
                  <td className="py-2">Overweight</td>
                </tr>
                <tr>
                  <td className="py-2">30.0 and Above</td>
                  <td className="py-2">Obese</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-sm text-gray-500">* BMI: Body Mass Index</p>
          </div>

          {bmi &&  (
            <div className="mt-6   text-center  pt-4 bg-gray-100 rounded-lg shadow-lg absolute top-[800px] w-1/3 h-1/5 ">
              <h3 className="text-xl font-bold mb-2">Your BMI Results:</h3>
              <p className="text-lg">BMI: <span className="font-semibold">{bmi}</span></p>
              <p className="text-lg">Category: <span className="font-semibold">{category}</span></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BMICalculator;
