import React, { useState } from "react";
import Button from "../component/Button"
const PriceTable = () => {
  const [data, setData] = useState([
    {
      gradeCode: "A001",
      productName: "Product 1",
      nozzle: "Nozzle 1",
      enable: false,
      currentPrice: "100",
      newPrice: "",
      productType: "Petrol", // Add this field
    },
    {
      gradeCode: "A002",
      productName: "Product 2",
      nozzle: "Nozzle 2",
      enable: false,
      currentPrice: "150",
      newPrice: "",
      productType: "Diesel", // Add this field
    },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedData = [...data];
    updatedData[index].enable = !updatedData[index].enable;
    setData(updatedData);
  };

  const handleInputChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].newPrice = value;
    setData(updatedData);
  };

  const handleSelectChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].productType = value;
    setData(updatedData);
  };

  return (
    <>
      <table className="min-w-full border-collapse border border-gray-300 mb-10 mt-10">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border border-gray-300">Grade Code</th>
            <th className="px-4 py-2 border border-gray-300">Product Name</th>
            <th className="px-4 py-2 border border-gray-300">Nozzle</th>
            <th className="px-4 py-2 border border-gray-300">Enable</th>
            <th className="px-4 py-2 border border-gray-300">Current Price</th>
            <th className="px-4 py-2 border border-gray-300">New Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">
                {row.gradeCode}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <select
                  value={row.productType}
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {row.nozzle}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <input
                  type="checkbox"
                  checked={row.enable}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                {row.currentPrice}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1"
                  value={row.newPrice}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mb-10">
        <Button value="Save" styling="bg-blue-500 py-2 px-6 rounded text-white flex items-center" />
      </div>
    </>
  );
};

export default PriceTable;
