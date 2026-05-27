export function add(a, b) {
  return a + b;
}

export function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        throw new Error("0으로 나눌 수 없습니다");
      }
      return a / b;
    default:
      throw new Error("알 수 없는 연산자");
  }
}
