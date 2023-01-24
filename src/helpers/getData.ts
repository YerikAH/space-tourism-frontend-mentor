import { DATA_INITIAL_STATE } from "../constant/dataInitialState";
import { RootObject } from "../interface/data";

export function getDataFunction(urlFat: string): RootObject {
  let data: RootObject | null = DATA_INITIAL_STATE;
  async function getData(url: string) {
    const urlLocal = url;
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
      data = await json;
    } catch (err) {
      // error getData.ts
      data = null;
    }
  }

  getData(urlFat);
  return data;
}
