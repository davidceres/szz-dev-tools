import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'ink';

/// This is my command description
const HelloPerson = ({inputArgs}) => <Text color="green">Hello, {inputArgs} !!!</Text>;

HelloPerson.propTypes = {
	/// This is "name" option description
	name: PropTypes.string
};

export default HelloPerson;
