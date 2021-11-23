interface ButtonProps {
  label: string;
  disabled: boolean;
  onClicked: any;
}

const Button = ({ label, disabled, onClicked }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => {
        onClicked();
      }}
      style={{ cursor: 'cursor' }}
      className={`p-5 w-full rounded text-white active:bg-clickedBtn ${
        disabled ? 'bg-disabled' : 'bg-primary'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
