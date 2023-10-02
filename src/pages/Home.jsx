import React, { useState } from 'react';
import backgroundImage from '../img/homepage.jpg';
import { toast } from 'react-toastify';

function Home() {// to open form from the 'help center' button
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

  const overlayStyle = {
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    textAlign: 'center',
  };

  const contentStyle = {
    marginTop: '15vh', 
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    minHeight: '100vh',
  };

  return (
    <div className="relative">
      <img src={backgroundImage} alt="Background" style={imageStyle} />

      <div style={overlayStyle}>
        <div style={contentStyle}>
          <h1 className="text-4xl font-bold mb-4">Welcome to Home Hunt</h1>
          <p className="text-lg">
            Discover why we are the best real estate agency to trust. With an outstanding track record,
            we've helped countless clients find their dream homes.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Info Blocks */}
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum, ipsum nisi, fugiat libero qui sit esse provident suscipit aspernatur doloribus illum.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-semibold mb-2">History</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis alias culpa amet quas, eos repellendus? Quae eaque incidunt a, eum ipsam.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita dicta vero numquam temporibus, rerum libero repellat laborum delectus facilis sunt similique, unde natus obcaecati. Ullam.</p>
          </div>

          {/* Copyright */}
          <div className="w-full text-center text-sm mt-4">
            &copy; 2023 Company Home Hunt. All rights reserved.
          </div>

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
      </footer>
    </div>
  );
}

export default Home;
