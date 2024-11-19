'use client';

import SignUp from '@/components/SignUpPageComponents/SignUp';
import SideBar from '@/components/UniversalComponents/SideBar';
import { SignUpPageData } from '@/utils/utils';
import { SignUpFormData } from '@/utils/types';
import React, { useState } from 'react';

export default function SignupPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
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
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section with Image */}
      <SideBar
        title={SignUpPageData.title}
        para={SignUpPageData.para}
        quote={SignUpPageData.quote}
        author={SignUpPageData.author}
      />

      {/* Right Section with Form */}
      <SignUp
        formData={formData}
        isLoading={isLoading}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
