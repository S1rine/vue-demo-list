function counterReducer(data) {
  function counterPlus() {
    data.result++;
  }
  function counterMinus() {
    data.result--;
  }
  return {
    counterPlus,
    counterMinus
  };
}

export default counterReducer;
