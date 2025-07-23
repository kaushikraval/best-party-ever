import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showMessage } from './common.slice';
import axios from 'axios';

const initialState = {
  googlePlaceLoading: false,
  isGooglePlaceUpdated: false,
  googlePlaceDetail: {},
};

export const getGooglePlaceListData = createAsyncThunk(
  'admin-google-place-list-data',
  (props, { dispatch }) => {
    const { postcode } = props;
    // const apiKey = 'AIzaSyCRYGLSutBgs1AYm0dLIvnBr5cU46W8dEA';
    const apiKey = 'AIzaSyC-tV_5ry0eH18J7nsinkLDSDij5yV-hW4';

    return new Promise((resolve, reject) => {
      axios
        .post(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${apiKey}`,
        )
        .then(res => {
          if (res.data.status === 'OK') {
            if (Object.entries(res.data.results).length > 0) {
              resolve(res.data?.results[0]);
            } else {
              resolve([]);
            }
          } else {
            dispatch(
              showMessage({ message: 'Please enter postcode for lookup' }),
            );
            reject();
          }
        })
        .catch(error => {
          dispatch(
            showMessage({ message: 'Please enter postcode for lookup' }),
          );
          reject(error);
        });
    });
  },
);

export const googlePlaceSlice = createSlice({
  name: 'googlePlace',
  initialState,
  reducers: {
    setIsGooglePlaceUpdated: (state, action) => {
      state.isGooglePlaceUpdated = action.payload;
    },
    setGooglePlaceDetail: (state, action) => {
      state.googlePlaceDetail = action.payload;
    },
  },
  extraReducers: {
    [getGooglePlaceListData.pending]: state => {
      state.isGooglePlaceUpdated = false;
      state.googlePlaceLoading = true;
    },
    [getGooglePlaceListData.rejected]: state => {
      state.googlePlaceLoading = false;
      state.isGooglePlaceUpdated = false;
      state.googlePlaceDetail = [];
    },
    [getGooglePlaceListData.fulfilled]: (state, action) => {
      state.googlePlaceLoading = false;
      state.googlePlaceDetail = action.payload;
      state.isGooglePlaceUpdated = true;
    },
  },
});
export const { setIsGooglePlaceUpdated, setGooglePlaceDetail } =
  googlePlaceSlice.actions;
export default googlePlaceSlice.reducer;
