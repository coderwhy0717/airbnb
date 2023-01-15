import {
  getDiscount,
  getgoodPrice,
  gethigHscore,
  getHmoePlus,
  getHotRecommend,
  getLongFor
} from '@/services/modules/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchHomeDataAction = createAsyncThunk(
  'fectdata',
  (payload, { dispatch, getState }) => {
    console.log(payload, '异步请求参数')

    getgoodPrice().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getDiscount().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
    gethigHscore().then((res) => {
      dispatch(changeHighscoreAction(res))
    })
    getHmoePlus().then((res) => {
      dispatch(changeHomePlusAction(res))
    })
    getHotRecommend().then((res) => {
      dispatch(changeHotRecommendAction(res))
    })
    getLongFor().then((res) => {
      dispatch(changeLongForAction(res))
    })
  }
)
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    disCount: {},
    highscore: {},
    homePlus: {},
    hotRecommend: {},
    longFor: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.disCount = payload
    },
    changeHighscoreAction(state, { payload }) {
      state.highscore = payload
    },
    changeHomePlusAction(state, { payload }) {
      state.homePlus = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeLongForAction(state, { payload }) {
      state.longFor = payload
    }
  }
  // ,
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // }
})

export const {
  changeGoodPriceInfoAction,
  changeDiscountInfoAction,
  changeHighscoreAction,
  changeHomePlusAction,
  changeHotRecommendAction,
  changeLongForAction
} = homeSlice.actions

export default homeSlice.reducer
