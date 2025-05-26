import AppLayout from '../components/AppLayout.component';
import Header from '../components/Header.component';
import HeroSection from '../components/HeroSection.component';
import Footer from '../components/Footer.component';
import ContactForm from '../components/ContactForm.component';
import { useState } from 'react';

export default function ApplicantLandingPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsProcessing(true);

    // placeholder for file upload logic
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // placeholder for form submission logic
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      console.log('Form submitted:', formData);
    }, 2000);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      github: ''
    });
  };

  return (
    <AppLayout>
      <Header />
      <HeroSection />
      <ContactForm
        formData={formData}
        isProcessing={isProcessing}
        isSuccess={isSuccess}
        onFileUpload={handleFileUpload}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onReset={resetForm}
      />
      <Footer />
    </AppLayout>
  );
}
