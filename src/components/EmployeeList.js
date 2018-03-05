import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        keyExtractor={(item, index) => item.uid}
        renderItem={({ item }) => <ListItem employee={item} />}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
