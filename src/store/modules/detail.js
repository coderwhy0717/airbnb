const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchDetailAction = createAsyncThunk(
  "detail",
  (payload, { dispatch, getState }) => {}
);

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    houseDetail: {},
  },
  reducers: {
    changeHouseDetailAction(state, { payload }) {
      state.houseDetail = payload;
      console.log(payload);
    },
  },
});

export const { changeHouseDetailAction } = detailSlice.actions;

export default detailSlice.reducer;
