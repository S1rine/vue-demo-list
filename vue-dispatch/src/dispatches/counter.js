import counterReducer from "@/reducers/counter";

import { PLUS, MINUS } from "@/actions/counter";

export default function(ctx) {
  const { counterPlus, counterMinus } = counterReducer(ctx.$data);

  return function(type) {
    switch (type) {
      case PLUS:
        counterPlus();
        break;
      case MINUS:
        counterMinus();
        break;
      default:
        break;
    }
  };
}
