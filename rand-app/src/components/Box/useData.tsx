import {
  useState, createContext, useContext, FC,
  ReactNode, SetStateAction, Dispatch
} from 'react';

interface DataType {
  date?: string;
  text?: string[];
  numbers?: Number | 0;
}

interface DataContextType {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataType>({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};



