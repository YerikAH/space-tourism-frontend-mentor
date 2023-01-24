import { useEffect, useState } from "react";
import { DATA_INITIAL_STATE } from "../constant/dataInitialState";
import { RootObject } from "../interface/data";

export function useFetch(url: string) {
  const [dataJson, setDataJson] = useState<RootObject | null>(
    DATA_INITIAL_STATE
  );
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getData = async (url: string) => {
      const urlLocal = url;
      setLoad(true);
      try {
        const res = await fetch(urlLocal);
        const json: Promise<RootObject> = await res.json();
        if (!res.ok) {
          const errorObj = {
            statusText: res.statusText,
            status: res.status,
          };
          throw errorObj;
        }
        const data = await json;
        setDataJson(data);
      } catch (err) {
        setDataJson(null);
      } finally {
        setLoad(false);
      }
    };
    getData(url);
  }, [url]);

  return { dataJson, load }; // me retorna data_initial_state
}
