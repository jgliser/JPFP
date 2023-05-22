import api from '../../services/api';
import {
  fetchCampusesRequest,
  fetchCampusesSuccess,
  fetchCampusesFailure,
  fetchCampusByIdRequest,
  fetchCampusByIdSuccess,
  fetchCampusByIdFailure,
  addCampusRequest,
  addCampusSuccess,
  addCampusFailure,
  deleteCampusRequest,
  deleteCampusSuccess,
  deleteCampusFailure,
} from '../actions/campusActions';

export const fetchAllCampuses = () => async (dispatch) => {
  try {
    dispatch(fetchCampusesRequest());
    const response = await api.get('/campuses');
    dispatch(fetchCampusesSuccess(response.data));
  } catch (error) {
    dispatch(fetchCampusesFailure(error.message));
  }
};

export const fetchCampus = (campusId) => async (dispatch) => {
  try {
    dispatch(fetchCampusByIdRequest());
    const response = await api.get(`/campuses/${campusId}`);
    dispatch(fetchCampusByIdSuccess(response.data));
  } catch (error) {
    dispatch(fetchCampusByIdFailure(error.message));
  }
};

export const createCampus = (newCampus) => async (dispatch) => {
  try {
    dispatch(addCampusRequest());
    const response = await api.post('/campuses', newCampus);
    dispatch(addCampusSuccess(response.data));
  } catch (error) {
    dispatch(addCampusFailure(error.message));
  }
};

export const removeCampus = (campusId) => async (dispatch) => {
  try {
    dispatch(deleteCampusRequest());
    await api.delete(`/campuses/${campusId}`);
    dispatch(deleteCampusSuccess(campusId));
  } catch (error) {
    dispatch(deleteCampusFailure(error.message));
  }
};
