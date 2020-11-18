  export const env = (key: string, defaultValue?: any): any => {
    if (window.t_env[`REACT_APP_${ key }`]) {
      return window.t_env[`REACT_APP_${ key }`];
    }
  
    return defaultValue ? defaultValue : null;
  };
  