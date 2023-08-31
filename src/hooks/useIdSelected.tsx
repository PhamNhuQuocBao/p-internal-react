import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface IdSelectedProps {
  children: ReactNode;
}

interface IdSelectedContext {
  idSelected: number;
  setIdSelected: (id: number) => void;
}

const IdSelectedContext = createContext<IdSelectedContext | undefined>(
  undefined
);

export const useIdSelected = () => {
  const context = useContext(IdSelectedContext);
  if (!context) throw new Error("Id not exist");
  return context;
};

export const IdSelectedProviders: FC<IdSelectedProps> = ({ children }) => {
  const [idSelected, setIdSelected] = useState<number>(0);

  const valueContext = useMemo(() => {
    return {
      idSelected,
      setIdSelected,
    };
  }, [idSelected]);

  return (
    <IdSelectedContext.Provider value={valueContext}>
      {children}
    </IdSelectedContext.Provider>
  );
};
