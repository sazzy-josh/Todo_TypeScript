import * as React from 'react';

const Header: React.FunctionComponent = () => {

const  Weekdays = [ "Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday" , "Saturday"  ]
const d = new Date();
let day = Weekdays[d.getDay()]


  return (
    <h1 className='w-full text-center text-lg'>
        Heyππ»!!What are we doing this {day} π
    </h1>
  );
};

export default Header;
