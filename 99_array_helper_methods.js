// I.forEach()

const colors = ["red", "blue", "green"];

// 순회 : 요소의 크기 만큼만 인덱스 별로 1번만

// 배열의 요소를 순회 & 출력
// 0. 전통적인 for문
for (let i = 0; colors.length; i++) {
  console.log(colors[i]);
}

// 데이터 중심 (O) 인덱스 중심 (X)
// 1. 순회문의로서의 for 문
for (let color of colors) {
  console.log(color);
}

// 반복하면서 뭘 할거야?
// 2. forEach 헬퍼 메소드
// return값 X
colors.forEach((color) => {
  console.log(color);
});

// II. filter()

const numbers = [-20, -15, 5, 10];

const positiveNumber = [];
numbers.forEach((number) => {
  if (number > 0) {
    positiveNumber.push(number);
  }
});

const positiveNumber2 = numbers.filter((number) => number > 0);

// III. map()
// - 순회를 하며, 내부의, 모든 요소에 동일한 작업을 해야하는 경우
// - 숫자 배열 <-> 글자배열, 동일한 데이터를 적용해야하는 경우

const inputs = ["1", "5", "3,", "6"];
const Numbers = inputs.map((input) => {
  return parseInt(input);
});

// IV. reduce()
// - 순회를 하며, 내부의 모든 요소를 하나의 값으로 환원해야되는 경우
// reduce((누적값, 현재값)=>{})
let sumResult = Numbers.reduce((acc, cur) => {
  return acc + cur;
});
console.log(sumResult);
