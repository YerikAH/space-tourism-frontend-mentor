import { Options } from "../interface/options";

export function changeTrueValue(obj: Options[], myVar: string): Options[] {
  obj = obj.map((o) => {
    if (o.value === true) {
      return { ...o, value: false };
    }
    return o;
  });
  const index = obj.findIndex((o) => o.name === myVar);
  obj[index] = { ...obj[index], value: true };

  return obj;
}
