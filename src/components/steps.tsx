import { useRouter } from 'next/router';

interface StepsProps {
  step: number;
}

const Steps = ({ step }: StepsProps) => {
  const router = useRouter();

  return (
    <div className="flex items-center bg-white mt-10 w-20 self-center">
      <div
        className={`rounded-xl w-6 h-6 border-primary  ${
          step === 1 ? 'bg-white border-8 ' : 'bg-primary border-4'
        }`}
      >
        <img
          src={`${router.basePath}/assets/images/Done.svg`}
          alt="done"
          width="100%"
        />
      </div>
      <div className="bg-border w-6 h-0.5" />
      <div
        className={`rounded-xl w-6 h-6 border-8  ${
          step === 2 ? 'border-primary bg-white' : 'border-border bg-border'
        }`}
      ></div>
    </div>
  );
};

export default Steps;
