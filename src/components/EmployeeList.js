import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions/EmployeeAction';

class EmploeeList extends Component {
  componentWillMount = () => {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  };

  componentWillReceiveProps = nextProps => {
    this.createDataSource(nextProps);
  };

  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  };

  renderRow = employee => {
    return <ListItem employee={employee} />;
  };

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapState = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(
  mapState,
  { employeesFetch }
)(EmploeeList);