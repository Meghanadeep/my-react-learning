import React, {useReducer} from 'react'


const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT" : 
         return {count : state.count+1, showText: state.showText}
        case "TOGGLETEXT" :
         return {count: state.count, showText: !state.showText }
        default:
          return state;     
    }

}
const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: false})
    return (
        <div>
            <div>We can use UseReducer when on c=single action multiple state changes takes place , this hook takes a reducer function and initial state object that complies of multiple states</div>
            <h1>{state.count}</h1>
            <h2>{state.showText && "here comes the text part"}</h2>
            <button onClick={() => {
               dispatch({type: "INCREMENT"})
               dispatch({type: "TOGGLETEXT"}) 
            }}>Toggle and inncrement</button>
        </div>
    )
}

export default UseReducer
