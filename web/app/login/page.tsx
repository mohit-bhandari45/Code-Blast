'use client';

import React, { useState } from 'react';
import SideBar from '@/components/LoginPageComponents/SideBar';
import Login from '@/components/LoginPageComponents/Login';
import { LoginFormData } from '@/utils/types';

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
      <SideBar />

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
