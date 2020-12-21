import { RematchRootState, init } from '@rematch/core';
import * as auth from '../login/state/models/auth';
import * as users from '../users/state/models/users';
import * as navbar from '../navbar/state/models/navbar';

const models = {
  ...auth,
  ...users,
  ...navbar,
}

export const store = init({
    models,
});

export type RootState = RematchRootState<typeof models>
export type RootDispatch = typeof store.dispatch;

declare module 'react-redux' {
    interface Connect {
      // eslint-disable-next-line camelcase
      <no_state = {}, TDispatchProps = {}, TOwnProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: (dispatch: RootDispatch) => TDispatchProps,
      ): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;
  
      <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = {}>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: (dispatch: RootDispatch) => TDispatchProps,
      ): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;
    }
  }