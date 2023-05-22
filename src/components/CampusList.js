import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from '../store/actions/campusActions';

const CampusList = () => {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses.campuses);

  useEffect(() => {
    dispatch(fetchCampuses());
  }, [dispatch]);

  if (campuses.length === 0) {
    return <div>No campuses available.</div>;
  }

  return (
    <div>
      <h2>Campuses</h2>
      <ul>
        {campuses.map((campus) => (
          <li key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampusList;
