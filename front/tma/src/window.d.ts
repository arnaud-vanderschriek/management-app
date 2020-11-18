export declare const env: (key: string, defaultValue?: any) => any;
declare global {
  interface Window {
    t_env: {
      [key: string]: string;
    };
  }
}