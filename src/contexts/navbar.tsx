import useWindow, { SizeTypes } from 'hooks/useWindow';
import React from 'react';

export const NavBarContext = React.createContext<{
  openNav:() => void;
  closeNav: () => void;
  isNavOpen: boolean;
  isSmallNav: boolean;
    }>({
      openNav: () => {},
      closeNav: () => {},
      isNavOpen: false,
      isSmallNav: false,
    });

const NavBarProvider: React.FunctionComponent = ({ children }) => {
  // Check window size for breakpoint
  const { size } = useWindow();
  const isSmallNav = size === SizeTypes.MEDIUM || size === SizeTypes.XSMALL;

  // Toggle nav menu open / close state
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(true);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <NavBarContext.Provider
      value={{
        openNav,
        closeNav,
        isNavOpen,
        isSmallNav,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarProvider;
