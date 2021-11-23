import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import VerificationInput from 'react-verification-input';

import Button from '../components/button';
import CustomPasswordInput from '../components/passwordInput';
import CustomPhoneInput from '../components/phoneInput';
import SideBar from '../components/sidebar';
import TextInput from '../components/textInut';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [step, setStep] = useState(1);
  const [otpType, setOtpType] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      password.trim().length > 0 &&
      agreedTerms
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [firstName, agreedTerms, lastName, password]);

  const setState = (value: string, field: string) => {
    switch (field) {
      case 'first_name':
        setFirstName(value);
        break;
      case 'other_names':
        setOtherNames(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'phone_number':
        setPhoneNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="w-full max-w-7xl flex">
        <div className="flex-1 bg-white  border-box p-10 md:p-11">
          {step === 2 ? (
            <img
              src={`${router.basePath}/assets/images/arrow_back_black_24dp.svg`}
              alt="done"
              className="w-8 mb-6 cursor-pointer"
              onClick={() => {
                setStep(1);
                setOtpType('');
              }}
            />
          ) : null}
          <h3 className="text-3xl mb-6">
            {step === 1
              ? 'Sign up for an account'
              : `Enter Verification Code to verify your ${
                  otpType === 'email' ? 'email' : 'phone number'
                }`}
          </h3>

          {/* Enter personal details start here */}
          {step === 1 ? (
            <div className="step-one">
              <div className="block md:flex">
                <div className="flex-1  md:pr-5">
                  <TextInput
                    placeholder="eg. John"
                    label="First Name"
                    required={true}
                    value={firstName}
                    onChanged={(value: string) => setState(value, 'first_name')}
                  />
                </div>
                <div className="flex-1  md:pl-5">
                  <TextInput
                    placeholder="eg. Matty"
                    label="Other Names"
                    required={false}
                    value={otherNames}
                    onChanged={(value: string) =>
                      setState(value, 'other_names')
                    }
                  />
                </div>
              </div>

              <div className="block md:flex">
                <div className="flex-1  md:pr-5">
                  <TextInput
                    placeholder="eg. Doe"
                    label="Last Name"
                    required={true}
                    value={lastName}
                    onChanged={(value: string) => setState(value, 'last_name')}
                  />
                </div>
                <div className="flex-1  md:pl-5">
                  <CustomPhoneInput
                    value={phoneNumber}
                    onChanged={(value: string) =>
                      setState(value, 'phone_number')
                    }
                    label="Phone Number"
                    required={false}
                  />
                </div>
              </div>

              <div className="block md:flex">
                <div className="flex-1  md:pr-5">
                  <TextInput
                    placeholder="eg. johndoe@gmail.com"
                    label="Email"
                    required={false}
                    value={email}
                    onChanged={(value: string) => setState(value, 'email')}
                  />
                </div>
                <div className="flex-1  md:pl-5">
                  <CustomPasswordInput
                    value={password}
                    onChanged={(value: string) => setState(value, 'password')}
                    placeholder="Password"
                    label="Pasword"
                    required={true}
                  />
                </div>
              </div>
              <div className="mt-7">
                <input
                  className="mr-2"
                  type="checkbox"
                  style={{ backgroundColor: 'red' }}
                  checked={agreedTerms}
                  onChange={(e) => {
                    setAgreedTerms(e.target.checked);
                  }}
                />
                <p className=" text-base">
                  Check to agreet to
                  <a href="retraced.co" className="text-primary">
                    Terms & Conditions
                  </a>
                  of retraced.co
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-80">
              <VerificationInput
                removeDefaultStyles
                classNames={{
                  container: 'w-full md:w-3/5	 h-20',
                  character:
                    'bg-input mr-2 rounded text-3xl border-border border-2  p-4',
                  characterInactive: 'character--inactive',
                  characterSelected: 'border-primary border-2',
                }}
              />
              <div className="mt-10">
                <p className=" text-lg">
                  {"Didn't get a verification code?"}
                  <a href="retraced.co" className="font-bold text-primary ml-2">
                    Resend
                  </a>
                </p>
              </div>
            </div>
          )}

          <div className="md:items-center	mt-14 flex-col-reverse flex	md:flex-row">
            <div className="flex-1  md:pr-5 p-7 md:p-0 text-center md:text-left">
              <span className=" text-lg">
                Already have an account?
                <a href="retraced.co" className="font-bold text-primary ml-2">
                  Sing in
                </a>{' '}
              </span>
            </div>
            <div className="flex-1 pl:0 md:pl-5">
              <Button
                disabled={disableBtn}
                label="Continue"
                onClicked={() => {
                  if (step === 1) setStep(2);
                  if (email.trim().length > 1) setOtpType('email');
                }}
              />
            </div>
          </div>
        </div>
        <SideBar step={step} otpType={otpType} />
      </div>
    </Main>
  );
};

export default Index;
