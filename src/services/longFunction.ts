export function longFunction(data: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
}
