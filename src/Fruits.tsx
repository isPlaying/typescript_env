import * as React from 'react';

interface IFruits {
  fruits: Array<string>;
}
const Fruits = ({ fruits }: IFruits) => {
  return (
    <ul>
      {fruits.map((fruit: string, index: number) => {
        return <li key={index}>{fruit}</li>;
      })}
    </ul>
  );
};
Fruits.displayName = 'Fruits';


export default Fruits;
