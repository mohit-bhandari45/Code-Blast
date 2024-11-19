import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SignUpFormData } from '@/utils/types';

interface SignUpProps {
  formData: SignUpFormData;
  isLoading: boolean;
  setFormData: React.Dispatch<React.SetStateAction<SignUpFormData>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const SignUp: React.FC<SignUpProps> = ({
  formData,
  isLoading,
  setFormData,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-6 md:p-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="mt-1"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-black hover:bg-black/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>
          {/* Sign-in prompt */}
          <p className="mt-4 ml-6 text-sm text-gray-600">
            Sign up to get started. Already have an account?{' '}
            <a href="/login" className="text-black underline font-medium">
              Log in
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <p className="mt-4 text-xs text-gray-600">
        By signing up, you agree to our{' '}
        <a href="/terms" className="underline text-black">
          Terms
        </a>{' '}
        and{' '}
        <a href="/privacy" className="underline text-black">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default SignUp;
