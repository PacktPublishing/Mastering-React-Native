class Dispatcher {

  constructor() {
    this.isDispatching = false;
    this.actionHandlers = [];
  }

  register(actionHandler) {
    this.actionHandlers.push(actionHandler);
  }

  dispatch(action) {
    if (this.isDispatching) {
      throw new Error('Cannot dispatch in the middle of a dispatch');
    }
    this.isDispatching = true;

    this.actionHandlers.forEach(handler => handler(action));

    this.isDispatching = false;
  }

}

export default new Dispatcher();
