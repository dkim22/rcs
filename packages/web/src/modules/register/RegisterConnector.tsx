import * as React from "react";
import { RegisterController } from "@abb/controller";

import { RegisterView } from "./ui/RegisterView";

// container => view
// 보통은 이런 방식으로 패턴을 만들지만 react, react-native에서 공용으로 사용할 로직들을 container에 넣을 것임
// container => connector => view
// 그리고 connector를 만들어 서로 다른 뷰(react, react-native)에 연결 시킬 것임
// controller => connector => view
// 네이밍은 위에와 같이 지을 것임

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
