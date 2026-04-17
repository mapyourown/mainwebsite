import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';



function App() {
return (
  
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/privacy-policy" element={<PrivacyPolicy/>} />
<Route path="/terms-and-conditions" element={<TermsAndConditions/>} />


</Routes>
</BrowserRouter>
);
}


export default App;