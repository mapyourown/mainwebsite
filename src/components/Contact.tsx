import { useState } from "react"; 
import ReCAPTCHA from "react-google-recaptcha";
import { fetchPostData } from "../utils/fetchData"

import { config }  from "../utils/config"

export default function Contact() {
  //const recaptchaRef = useRef();
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [formSubmitResponse, setFormSubmitResponse] = useState("");
  const captaKey = config.CAPTA_SITE_KEY
  const formurl  = `${config.REACT_APP_API_URL}` + '/api/auth/sendFormEmail'
  const handleCaptcha = (value: any) => {
    if (value) {
      setVerified(true);
    }
  }
  
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async(e: any) => {
    e.preventDefault();
  
    try {
      if (!verified) {
        alert("Please verify that you are human.");
        return;
      }
      
      const formSubmitResponse = await fetchPostData(`${formurl}`, formData)
      console.log(formSubmitResponse.message)
      setFormSubmitResponse(formSubmitResponse.message)
      setShowModal(true)
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
        setFormSubmitResponse("Something went wrong.");
        setShowModal(true);
        
    }
   };
    return (
      <section id="contact" className="py-20 bg-gray-100 px-10">
      <div className="max-w-xl mx-auto">
      
      {/* Display API Response */}
    
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-4">Message Status</h2>
            <p className="text-gray-700">{formSubmitResponse}</p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>

          </div>
        </div>
      )}

  
        <h2 className="text-3xl font-bold text-center mb-10">
          Start Your Project
        </h2>
  
        <form  onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
  
          <input
            name="name"
            className="w-full border p-3 rounded"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
  
          <input
            name="email"
            className="w-full border p-3 rounded"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
  
          <textarea
            name="message"
            className="w-full border p-3 rounded"
            placeholder="Tell us about your project"
            onChange={handleChange}
            required
            value={formData.message}
          />
           {/* CAPTCHA */}
          <ReCAPTCHA
            sitekey={captaKey}
            onChange={handleCaptcha}
          />
  
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
            Send Message
          </button>
  
        </form>
        </div>
      </section>
    );
  }