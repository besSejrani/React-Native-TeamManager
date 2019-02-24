import React, { Component } from 'react';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

import EmployeeForm from './EmployeeForm';
import { employeeCreate } from '../actions/EmployeeAction';
import { connect } from 'react-redux';

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Mardi' });
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapState = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapState,
  { employeeCreate }
)(EmployeeCreate);
