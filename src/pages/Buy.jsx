import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Buy() {
  
  const properties = [
    {
      id: 1,
      imageSrc: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '500,000',
      address: '123 Main St, City, State',
      agentName: 'John Doe',
      phoneNumber: '555-555-5555',
    },
    {
      id: 2,
      imageSrc: 'https://images.pexels.com/photos/280216/pexels-photo-280216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '700,000',
      address: '456 Elm St, City, State',
      agentName: 'Michael Smith',
      phoneNumber: '555-555-5555',
    },
    {
      id: 3,
      imageSrc: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '350,000',
      address: '126 Nom St, City, State',
      agentName: 'Jerry Wilson',
      phoneNumber: '555-555-5555',
    },
    {
      id: 4,
      imageSrc: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '370,000',
      address: '208 Mcgee St, City, State',
      agentName: 'Thomas Sacks',
      phoneNumber: '555-555-5555',
    },
    {
      id: 5,
      imageSrc: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '720,000',
      address: '180 Jerryhills St, City, State',
      agentName: 'Gary Williams',
      phoneNumber: '555-555-5555',
    },
    {
      id: 6,
      imageSrc: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '410,000',
      address: '92 forest St, City, State',
      agentName: 'Andy Griffin',
      phoneNumber: '555-555-5555',
    },
    {
      id: 7,
      imageSrc: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '300,000',
      address: '198 New Dorp St, City, State',
      agentName: 'Frank Wagner',
      phoneNumber: '555-555-5555',
    },
    {
      id: 8,
      imageSrc: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '180,000',
      address: '83 Marryland St, City, State',
      agentName: 'Barry Katz',
      phoneNumber: '555-555-5555',
    },
    {
      id: 9,
      imageSrc: 'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '280,000',
      address: '29 Victory St, City, State',
      agentName: 'Tony Diaz',
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
      <h1 className="text-4xl font-bold mb-4">Properties for Sale</h1>
      <p className="text-lg mb-8">Explore properties available for purchase.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={property.imageSrc}
              alt={`Property ${property.id}`}
              className="w-full h-45 object-cover rounded-md mb-4"
            />
            <div className="text-lg font-semibold">${property.price}</div>
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

export default Buy;

