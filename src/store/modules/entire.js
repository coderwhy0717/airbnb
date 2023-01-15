import { getEntireList } from '@/services/modules/entire'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchEntireDataAction = createAsyncThunk(
  'entire',
  async (payload, { dispatch, getState }) => {
    // dispatch(changeCurrentPageAction(payload))
    dispatch(changeShowEntireLoadingAction(false))
    const res = await getEntireList(payload * 20, 20)
    setTimeout(() => {
      dispatch(changeShowEntireLoadingAction(true))
    }, 5000)
    console.log(res)
    dispatch(changeEntireListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }
)
const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    entireList: [],
    currentPage: 0,
    totalCount: 0,
    showEntireLoading: false
  },
  reducers: {
    changeEntireListAction(state, { payload }) {
      state.entireList = payload
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeShowEntireLoadingAction(state, { payload }) {
      console.log(payload)

      state.showEntireLoading = payload
    }
  }
})

export const {
  changeEntireListAction,
  changeTotalCountAction,
  changeCurrentPageAction,
  changeShowEntireLoadingAction
} = entireSlice.actions

export default entireSlice.reducer
