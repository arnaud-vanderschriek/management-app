import { toast } from 'react-toastify';

toast.configure();

export class Toastify {
  private defaultConfig = {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  error(error: string) {
    toast.error(error, this.defaultConfig);
  }

  info(info: string) {
    toast.info(info, this.defaultConfig);
  }
}