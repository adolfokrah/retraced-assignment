import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}
    <div className="w-full h-screen grid place-items-center">
      {props.children}
    </div>
  </div>
);

export { Main };
