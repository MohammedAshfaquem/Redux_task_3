function testMiddleWare(store) {
  return function (next) {
    return function (action) {
      console.log("Prev Action " , store.getState());
      next(action);
      console.log("Current Action " , store.getState());
    };
  };
}

export default testMiddleWare;
