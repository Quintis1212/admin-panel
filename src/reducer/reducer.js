import { createStore } from "redux";


function reducer(state = [], action) {
  switch (action.type) {
    case "SET-DATA":
        let data=  action.data 
        console.log(data)
      return {activePages:data};
    case "REFRESH":
      //console.log("refreshed")
        let initRefresh= action.initRefresh 
      return {...state,initRefresh:initRefresh};
      default:
      return state;
  }
}




let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
