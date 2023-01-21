import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [dataJson, setDataJson] = useState();
  const [errorJson, setErrorJson] = useState(false);
  async function getData(url: string) {
    const urlLocal = url;
    try {
      const res = await fetch(urlLocal);
      const json = res.json();
      if (!res.ok) {
        const errorObj = {
          statusText: res.statusText,
          status: res.status,
        };
        throw errorObj;
      }
      setDataJson(await json);
      setErrorJson(false);
    } catch (err) {
      setErrorJson(true);
    }
  }

  useEffect(() => {
    getData(url);
  }, [url]);

  return [dataJson, errorJson];
}
export default useFetch;
