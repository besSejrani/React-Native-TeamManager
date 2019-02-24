import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            titleStyle={styles.titleHeader}
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeeList"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            component={EmployeeList}
            title="Employees"
            titleStyle={styles.titleHeader}
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            titleStyle={styles.titleHeader}
          />

          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title=" Edit Employee"
            titleStyle={styles.titleHeader}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  titleHeader: {
    textAlign: 'center',
    flex: 1,
    fontWeight: '400',
    fontSize: 18
  }
};

export default RouterComponent;
