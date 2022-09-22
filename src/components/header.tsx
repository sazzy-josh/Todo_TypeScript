import * as React from 'react';

const Header: React.FunctionComponent = () => {

const  Weekdays = [ "Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday" , "Saturday"  ]
const d = new Date();
let day = Weekdays[d.getDay()]


  return (
    <div className='w-full text-center'>
        Hey👋🏻!!What are we doing this {day} 😉
    </div>
  );
};

export default Header;
