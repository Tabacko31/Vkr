import { createDataApi, deleteDataApi, fetchDataApi, fetchOneDataApi } from '../../../api/api';
import { createSlice } from '@reduxjs/toolkit';

const adsSlice = createSlice({
  name: 'ads',
  initialState: {
    ads: [],
    detail:{}
  },
  reducers: {
    setAds: (state, action) => {
      state.ads =[...action.payload];
    },
    addAds: (state, action) => {
      state.ads.push(action.payload);
    },
    setDetail:(state, action)=>{
      state.detail=action.payload;
    },
    deleteAds: (state, action) => {
      const id = action.payload;
      const index = state.ads.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.ads.splice(index, 1);
      }
    },
  },
});

const { setAds, addAds, deleteAds,setDetail } = adsSlice.actions;

export const fetchDataAsync = () => async (dispatch) => {
  const ads = await fetchDataApi();
  console.log(ads)
  dispatch(setAds(ads));
};
export const fetchOneDataAsync = (id) => async (dispatch) => {
  const ads = await fetchOneDataApi(id);
  dispatch(setDetail(ads));
};

export const createDataAsync = (data) => async (dispatch) => {
  const newData = await createDataApi(data);
  dispatch(addAds(newData));
};

export const deleteDataAsync = (id) => async (dispatch) => {
  await deleteDataApi(id);
  dispatch(deleteAds(id));
};

export default adsSlice.reducer;