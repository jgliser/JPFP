import api from '../../services/api';
import {
  fetchStudentsRequest,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  fetchStudentByIdRequest,
  fetchStudentByIdSuccess,
  fetchStudentByIdFailure,
  addStudentRequest,
  addStudentSuccess,
  addStudentFailure,
  deleteStudentRequest,
  deleteStudentSuccess,
  deleteStudentFailure,
} from '../actions/studentActions';

export const fetchAllStudents = () => async (dispatch) => {
  try {
    dispatch(fetchStudentsRequest());
    const response = await api.get('/students');
    dispatch(fetchStudentsSuccess(response.data));
  } catch (error) {
    dispatch(fetchStudentsFailure(error.message));
  }
};

export const fetchStudent = (studentId) => async (dispatch) => {
  try {
    dispatch(fetchStudentByIdRequest());
    const response = await api.get(`/students/${studentId}`);
    dispatch(fetchStudentByIdSuccess(response.data));
  } catch (error) {
    dispatch(fetchStudentByIdFailure(error.message));
  }
};

export const createStudent = (newStudent) => async (dispatch) => {
  try {
    dispatch(addStudentRequest());
    const response = await api.post('/students', newStudent);
    dispatch(addStudentSuccess(response.data));
  } catch (error) {
    dispatch(addStudentFailure(error.message));
  }
};

export const removeStudent = (studentId) => async (dispatch) => {
  try {
    dispatch(deleteStudentRequest());
    await api.delete(`/students/${studentId}`);
    dispatch(deleteStudentSuccess(studentId));
  } catch (error) {
    dispatch(deleteStudentFailure(error.message));
  }
};
