const logger = store => next => action => {
  console.group(action.type);
  console.log("This is action", action);
  let returnedData = next(action);
  console.log(store.getState());
  console.groupEnd();
  return returnedData;
};
export default logger;
