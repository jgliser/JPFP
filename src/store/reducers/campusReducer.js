import {
  FETCH_CAMPUSES_REQUEST,
  FETCH_CAMPUSES_SUCCESS,
  FETCH_CAMPUSES_FAILURE,
  FETCH_CAMPUS_BY_ID_REQUEST,
  FETCH_CAMPUS_BY_ID_SUCCESS,
  FETCH_CAMPUS_BY_ID_FAILURE,
  ADD_CAMPUS_REQUEST,
  ADD_CAMPUS_SUCCESS,
  ADD_CAMPUS_FAILURE,
  DELETE_CAMPUS_REQUEST,
  DELETE_CAMPUS_SUCCESS,
  DELETE_CAMPUS_FAILURE,
} from '../actions/campusActions';

const initialState = {
  campuses: [],
  campusesById: {},
  loading: false,
  error: null,
};

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUSES_REQUEST:
    case FETCH_CAMPUS_BY_ID_REQUEST:
    case ADD_CAMPUS_REQUEST:
    case DELETE_CAMPUS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CAMPUSES_SUCCESS:
      return {
        ...state,
        campuses: action.payload,
        campusesById: action.payload.reduce((acc, campus) => {
          acc[campus.id] = campus;
          return acc;
        }, {}),
        loading: false,
        error: null,
      };
    case FETCH_CAMPUS_BY_ID_SUCCESS:
      return {
        ...state,
        campusesById: {
          ...state.campusesById,
          [action.payload.id]: action.payload,
        },
        loading: false,
        error: null,
      };
    case ADD_CAMPUS_SUCCESS:
      return {
        ...state,
        campuses: [...state.campuses, action.payload],
        campusesById: {
          ...state.campusesById,
          [action.payload.id]: action.payload,
        },
        loading: false,
        error: null,
      };
    case DELETE_CAMPUS_SUCCESS:
      const { [action.payload]: deletedCampus, ...remainingCampuses } = state.campusesById;
      return {
        ...state,
        campuses: state.campuses.filter((campus) => campus.id !== action.payload),
        campusesById: remainingCampuses,
        loading: false,
        error: null,
      };
    case FETCH_CAMPUSES_FAILURE:
    case FETCH_CAMPUS_BY_ID_FAILURE:
    case ADD_CAMPUS_FAILURE:
    case DELETE_CAMPUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default campusReducer;
