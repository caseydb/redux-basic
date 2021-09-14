import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true, isAuthenticated: false}

// Store -> component -> dispatch(action) -> reducer -> store

const Reducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    } 
    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }
    if (action.type === 'increase') {
        return {
            ...state,
            counter: state.counter + action.amount,
        }
    }
    if (action.type === 'toggle') {
        return {
            ...state,
            showCounter: !state.showCounter,
        }
    }
    if (action.type === 'login') {
        return {
            ...state,
            isAuthenticated: state.isAuthenticated = true
        }
    }
    if (action.type === 'logout') {
        return {
            ...state,
            isAuthenticated: state.isAuthenticated = false
        }
    }

        return state;
}

const store = createStore(Reducer)

export default store