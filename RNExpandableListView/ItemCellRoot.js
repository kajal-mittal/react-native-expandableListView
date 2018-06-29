import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ItemCellRoot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	render() {
		return this.renderCategoryCell(this.props.expanded);
	}
	renderCategoryCell(expand) {
		const { data, title, id, index } = this.props;
		return (
			<TouchableOpacity onPress={() => {}}>{index === id && this.props.value && <Text>{data}</Text>}</TouchableOpacity>
		);
	}
}

export default ItemCellRoot;
