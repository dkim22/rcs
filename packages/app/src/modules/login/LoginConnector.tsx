import * as React from 'react';
import { LoginController } from '@abb/controller';
// import * as SecureStore from 'expo-secure-store';
import { LoginView } from './ui/LoginView';
import { RouteComponentProps } from 'react-router-native';
// import { SID_KEY } from '../shared/constants';

export class LoginConnector extends React.PureComponent<RouteComponentProps> {
  // saveSessionId = async (sid: string) => {
  //   SecureStore.setItemAsync(SID_KEY, sid);
  // };

  onFinish = () => {
    this.props.history.push('/me');
  };

  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView submit={submit} onFinish={this.onFinish} />}
      </LoginController>
    );
  }
}
