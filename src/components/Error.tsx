import * as React from 'react';
import { AiOutlineWarning } from 'react-icons/ai'
import { motion } from "framer-motion"

interface IErrorProps {
    errorMessage?: string
}

const Error: React.FunctionComponent<IErrorProps> = ({errorMessage}) => {
  return (
  <motion.span
    initial={{opacity: 0.5}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  className='flex justify-center items-center gap-x-1 rounded-md p-2  bg-red-200 w-full'>
    < AiOutlineWarning />
    <p>{errorMessage}</p>
  </motion.span>);
};

export default Error;
