import { createContext, useEffect, useState } from "react";
import { DATA_INITIAL_STATE } from "../constant/dataInitialState";
import { useFetch } from "../hook/useFetch";
import { RootObject } from "../interface/data";
import { ContextProps } from "../interface/props";

const FetchContext = createContext<RootObject>(DATA_INITIAL_STATE);

const FetchProvider = ({ children }: ContextProps) => {
  const envUrl: string = import.meta.env.VITE_KEY_DATA_URL;
  const [data, setData] = useState<RootObject>(DATA_INITIAL_STATE);
  const { dataJson, load } = useFetch(envUrl);

  useEffect(() => {
    if (dataJson !== null) {
      setData(dataJson);
    }
    console.log(dataJson);
  }, [dataJson, load]);
  console.log("Estoy dentro del provedor");
  return <FetchContext.Provider value={data}>{children}</FetchContext.Provider>;
};

export default FetchContext;
export { FetchProvider };
