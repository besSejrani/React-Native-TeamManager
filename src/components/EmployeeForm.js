import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import Input from './common/Input';
import CardSection from './common/CardSection';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions/EmployeeAction';

export class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeHolder="Bes"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeHolder="079 964 ** **"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: 'shift', value })
            }
            style={{ flex: 1, marginLeft: 12 }}
          >
            <Picker.Item label="Lundi" value="Lundi" />
            <Picker.Item label="Mardi" value="Mardi" />
            <Picker.Item label="Mercedi" value="Mercredi" />
            <Picker.Item label="Jeudi" value="Jeudi" />
            <Picker.Item label="Vendredi" value="Vendredi" />
            <Picker.Item label="Samedi" value="Samedi" />
            <Picker.Item label="Dimanche" value="Dimanche" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const mapState = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapState,
  { employeeUpdate }
)(EmployeeForm);
