import React, { useEffect, useState } from 'react';

export default function StatusCard() {
  const [status, setStatus] = useState('IDLE');
  const [type, setType] = useState('CONTINUOUS');
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const eventSource = new EventSource('http://192.168.4.1/SSE');
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setStatus(data.status || 'IDLE');
        setType(data.type || 'CONTINUOUS');
        setAmount(data.amount || 0);
        setQuantity(data.quantity || 0);
        setRate(data.rate || 0);
      } catch (error) {
        alert("Error getting the data ...")
      }
    };
    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      alert("Error getting the data ...")
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-[500px] mx-auto">
      <h2 className="text-lg font-bold mb-3 text-center">DISPENSER 1</h2>      
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Transaction Status:</span>
          <span>{status}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Transaction Type:</span>
          <span>{type}</span>
        </div>
        <div className="flex flex-row justify-between text-sm">
          <span className="font-semibold">Transaction Amount:</span>
          <span>{amount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Transaction Quantity:</span>
          <span>{quantity}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Unit Rate:</span>
          <span>{rate}</span>
        </div>
      </div>
    </div>
  );
}
