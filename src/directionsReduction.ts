function dirReduc(arr: [string]) {
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  const stack = [];

  for (let direction of arr) {
    if (stack.length > 0 && opposite[direction] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(direction);
    }
  }

  return stack;
}
