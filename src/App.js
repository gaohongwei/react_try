import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './Students.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStudent, deleteStudent, updateStudent } from './actions/studentActions'

class App extends Component {
    constructor(props) {
        super(props);
        this.addNewStudent = this.addNewStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.editStudentSubmit = this.editStudentSubmit.bind(this);
    }
    componentWillMount() {

    }
    addNewStudent() {
        let new_id = Math.max(...this.props.students.map(function(o) { return o.id })) + 1;
        this.props.addStudent({ id: new_id, name: '', grade: 1, school: '' });
    }

    deleteStudent(id) {
        let r = window.confirm("Do you want to delete this item");
        if (r === true) {
            this.props.deleteStudent(id);

        }
    }
    editStudentSubmit(id, name, grade, school) {
        this.props.updateStudent({ id: id, name: name, grade: grade, school: school });
    }
    render() {
        return (
            <div className="container-fluid">
      <div className="row mt-3"><div className="col-lg-12">
      <div className="card">
      <div className="card-header">
        Student Registry
  </div>
  <div className="card-body">
  <table className="table table-hover">
          <thead className="thead-dark"><tr><th>Name</th><th>Grade</th><th>School</th><th>Edit/Save</th><th>Delete</th></tr></thead>
          <Students deleteStudent={this.deleteStudent} students={this.props.students} editStudentSubmit={this.editStudentSubmit}/>
        </table>
        <button className="btn btn-dark pull-left" onClick={this.addNewStudent}>Add New</button>
      </div></div></div></div></div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        students: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addStudent: addStudent,
        deleteStudent: deleteStudent,
        updateStudent: updateStudent
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);