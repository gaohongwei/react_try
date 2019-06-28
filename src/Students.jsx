import React, { Component } from 'react';
import Student from './Student.jsx';

const Students = (props) => {
    const trItem = () => {
        return props.students.map((item, index) => <Student key={index} student={item} index={index} editStudentSubmit={props.editStudentSubmit} deleteStudent={props.deleteStudent}/>)      
    }
    // do not use render()
    return (
        <tbody>{trItem()}</tbody>
    );
}

export default Students;