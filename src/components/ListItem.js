import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CardSection from './common/CardSection';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee });
  };

  render() {
    const { name } = this.props.employee;
    const { titleContent } = styles;

    return (
      <TouchableOpacity onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={titleContent}>{name}</Text>
          </CardSection>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleContent: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
