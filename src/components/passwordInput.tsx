import { useState } from 'react';

import { useRouter } from 'next/router';

interface PasswordInputProps {
  label: string;
  required: boolean;
  placeholder?: string;
  value: string;
  onChanged: any;
}

const CustomPasswordInput = ({
  label,
  required,
  value,
  onChanged,
  placeholder,
}: PasswordInputProps) => {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleBlur = (e: any) => {
    if (!required) return;
    if (e.target.value.length < 1) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="mt-7">
      <label htmlFor={label} className="text-md">
        {label} {required ? <span className="text-error">*</span> : null}
      </label>
      <br />
      <div
        id={label}
        className={`bg-input w-full flex border-2 mt-3 focus-within:outline-none rounded focus-within:border-primary mb-2 ${
          error ? 'border-error' : 'border-border'
        }`}
      >
        <input
          placeholder={placeholder}
          onBlur={handleBlur}
          value={value}
          onChange={(e) => {
            setError(false);
            onChanged(e.target.value);
          }}
          type={showPassword ? 'text' : 'password'}
          className="outline-none flex-1 p-5 bg-input"
        />
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className="bg-input pl-2 pr-2"
        >
          <img
            src={`${router.basePath}/assets/images/${
              showPassword
                ? 'visibility_off_black_24dp.svg'
                : 'visibility_black_24dp.svg'
            }`}
            alt="password"
          />
        </button>
      </div>
      {error ? <span className="text-error">Invalid {label}</span> : null}
    </div>
  );
};

export default CustomPasswordInput;
