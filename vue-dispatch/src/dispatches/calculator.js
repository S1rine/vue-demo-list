import CalReducer from "@/reducers/calculator";
import { UPDATE_NUBER, UPDATE_METHOD } from "@/actions/calculator";

export default function(ctx) {
  const { CalUpdateNumber, CalUpdateMethod } = CalReducer(ctx.$data);

  return function(type, ...args) {
    switch (type) {
      case UPDATE_NUBER:
        ctx.result = CalUpdateNumber(...args);
        break;
      case UPDATE_METHOD:
        ctx.result = CalUpdateMethod(...args);
        break;
      default:
        break;
    }
  };
}
