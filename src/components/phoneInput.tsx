import { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputProps {
  label: string;
  required: boolean;
  value: string;
  onChanged: any;
}

const CustomPhoneInput = ({
  label,
  required,
  value,
  onChanged,
}: PhoneInputProps) => {
  const [error, setError] = useState(false);

  const handleBlur = (e: any) => {
    if (!required) return;

    if (e.target.value.trim().length < 1) {
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

      <PhoneInput
        placeholder="453 343 2342"
        country={'de'}
        onBlur={handleBlur}
        value={value}
        containerClass={`bg-input w-full border-2 mt-3 focus-within:outline-none rounded focus-within:border-primary mb-2 ${
          error ? 'border-error' : 'border-border'
        }`}
        inputStyle={{ border: 'none', height: 60, backgroundColor: '#F7F7F7' }}
        buttonStyle={{ border: 'none', backgroundColor: '#F7F7F7' }}
        onChange={(phone: string) => {
          onChanged(phone);
        }}
      />
      {error ? <span className="text-error">Invalid {label}</span> : null}
    </div>
  );
};

export default CustomPhoneInput;
