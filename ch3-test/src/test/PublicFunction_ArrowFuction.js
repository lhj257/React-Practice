//화살표 함수, 일반 함수 차이점 확인해보기.
// ex1)
// setTimeout 이 함수를 기준으로 모양 확인

// es6 화살표 함수로 바로 자동 완성.
// 첫 매개변수, 콜백 함수,
// 두번째 매개변수, 특정 시간, ms 3000ms -> 3초
// 특정 시간 후, 콜백 함수 동작.
setTimeout(() => {
  console.log("화살표 함수 테스트 setTimeout");
}, 3000);

setTimeout(function test() {
  console.log("일반 함수 테스트 setTimeout");
}, 2000);
