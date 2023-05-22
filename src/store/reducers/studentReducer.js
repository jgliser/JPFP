import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  FETCH_STUDENT_BY_ID_REQUEST,
  FETCH_STUDENT_BY_ID_SUCCESS,
  FETCH_STUDENT_BY_ID_FAILURE,
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE,
} from '../actions/studentActions';

const initialState = {
  students: [],
  studentsById: {},
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:
    case FETCH_STUDENT_BY_ID_REQUEST:
    case ADD_STUDENT_REQUEST:
    case DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        studentsById: action.payload.reduce((acc, student) => {
          acc[student.id] = student;
          return acc;
        }, {}),
        loading: false,
        error: null,
      };
    case FETCH_STUDENT_BY_ID_SUCCESS:
      return {
        ...state,
        studentsById: {
          ...state.studentsById,
          [action.payload.id]: action.payload,
        },
        loading: false,
        error: null,
      };
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        students: [...state.students, action.payload],
        studentsById: {
          ...state.studentsById,
          [action.payload.id]: action.payload,
        },
        loading: false,
        error: null,
      };
    case DELETE_STUDENT_SUCCESS:
      const { [action.payload]: deletedStudent, ...remainingStudents } = state.studentsById;
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
        studentsById: remainingStudents,
        loading: false,
        error: null,
      };
    case FETCH_STUDENTS_FAILURE:
    case FETCH_STUDENT_BY_ID_FAILURE:
    case ADD_STUDENT_FAILURE:
    case DELETE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
