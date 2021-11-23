// custom text input

import { useState } from 'react';

interface TextInputProps {
  label: string;
  required: boolean;
  placeholder?: string;
  value: string;
  onChanged: any;
}

const TextInput = ({
  label,
  required,
  value,
  onChanged,
  placeholder,
}: TextInputProps) => {
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
      <label htmlFor="first_name" className="text-md">
        {label} {required ? <span className="text-error">*</span> : null}
      </label>
      <br />
      <input
        onBlur={handleBlur}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setError(false);
          onChanged(e.target.value);
        }}
        type="text"
        className={`bg-input p-5 w-full border-2 mt-3 focus:outline-none focus:border-primary mb-2 ${
          error ? 'border-error' : 'border-border'
        }`}
      />
      {error ? <span className="text-error">Invalid {label}</span> : null}
    </div>
  );
};

export default TextInput;
