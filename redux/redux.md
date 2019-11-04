# Redux flow

1. Create `constant.js` file with constants string for action's types. Therfore, we'll avoid mispells when we define action's types later.

 ```javascript
  export const CHANGE_TEXT_COMMENT = 'CHANGE_TEXT_COMMENT'
 ```

2. Create `actions.js` file with functions. These functions return us `type` of action (imported from `constant.js`) and `payload` - usually args, passed to this function. 

 ```javascript
    import { CHANGE_TEXT_COMMENT } from './constants'

    export const SetTextComment = (text) => ({
        type: CHANGE_TEXT_COMMENT,
        payload: text
    })
 ```

3. Create `reducers.js` file. `reducer.js` connects actions and state. We create `initialState` object - the point we start with. And we need to add some function - `reducer` which will check `action.type` and if `action.type` is our action, we update `initialState` object with `action.payload`.

 ```javascript
import { CHANGE_TEXT_COMMENT } from './constants'

const initialState = {
    commentText: ''
}
export const createComment = (state = initialState, action = {}) => {
    switch(action.type){
        case CHANGE_TEXT_COMMENT:
            return {...state, commentText: action.payload}
        default:
            return state;
        }
    
}
 ```