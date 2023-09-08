import { longFunction } from "./longFunction";

export async function basicService() {
  const result = await longFunction("Hello world!");

  return result;
}
