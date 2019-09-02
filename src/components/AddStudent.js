import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../redux/actions/actions';

class AddStudent extends Component {
  state = { name: '', country: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { name, country } = this.state;

  //   if (name === '' || country === '') return;
  //   else {
  //     this.props.addStudentToList({ name, country });
  //     this.setState({ name: '', country: '' });
  //   }
  // };

    handleSubmit = event => {
    event.preventDefault();
    const { name, country } = this.state;

    if (name === '' || country === '') return;
    else {
   // this.props.addStudentToList({ name, country });	<--- REPLACE THIS
      this.props.addStudent({ name, country });	// 	  <--- FOR A METHOD WITH ACTION
        
      this.setState({ name: '', country: '' });
    }
  };

  render() {
    const { name, country } = this.state;

    return (
      <section>
        <h1>Add New Student</h1>
            
        <form onSubmit={this.handleSubmit}>
            
          <label htmlFor="name">Name </label>
          <br />

          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Student's Name"
            style={{ marginBottom: '10px' }}
          />

          <br />
          <label htmlFor="country">Country</label>
          <br />

          <input
            type="text"
            name="country"
            value={country}
            onChange={this.handleChange}
            placeholder="Student's Name"
            style={{ marginBottom: '10px' }}
          />

          <br />
          <button type="submit">Add Student</button>
            
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStudent: (newStudentObj) => dispatch( actions.addStudent(newStudentObj) )  
 // addStudent: newStudentObj => {
 //   dispatch({ type: 'ADD_NEW_STUDENT', payload: newStudentObj });
 // },
  };
};

export default connect(null, mapDispatchToProps)(AddStudent);