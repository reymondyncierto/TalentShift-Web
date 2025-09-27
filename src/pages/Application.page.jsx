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
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);

    const upload = async () => {
      const formData = new FormData();
      formData.append('file', file);

      const apiBase = import.meta.env.VITE_API_URL || '';
      const url = `${apiBase.replace(/\/$/, '')}/convert/pdf`;
      console.log('Applicant upload to:', url);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      try {
        const res = await fetch(url, {
          method: 'POST',
          body: formData,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!res.ok) {
          const text = await res.text().catch(() => null);
          console.error('Upload failed:', res.status, text);
          setIsSuccess(false);
          return;
        }

        const payload = await res.json().catch(() => null);
        console.log('Upload successful:', payload);
        setIsSuccess(true);
      } catch (err) {
        if (err.name === 'AbortError') console.error('Upload aborted (timeout)');
        else console.error('Upload error:', err);
        setIsSuccess(false);
      } finally {
        setIsProcessing(false);
      }
    };

    upload();
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
