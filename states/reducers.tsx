import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0,
    },
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },
    },
  })

  export const { increment, decrement, incrementByAmount } = counterSlice.actions
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.counter.value
  export default counterSlice.reducer

  export const PagerPosition =  createSlice({
    name: 'pageIndicator',
    initialState: {
      value: 2,
    },
    reducers: {
      onPageSelected: (state, action: PayloadAction<number>) =>{
        state.value = action.payload
      }
    }
  })

  export const { onPageSelected } = PagerPosition.actions
  export const selectPage = (state: RootState) => state.pageIndicator.value
  exports.pagingReducer = PagerPosition.reducer 
