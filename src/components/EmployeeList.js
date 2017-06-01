import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { employeesFetch, logoutUser } from '../actions';
import ListItem from './ListItem';
import { CardSection, Button } from './common';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component
        //will be rendered whith
        //this.props is still the old set of props
        this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
            const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <View>
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    <CardSection>
      <Button
        onPress={this.props.logoutUser}
      >
        Logout
      </Button>
    </CardSection>
    </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // {shift: 'Monday',name: 'S', id: '45'}
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch, logoutUser })(EmployeeList);
