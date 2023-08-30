import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface ModalProvidersProps {
  children: ReactNode;
}

interface ModalContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContext | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Context is undefined");
  return context;
};

export const ModalProviders: FC<ModalProvidersProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const valueContext = useMemo(() => {
    return { isOpen, setIsOpen };
  }, [isOpen, setIsOpen]);

  return (
    <ModalContext.Provider value={valueContext}>
      {children}
    </ModalContext.Provider>
  );
};
