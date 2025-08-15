import { HeaderProps } from '@/types';
import HeaderClient from './HeaderClient';

const Header = ({ 
  title = 'Home', 
  showHamburger = false, 
  onHamburgerHover 
}: HeaderProps) => {
  return (
    <HeaderClient 
      title={title}
      showHamburger={showHamburger}
      onHamburgerHover={onHamburgerHover}
    />
  );
};

export default Header;
