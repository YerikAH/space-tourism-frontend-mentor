import { useEffect, useState } from "react";
import { DATA_INITIAL_STATE } from "../constant/dataInitialState";
import { RootObject } from "../interface/data";

function useFetch(url: string) {
  const [dataJson, setDataJson] = useState<RootObject | null>(
    DATA_INITIAL_STATE
  );
  const [load, setLoad] = useState(false);
  async function getData(url: string) {
    const urlLocal = url;
    setLoad(true);
    try {
      const res = await fetch(urlLocal);
      const json: Promise<RootObject> = res.json();
      if (!res.ok) {
        const errorObj = {
          statusText: res.statusText,
          status: res.status,
        };
        throw errorObj;
      }
      setDataJson(await json);
      setLoad(false);
    } catch (err) {
      setDataJson(null);
      setLoad(false);
    }
  }
  useEffect(() => {
    getData(url);
  }, [url]);

  return { dataJson, load };
}
export default useFetch;
