import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampusById } from '../store/actions/campusActions';

const CampusDetail = ({ match }) => {
  const { campusId } = match.params;
  const dispatch = useDispatch();
  const campus = useSelector((state) => state.campuses.campusesById[campusId]);

  useEffect(() => {
    dispatch(fetchCampusById(campusId));
  }, [dispatch, campusId]);

  if (!campus) {
    return <div>Loading campus details...</div>;
  }

  return (
    <div>
      <h2>{campus.name}</h2>
      <img src={campus.imageUrl} alt={campus.name} />
      <p>Address: {campus.address}</p>
      <p>Description: {campus.description}</p>
      <h3>Students:</h3>
      {campus.Students.length === 0 ? (
        <p>No students enrolled in this campus.</p>
      ) : (
        <ul>
          {campus.Students.map((student) => (
            <li key={student.id}>{`${student.firstName} ${student.lastName}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampusDetail;
