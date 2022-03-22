import React from 'react';
import { connect } from 'react-redux';
import { createBike } from '../store/bikeReducer';
import { createManufacturer } from '../store/manufacturerReducer';

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      style: '',
      material: '',
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
      style: this.state.style,
      material: this.state.material,
    };
    const newManufacturer = {
      manufacturer: this.state.manufacturer,
    };
    //TODO: connect newBike to NewManufacturer
    //maybe with Sequelize.findOrCreate()
    this.props.createBike(newBike);
    this.props.createManufacturer(newManufacturer);

    this.setState({ name: '', style: '', material: '', manufacturer: '' });
  }

  render() {
    const { name, style, material, manufacturer } = this.state;
    return (
      <form
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
        onSubmit={this.submitForm}
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
            value={style}
            onChange={(ev) => this.handleChange(ev)}
          ></input>
          <input
            name="material"
            placeholder="Bike Material"
            value={material}
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
        <button
          style={{ width: '30%' }}
          disabled={!name || !style || !material || !manufacturer}
        >
          create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBike: async (newBike) => {
      await dispatch(createBike(newBike));
    },
    createManufacturer: async (newManufacturer) => {
      await dispatch(createManufacturer(newManufacturer));
    },
  };
};

export default connect(null, mapDispatchToProps)(Create);
