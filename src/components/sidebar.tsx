import React from 'react';

import { useRouter } from 'next/router';

import Steps from './steps';

interface SideBarProps {
  step: number;
  otpType: string;
}

const SideBar = ({ step, otpType }: SideBarProps) => {
  const router = useRouter();

  const getTitle = () => {
    if (step === 1) return 'Personal Details';
    if (otpType === 'email') return 'Verify your Email';
    return 'Verify your Phone number';
  };

  const getContent = () => {
    if (step === 1) {
      return ` Let’s get to know you. Kindly fill in your name and the other
        required details to create your account.`;
    }
    if (otpType === 'email') {
      return ` You're almost there. A verification code was just sent to your email address. Enter it here continue.`;
    }

    return `You're almost there. A verification code was just sent to your phone by sms. Enter it here continue.`;
  };

  return (
    <div className="bg-white ml-12 w-1/3 p-10 hidden md:block">
      <div className="flex flex-col justify-between h-full">
        <Steps step={step} />

        <div className="text-center">
          <img
            src={`${router.basePath}/assets/images/${
              step === 1 ? 'Document Writer.svg' : 'Password Reset.svg'
            }`}
            alt="done"
            width="30%"
            className="m-auto"
          />
          <h2 className="text-xl mt-5 mb-2">{getTitle()}</h2>
          <span>{getContent()}</span>
        </div>

        <div className="text-center">
          <span className="text-lg ">
            Need help?
            <a href="retraced.co" className="font-bold text-primary ml-2">
              Contact us
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
