import React from "react";
import { connect } from "react-redux";
import { RootState } from "../state/store";

interface OwnProps {
    form: JSX.Element,
    localToken: string | null,
  }
  
  interface Props extends OwnProps {
    token: string | null,
    isVerifiedToken: boolean,
    verifyToken: (token: string) => Promise<void>,
  }

export class LoginGuard extends React.Component<Props> {
    async componentDidMount() {
        if (this.props.localToken && !this.props.isVerifiedToken) {
          await this.props.verifyToken(this.props.localToken);
        }
      }
    
      render() {
        if (this.props.token) {
          return this.props.children;
        }
    
        if (this.props.localToken && !this.props.isVerifiedToken) {
          return <div>Loading</div>   ;
        }
    
        return this.props.form;
      }
    }
    
    const mapState = (state: RootState, propsFromParent: any | OwnProps) =>
      ({
        token: state.auth.token,
        isVerifiedToken: state.auth.isVerifiedToken,
        form: propsFromParent.form,
        localToken: propsFromParent.localToken || null,
      });
    
    const mapDispatch = (dispatch: any) => ({ verifyToken: dispatch.auth.verifyToken });
    
    export default connect(mapState, mapDispatch)(LoginGuard);

