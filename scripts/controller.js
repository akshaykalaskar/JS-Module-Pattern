const eventsController = ((moduleCtrl, viewCtrl) => {
  // All events logic here..
  const result = moduleCtrl.showResult(11);

  const getResult = () => {
    return result;
  };

  return {
    getResult: getResult,
  };
})(moduleController, viewController);
