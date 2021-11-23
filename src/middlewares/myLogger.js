const myLogger = (store) => (next) => (action) => {
  console.log(action); //console에 액션 출력
  const result = next(action); // 다음 미들웨어 혹은 리듀서에게 액션 전달
  console.logg("\t", store.getState()); //업데이트 이후 상태 조회
  return result; // dispatch(action)의 결과물
};
export default myLogger;
