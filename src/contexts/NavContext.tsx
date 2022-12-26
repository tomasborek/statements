import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
const NavContext = createContext<any>([]);
export const useNav = () => {
  return useContext(NavContext);
};
const NavProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <NavContext.Provider value={[open, setOpen]}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
