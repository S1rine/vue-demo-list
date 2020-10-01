import { Compute } from "@/libs/utils";

export default function(data) {
  function CalUpdateNumber(field, newVal) {
    data[field] = newVal;
    return Compute(data.curIdx, data.firstNumber, data.secondNumber);
  }
  function CalUpdateMethod(method) {
    data.curIdx = method;
    return Compute(data.curIdx, data.firstNumber, data.secondNumber);
  }

  return {
    CalUpdateNumber,
    CalUpdateMethod
  };
}
