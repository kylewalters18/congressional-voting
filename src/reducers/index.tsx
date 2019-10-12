import { StoreState } from '../types'
import { Action } from '../actions'

import one from '../data/50_50_0.7_0.3.json'
import two from '../data/50_50_0.8_0.2.json'
import three from '../data/50_50_0.9_0.1.json'
import four from '../data/50_50_0.95_0.05.json'
import five from '../data/50_50_0.99_0.01.json'

const initialState = {
  dataset: 0,
  data: [one, two, three, four, five],
}

const rootReducer = (state: StoreState = initialState, action: any) => {
  switch (action.type) {
    case 'SELECT_DATASET': {
      return { ...state, dataset: action.current }
    }

    default: {
      return state
    }
  }
}

export default rootReducer
