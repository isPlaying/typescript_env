import * as React from 'react';
interface IText {
  text: string;
}
const Header = ({ text }: IText) => {
  React.useEffect(() => {
    alert(document.querySelector('.primary-header'));
  });
  return <h1 className="primary-header">{text}</h1>;
};

Header.displayName = 'Header';

export default Header;
