import { Routes, Route } from "react-router-dom";
import Photobooth from "./Photobooth.jsx";
import ContactForm from "./ContactForm.jsx";
import Layout from "./Layout.jsx";
import FAQ from "./FAQ.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx"

function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Photobooth />} />
            <Route path="/frequently-asked" element={<FAQ/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactForm />} />
        </Route>
    </Routes>
  );
}

export default App;
