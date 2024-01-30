import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchDetailAction = createAsyncThunk(
  'detail',
  (payload, { dispatch, getState }) => {}
)

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    houseDetail: {},
    isShowAppHead: true
  },
  reducers: {
    changeHouseDetailAction(state, { payload }) {
      state.houseDetail = payload
      console.log(payload)
    },
    changeIsShowAppHead(state, { payload }) {
      console.log(payload, 'store')

      state.isShowAppHead = payload
    }
  }
})

export const { changeHouseDetailAction, changeIsShowAppHead } =
  detailSlice.actions

export default detailSlice.reducer
