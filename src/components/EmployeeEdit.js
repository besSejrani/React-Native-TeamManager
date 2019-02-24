import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import {
  employeeUpdate,
  employeeSave,
  employeeDelete
} from '../actions/EmployeeAction';
import EmployeeForm from './EmployeeForm';
import Confirm from './common/Confirm';
import { connect } from 'react-redux';

export class EmployeeEdit extends Component {
  state = {
    showModal: false
  };

  componentWillMount = () => {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  };

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  };

  onAccept = () => {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  };

  onDecline = () => {
    this.setState({ showModal: false });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;

    Communications.text(phone, `Tu travailles le ${shift}`);
  };

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>Save changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete this employee ?
        </Confirm>
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
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
