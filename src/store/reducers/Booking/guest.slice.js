import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from '../common.slice';
const initialState = {
  guestList: [],
  guestLoading: false,
  isGuestUpdated: false,
  guestDetail: {},
  previousGuestDetail: {},
  isGuestImported: false,
};

export const getGuestListData = createAsyncThunk(
  'admin/get-guest-list',
  ({ booking_id }, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`api/booking/${booking_id}/guest`)
        .then(res => {
          if (res.data.err === 0) {
            if (res.data.data.length > 0) {
              resolve(res.data.data);
            } else {
              resolve([]);
            }
          } else {
            dispatch(showMessage({ message: res.data.msg }));
            reject();
          }
        })
        .catch(error => {
          dispatch(showMessage({ message: error.response.data.msg }));
          reject(error);
        });
    });
  },
);
export const getGuestData = createAsyncThunk(
  'admin/get-guest-single',
  ({ booking_id, guest_id }, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`api/booking/${booking_id}/guest/${guest_id}`)
        .then(res => {
          if (res.data.err === 0) {
            if (Object.keys(res.data.data).length > 0) {
              resolve(res.data.data);
            } else {
              resolve([]);
            }
          } else {
            dispatch(showMessage({ message: res.data.msg }));
            reject();
          }
        })
        .catch(error => {
          dispatch(showMessage({ message: error.response.data.msg }));
          reject(error);
        });
    });
  },
);
export const getPreviousGuestData = createAsyncThunk(
  'admin/get-previous_guest',
  ({ booking_id }, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`api/booking/${booking_id}/previous_guests`)
        .then(res => {
          if (res.data.err === 0) {
            if (Object.keys(res.data.data).length > 0) {
              resolve(res.data.data);
            } else {
              resolve([]);
            }
          } else {
            dispatch(showMessage({ message: res.data.msg }));
            reject();
          }
        })
        .catch(error => {
          dispatch(showMessage({ message: error.response.data.msg }));
          reject(error);
        });
    });
  },
);
export const createUpdateBookingGuest = createAsyncThunk(
  'admin/create-update-booking-guest',
  ({ booking_id, data }, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`api/booking/${booking_id}/guest`, data)
        .then(res => {
          if (res.data.err === 0) {
            dispatch(
              showMessage({ message: res.data.msg, varient: 'success' }),
            );
            resolve(res.data);
          } else {
            dispatch(showMessage({ message: res.data.msg }));
            reject();
          }
        })
        .catch(error => {
          dispatch(showMessage({ message: error.response.data.msg }));
          reject(error);
        });
    });
  },
);
export const importGuest = createAsyncThunk(
  'admin/import-guest',
  ({ booking_id, data }, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`api/booking/${booking_id}/guest/import`, data)
        .then(res => {
          if (res.data.err === 0) {
            dispatch(
              showMessage({ message: res.data.msg, varient: 'success' }),
            );
            resolve(res.data);
          } else {
            dispatch(showMessage({ message: res.data.msg }));
            reject();
          }
        })
        .catch(error => {
          dispatch(showMessage({ message: error.response.data.msg }));
          reject(error);
        });
    });
  },
);
export const importPreviousGuest = createAsyncThunk(
  'admin/import-previous-guest',
  ({ booking_id, data }, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`api/booking/${booking_id}/guest/import_previous`, data)
        .then(res => {
          if (res.data.err === 0) {
            dispatch(
              showMessage({ message: res.data.msg, varient: 'success' }),
            );
            resolve(res.data);
          } else {
            dispatch(showMessage({ message: res.data.msg }));
            reject();
          }
        })
        .catch(error => {
          dispatch(showMessage({ message: error.response.data.msg }));
          reject(error);
        });
    });
  },
);
export const deleteGuest = createAsyncThunk(
  'admin/delete-guest',
  (props, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const { booking_id, guest_id } = props;
      axios
        .delete(`api/booking/${booking_id}/guest/${guest_id}`)
        .then(res => {
          if (res.data.err === 0) {
            dispatch(
              showMessage({ message: res.data.msg, varient: 'success' }),
            );
            resolve(res.data.data);
          } else {
            dispatch(showMessage({ message: res.data.msg }));
            reject();
          }
        })
        .catch(error => {
          dispatch(showMessage({ message: error.response.data.msg }));
          reject(error);
        });
    });
  },
);

export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    setIsGuestUpdated: (state, action) => {
      state.isGuestUpdated = action.payload;
    },
    setGuestDetail: (state, action) => {
      state.guestDetail = action.payload;
    },
  },
  extraReducers: {
    [getGuestListData.pending]: state => {
      state.guestLoading = true;
    },
    [getGuestListData.rejected]: state => {
      state.guestList = [];
      state.guestLoading = false;
    },
    [getGuestListData.fulfilled]: (state, action) => {
      state.guestList = action.payload;
      state.guestLoading = false;
    },
    [getGuestData.pending]: state => {
      state.guestLoading = true;
      state.guestDetail = {};
    },
    [getGuestData.rejected]: state => {
      state.guestLoading = false;
      state.guestDetail = {};
    },
    [getGuestData.fulfilled]: (state, action) => {
      state.guestLoading = false;
      state.guestDetail = action.payload;
    },
    [getPreviousGuestData.pending]: state => {
      state.guestLoading = true;
      state.previousGuestDetail = {};
    },
    [getPreviousGuestData.rejected]: state => {
      state.guestLoading = false;
      state.previousGuestDetail = {};
    },
    [getPreviousGuestData.fulfilled]: (state, action) => {
      state.guestLoading = false;
      state.previousGuestDetail = action.payload;
    },
    [createUpdateBookingGuest.pending]: state => {
      state.isGuestUpdated = false;
      state.guestLoading = true;
    },
    [createUpdateBookingGuest.rejected]: state => {
      state.isGuestUpdated = false;
      state.guestLoading = false;
    },
    [createUpdateBookingGuest.fulfilled]: (state, action) => {
      state.isGuestUpdated = true;
      state.guestLoading = false;
    },
    [importGuest.pending]: state => {
      state.isGuestImported = false;
      state.guestLoading = true;
    },
    [importGuest.rejected]: state => {
      state.isGuestImported = false;
      state.guestLoading = false;
    },
    [importGuest.fulfilled]: (state, action) => {
      state.isGuestImported = true;
      state.guestLoading = false;
    },
    [importPreviousGuest.pending]: state => {
      state.isGuestImported = false;
      state.guestLoading = true;
    },
    [importPreviousGuest.rejected]: state => {
      state.isGuestImported = false;
      state.guestLoading = false;
    },
    [importPreviousGuest.fulfilled]: (state, action) => {
      state.isGuestImported = true;
      state.guestLoading = false;
    },
    [deleteGuest.pending]: state => {
      state.isGuestUpdated = false;
      state.guestLoading = true;
    },
    [deleteGuest.rejected]: state => {
      state.isGuestUpdated = false;
      state.guestLoading = false;
    },
    [deleteGuest.fulfilled]: (state, action) => {
      state.isGuestUpdated = true;
      state.guestLoading = false;
    },
  },
});

export const { setIsGuestUpdated, setGuestDetail } = guestSlice.actions;

export default guestSlice.reducer;
