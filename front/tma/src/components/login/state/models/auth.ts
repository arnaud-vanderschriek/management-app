import { createModel } from '@rematch/core';
import { addTokenToRequestInterceptor, apiService, clearTokenFromAxios } from '../../../http/service';
import { Toastify } from '../../../helpers/Toastify';
import { UserLoginInterface } from '../../index'

export interface UserAuthenticationDto {
  email: string,
  username: string,
  password: string,
}

type AuthState = {
  token: string | null,
  isVerifiedToken: boolean,
  user: UserLoginInterface,
};

export const auth = createModel({
  state: {
    token: null,
    isVerifiedToken: false,
    user: {} as UserLoginInterface,
  },
  reducers: {
    updateToken: (state: AuthState, payload: string): AuthState => ({ ...state, token: payload }),
    updateUser: (state: AuthState, user: UserLoginInterface): AuthState => ({...state, user }),
    setIsVerifiedToken: (state: AuthState, payload: boolean): AuthState => ({ ...state, isVerifiedToken: payload }),
    clearToken: (state: AuthState): AuthState => ({ ...state, token: null }),
  },
  effects: {
    async verifyToken(token: string) {
      try {
        addTokenToRequestInterceptor(token);
        const data = await apiService.post('/users/token/verify', {});
        console.log('data in verifyToken: ', data);
        console.log('Token: ', token);
        this.updateToken(token);
      } catch (error) {
        await clearTokenFromAxios();
      } finally {
        this.setIsVerifiedToken(true);
      }
    },
    async login(dto: UserAuthenticationDto) {
      try {
        const { data } = await apiService.post('/users/login', dto);
        if (!data.token) {
          throw new Error('there is no token in the response');
        }
        // console.log('data: ',data)
        this.updateToken(data.token);
        this.updateUser(data);

        localStorage.setItem('managementApp:admin:auth-token', data.token);
      } catch (error) {
        (new Toastify()).error(`Failed to login. ${error.message}`);
      }
    },

    async logout() {
      console.log('entrée dans la fonction avant clearTokenFromAxios')
      await clearTokenFromAxios();
      console.log('entrée dans la fonction apres clearTokenFromAxios')
      this.clearToken();
      localStorage.clear();
    },
  },
});
