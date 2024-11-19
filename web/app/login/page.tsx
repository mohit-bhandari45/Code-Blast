'use client';

import React, { useState } from 'react';
import SideBar from '@/components/UniversalComponents/SideBar';
import Login from '@/components/LoginPageComponents/Login';
import { LoginFormData } from '@/utils/types';
import { LoginPageData } from '@/utils/utils';

const LoginPage = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log('Form submitted:', formData);
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <SideBar
        title={LoginPageData.title}
        para={LoginPageData.para}
        quote={LoginPageData.quote}
        author={LoginPageData.author}
      />

      {/* Right Section - Login Form */}
      <Login
        formData={formData}
        isLoading={isLoading}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;
