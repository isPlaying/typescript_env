import * as React from 'react';

const Time: React.FC = () => {
  const [time, setTime] = React.useState<string>('');
  const getTime = () => {
    setTime(new Date().toTimeString());
  };
  return (
    <React.Fragment>
      {time}
      <button onClick={getTime}>Get Time</button>
    </React.Fragment>
  );
};

Time.displayName = 'Time';

export default Time;
