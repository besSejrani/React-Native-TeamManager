import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './common/Card';
import Input from './common/Input';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Spinner from './common/Spinner';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

export class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  };

  renderError = () => {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </View>
      );
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner color="#007aff" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeHolder="email@gmail.com"
            onChangeText={text => this.onEmailChange(text)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeHolder="password"
            label="Password"
            onChangeText={text => this.onPasswordChange(text)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapState = state => {
  const { email, password, error, loading } = state.auth;

  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(
  mapState,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
