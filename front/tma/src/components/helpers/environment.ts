  export const env = (key: string, defaultValue?: any): any => {
    console.log('window.t_env')
    console.log(window.t_env)
    if (window.t_env[`REACT_APP_${ key }`]) {
      return window.t_env[`REACT_APP_${ key }`];
    }
  
    return defaultValue ? defaultValue : null;
  };
  