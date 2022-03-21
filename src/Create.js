import React from 'react';
import { connect } from 'react-redux';
import { createBike } from '../store/bikeReducer';

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      manufacturer: '',
    };
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  submitForm(ev) {
    ev.preventDefault();
    const newBike = {
      name: this.state.name,
      manufacturer: this.state.manufacturer,
    };
    this.props.create(newBike);
    this.setState({ name: '', manufacturer: '' });
  }

  render() {
    const { name, manufacturer } = this.state;
    return (
      <form
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
        onSubmit={this.submitForm} //this is bound in the constructor
      >
        <div>
          <input
            name="name"
            placeholder="Model Name"
            value={name}
            onChange={(ev) => this.handleChange(ev)}
          ></input>
          <input
            name="style"
            placeholder="Bike Style"
            value={name}
            onChange={(ev) => this.handleChange(ev)}
          ></input>
          <input
            name="material"
            placeholder="Bike Material"
            value={name}
            onChange={(ev) => this.handleChange(ev)}
          ></input>
        </div>
        <div>
          <input
            name="manufacturer"
            placeholder="Manufacturer"
            value={manufacturer}
            onChange={(ev) => this.handleChange(ev)}
            style={{ margin: '1rem 0 1rem 0' }}
          ></input>
        </div>
        <button style={{ width: '30%' }} disabled={!name || !manufacturer}>
          create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: async (newBike) => {
      await dispatch(createBike(newBike));
    },
  };
};

export default connect(null, mapDispatchToProps)(Create);
