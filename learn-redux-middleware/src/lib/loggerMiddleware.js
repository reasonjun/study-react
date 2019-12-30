/**
 * 화살표 함수
 */
const loggerMiddleware = store => next => action => {
  console.group(action && action.type); // 액션 타입으로 log를 그룹화 함
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action);
  console.log("다음 상태", store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

/**
 * 일반 function함수
 * const loggerMiddleware = function loggerMiddleware(store) {
 *  return function(next){
 *      return function(action) {
 *          미들웨어 기본 구조
 *      }
 *  }
 * }
 */
export default loggerMiddleware;
