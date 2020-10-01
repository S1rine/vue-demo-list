export function Compute(method, firstNum, secondNum) {
  switch (method) {
    case "plus":
      return firstNum + secondNum;
    case "minus":
      return firstNum - secondNum;
    case "mul":
      return firstNum * secondNum;
    case "divi":
      return firstNum / secondNum;
    default:
      break;
  }
}
