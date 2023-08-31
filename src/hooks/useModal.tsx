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
  isOpenForm: boolean;
  setIsOpenForm: (isOpen: boolean) => void;
  isOpenFormUpdate: boolean;
  setIsOpenFormUpdate: (isOpen: boolean) => void;
  isConfirmDeleteOpen: boolean;
  setIsConfirmDeleteOpen: (isOpen: boolean) => void;
  isErrorModalOpen: boolean;
  setIsErrorModalOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContext | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Context is undefined");
  return context;
};

export const ModalProviders: FC<ModalProvidersProps> = ({ children }) => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [isOpenFormUpdate, setIsOpenFormUpdate] = useState<boolean>(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] =
    useState<boolean>(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);

  const valueContext = useMemo(() => {
    return {
      isOpenForm,
      setIsOpenForm,
      isOpenFormUpdate,
      setIsOpenFormUpdate,
      isConfirmDeleteOpen,
      setIsConfirmDeleteOpen,
      isErrorModalOpen,
      setIsErrorModalOpen,
    };
  }, [isConfirmDeleteOpen, isErrorModalOpen, isOpenForm, isOpenFormUpdate]);

  return (
    <ModalContext.Provider value={valueContext}>
      {children}
    </ModalContext.Provider>
  );
};
