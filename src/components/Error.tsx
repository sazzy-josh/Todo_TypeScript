import * as React from 'react';
import { AiOutlineWarning } from 'react-icons/ai'


interface IErrorProps {
    errorMessage?: string
}

const Error: React.FunctionComponent<IErrorProps> = ({errorMessage}) => {
  return (
  <span className='flex justify-center items-center gap-x-1 rounded-md p-2  bg-red-200 w-full'>
    < AiOutlineWarning />
    <p>{errorMessage}</p>
  </span>);
};

export default Error;
