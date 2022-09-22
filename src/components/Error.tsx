import * as React from 'react';

interface IErrorProps {
    errorMessage?: string
}

const Error: React.FunctionComponent<IErrorProps> = ({errorMessage}) => {
  return (
  <span>
    {errorMessage}
  </span>);
};

export default Error;
