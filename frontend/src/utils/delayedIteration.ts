export function delayedIteration(
  iterableArray: any[],
  callback: CallableFunction,
  duration = 400,
  index = 0
) {
  if (index >= iterableArray.length) return;

  callback(iterableArray[index]);

  setTimeout(
    delayedIteration.bind({}, iterableArray, callback, duration, index + 1),
    duration
  );
}
