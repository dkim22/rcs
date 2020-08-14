import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ChangePasswordView } from './ui/ChangePasswordView';
import { ChangePasswordController } from '@abb/controller';

interface MatchParams {
  key: string;
}

export class ChangePasswordConnector extends React.PureComponent<RouteComponentProps<MatchParams>> {
  onFinish = () => {
    this.props.history.push('/login');
  };

  render() {
    const {
      match: {
        params: { key },
      },
    } = this.props;

    return (
      <ChangePasswordController>
        {({ submit }) => (
          <ChangePasswordView token={key} onFinish={this.onFinish} submit={submit} />
        )}
      </ChangePasswordController>
    );
  }
}
