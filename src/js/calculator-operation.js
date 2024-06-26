function handleState() {
  let initialState = 0;
  function handleOperation() {
    const add = (number) => {
      initialState += number;
      return initialState;
    };
    const substract = (number) => {
        initialState -= number;
        return initialState;
      };
      const multiply = (number) => {
          initialState *= number;
          return initialState;
        };
        const divine = (number) => {
            if(number !==0) {

                initialState /= number;
                return initialState;
            } else {
                throw new Error(`You can't divine by "0"`)
            }
        };

    return {
      add,
      substract,
      divine,
      multiply,
    };
  }
  return handleOperation();
}

export default handleState;
