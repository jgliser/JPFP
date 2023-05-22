import api from '../../services/api';

// Action Types
export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';
export const FETCH_STUDENT_BY_ID_REQUEST = 'FETCH_STUDENT_BY_ID_REQUEST';
export const FETCH_STUDENT_BY_ID_SUCCESS = 'FETCH_STUDENT_BY_ID_SUCCESS';
export const FETCH_STUDENT_BY_ID_FAILURE = 'FETCH_STUDENT_BY_ID_FAILURE';
export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';
export const DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';

// Action Creators
export const fetchStudentsRequest = () => ({
  type: FETCH_STUDENTS_REQUEST,
});

export const fetchStudentsSuccess = (students) => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: students,
});

export const fetchStudentsFailure = (error) => ({
  type: FETCH_STUDENTS_FAILURE,
  payload: error,
});

export const fetchStudentByIdRequest = () => ({
  type: FETCH_STUDENT_BY_ID_REQUEST,
});

export const fetchStudentByIdSuccess = (student) => ({
  type: FETCH_STUDENT_BY_ID_SUCCESS,
  payload: student,
});

export const fetchStudentByIdFailure = (error) => ({
  type: FETCH_STUDENT_BY_ID_FAILURE,
  payload: error,
});

export const addStudentRequest = () => ({
  type: ADD_STUDENT_REQUEST,
});

export const addStudentSuccess = (student) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: student,
});

export const addStudentFailure = (error) => ({
  type: ADD_STUDENT_FAILURE,
  payload: error,
});

export const deleteStudentRequest = () => ({
  type: DELETE_STUDENT_REQUEST,
});

export const deleteStudentSuccess = (studentId) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: studentId,
});

export const deleteStudentFailure = (error) => ({
  type: DELETE_STUDENT_FAILURE,
  payload: error,
});

// Thunks
export const fetchStudents = () => async (dispatch) => {
  try {
    dispatch(fetchStudentsRequest());
    const response = await api.get('/students');
    dispatch(fetchStudentsSuccess(response.data));
  } catch (error) {
    dispatch(fetchStudentsFailure(error.message));
  }
};

export const fetchStudentById = (studentId) => async (dispatch) => {
  try {
    dispatch(fetchStudentByIdRequest());
    const response = await api.get(`/students/${studentId}`);
    dispatch(fetchStudentByIdSuccess(response.data));
  } catch (error) {
    dispatch(fetchStudentByIdFailure(error.message));
  }
};

export const addStudent = (newStudent) => async (dispatch) => {
  try {
    dispatch(addStudentRequest());
    const response = await api.post('/students', newStudent);
    dispatch(addStudentSuccess(response.data));
  } catch (error) {
    dispatch(addStudentFailure(error.message));
  }
};

export const deleteStudent = (studentId) => async (dispatch) => {
  try {
    dispatch(deleteStudentRequest());
    await api.delete(`/students/${studentId}`);
    dispatch(deleteStudentSuccess(studentId));
  } catch (error) {
    dispatch(deleteStudentFailure(error.message));
  }
};
