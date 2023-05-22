import api from '../../services/api';

// Action Types
export const FETCH_CAMPUSES_REQUEST = 'FETCH_CAMPUSES_REQUEST';
export const FETCH_CAMPUSES_SUCCESS = 'FETCH_CAMPUSES_SUCCESS';
export const FETCH_CAMPUSES_FAILURE = 'FETCH_CAMPUSES_FAILURE';
export const FETCH_CAMPUS_BY_ID_REQUEST = 'FETCH_CAMPUS_BY_ID_REQUEST';
export const FETCH_CAMPUS_BY_ID_SUCCESS = 'FETCH_CAMPUS_BY_ID_SUCCESS';
export const FETCH_CAMPUS_BY_ID_FAILURE = 'FETCH_CAMPUS_BY_ID_FAILURE';
export const ADD_CAMPUS_REQUEST = 'ADD_CAMPUS_REQUEST';
export const ADD_CAMPUS_SUCCESS = 'ADD_CAMPUS_SUCCESS';
export const ADD_CAMPUS_FAILURE = 'ADD_CAMPUS_FAILURE';
export const DELETE_CAMPUS_REQUEST = 'DELETE_CAMPUS_REQUEST';
export const DELETE_CAMPUS_SUCCESS = 'DELETE_CAMPUS_SUCCESS';
export const DELETE_CAMPUS_FAILURE = 'DELETE_CAMPUS_FAILURE';

// Action Creators
export const fetchCampusesRequest = () => ({
  type: FETCH_CAMPUSES_REQUEST,
});

export const fetchCampusesSuccess = (campuses) => ({
  type: FETCH_CAMPUSES_SUCCESS,
  payload: campuses,
});

export const fetchCampusesFailure = (error) => ({
  type: FETCH_CAMPUSES_FAILURE,
  payload: error,
});

export const fetchCampusByIdRequest = () => ({
  type: FETCH_CAMPUS_BY_ID_REQUEST,
});

export const fetchCampusByIdSuccess = (campus) => ({
  type: FETCH_CAMPUS_BY_ID_SUCCESS,
  payload: campus,
});

export const fetchCampusByIdFailure = (error) => ({
  type: FETCH_CAMPUS_BY_ID_FAILURE,
  payload: error,
});

export const addCampusRequest = () => ({
  type: ADD_CAMPUS_REQUEST,
});

export const addCampusSuccess = (campus) => ({
  type: ADD_CAMPUS_SUCCESS,
  payload: campus,
});

export const addCampusFailure = (error) => ({
  type: ADD_CAMPUS_FAILURE,
  payload: error,
});

export const deleteCampusRequest = () => ({
  type: DELETE_CAMPUS_REQUEST,
});

export const deleteCampusSuccess = (campusId) => ({
  type: DELETE_CAMPUS_SUCCESS,
  payload: campusId,
});

export const deleteCampusFailure = (error) => ({
  type: DELETE_CAMPUS_FAILURE,
  payload: error,
});

// Thunks
export const fetchCampuses = () => async (dispatch) => {
  try {
    dispatch(fetchCampusesRequest());
    const response = await api.get('/campuses');
    dispatch(fetchCampusesSuccess(response.data));
  } catch (error) {
    dispatch(fetchCampusesFailure(error.message));
  }
};

export const fetchCampusById = (campusId) => async (dispatch) => {
  try {
    dispatch(fetchCampusByIdRequest());
    const response = await api.get(`/campuses/${campusId}`);
    dispatch(fetchCampusByIdSuccess(response.data));
  } catch (error) {
    dispatch(fetchCampusByIdFailure(error.message));
  }
};

export const addCampus = (newCampus) => async (dispatch) => {
  try {
    dispatch(addCampusRequest());
    const response = await api.post('/campuses', newCampus);
    dispatch(addCampusSuccess(response.data));
  } catch (error) {
    dispatch(addCampusFailure(error.message));
  }
};

export const deleteCampus = (campusId) => async (dispatch) => {
  try {
    dispatch(deleteCampusRequest());
    await api.delete(`/campuses/${campusId}`);
    dispatch(deleteCampusSuccess(campusId));
  } catch (error) {
    dispatch(deleteCampusFailure(error.message));
  }
};
