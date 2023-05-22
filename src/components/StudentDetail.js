import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentById } from '../store/actions/studentActions';

const StudentDetail = ({ match }) => {
  const dispatch = useDispatch();
  const studentId = match.params.studentId;
  const student = useSelector((state) => state.students.studentsById[studentId]);

  useEffect(() => {
    dispatch(fetchStudentById(studentId));
  }, [dispatch, studentId]);

  if (!student) {
    return <div>Loading student details...</div>;
  }

  return (
    <div>
      <h2>{`${student.firstName} ${student.lastName}`}</h2>
      <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`} />
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      {student.Campus ? (
        <p>Campus: {student.Campus.name}</p>
      ) : (
        <p>Not enrolled in any campus</p>
      )}
    </div>
  );
};

export default StudentDetail;
