import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Rent() {
  
  const rentalProperties = [

    {
      id: 1,
      imageSrc: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80', 
      price: '$1,500/month',
      address: '456 Elm St, City, State',
      agentName: 'Jane Smith',
      phoneNumber: '555-555-5555',
    },
    {
      id: 2,
      imageSrc: 'https://images.unsplash.com/photo-1558244380-8ab582e57b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80', 
      price: '$1,400/month',
      address: '789 Oak St, City, State',
      agentName: 'John Doe',
      phoneNumber: '555-555-5555',
    },
    {
      id: 3,
      imageSrc: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80', 
      price: '$1,800/month',
      address: '89 Rosehill St, City, State',
      agentName: 'Derek Hill',
      phoneNumber: '555-555-5555',
    },
    {
      id: 4,
      imageSrc: 'https://img.freepik.com/free-photo/modern-apartment-architecture_1268-14696.jpg?w=1060&t=st=1694955545~exp=1694956145~hmac=2e87af7d98d31ac0747058281cbd017f4bfffbb9d36d44885e033b1f0f4b1823', 
      price: '$2,800/month',
      address: '250 Ashbrook St, City, State',
      agentName: 'Tim Miller',
      phoneNumber: '555-555-5555',
    },
    {
      id: 5,
      imageSrc: 'https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?w=1060&t=st=1694955689~exp=1694956289~hmac=e14287bab01e11e35e6a185d2ed2f2d010ddb160a808751bedf4aad8f1a07b28', 
      price: '$3,300/month',
      address: '185 Willow St, City, State',
      agentName: 'Chris Johnson',
      phoneNumber: '555-555-5555',
    },
    {
      id: 6,
      imageSrc: 'https://img.freepik.com/premium-photo/modern-residential-apartments-with-flats-buildings-exterior-outdoor-facilities-new-luxury-house-home-complex-green-yard-city-real-estate-property-condo-architecture-empty-background_250132-2094.jpg?w=1060', 
      price: '$2,400/month',
      address: '118 Linden St, City, State',
      agentName: 'Paul Peterson',
      phoneNumber: '555-555-5555',
    },
   
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === '') {
      toast.error('Please enter a message.');
    } else {
      // Simulate a successful submission
      // In a real application, you would send the form data to a server
      toast.success('Message submitted successfully.');
      setMessage('');
      toggleForm();
    }
  };

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Properties for Rent</h1>
      <p className="text-lg mb-8">Browse our rental listings and find your new home or condo.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentalProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md p-4"
          >
             <img
              src={property.imageSrc}
              alt={`Property ${property.id}`}
              className="w-full h-45 object-cover rounded-md mb-4"
            />

            <div className="text-lg font-semibold">{property.price}</div>
            <p className="text-gray-600 mb-2">{property.address}</p>
            <p className="text-gray-600">Agent: {property.agentName}</p>
            <p className="text-gray-600">Phone: {property.phoneNumber}</p>
          </div>
        ))}

         {/* Help Button */}
          <div className="fixed bottom-4 right-4 z-10">
            <button
              onClick={toggleForm}
              className="bg-green-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-green-500"
            >
              Help Center
            </button>
          </div>

      {/* Help Form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-20">
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <button
              onClick={toggleForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-black">Get Help from Agent</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
           </div>
         </div>
        )}
      </div>
    </div>
  );
}

export default Rent;
