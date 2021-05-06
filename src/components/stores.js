import {createStore} from 'redux'
import updateReducer from './reducer'

export const stores = createStore(updateReducer)


