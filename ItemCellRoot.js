import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ItemCellRoot extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return this.renderCell();
	}
	renderCell(expand) {
		const { data } = this.props;
		console.warn(data.description);

		return (
			<View>
				<Text style={styles.sectionHeaderStyle}>{data}</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	sectionHeaderStyle: {
		backgroundColor: '#CDDC39',
		fontSize: 20,
		padding: 5,
		color: '#fff'
	}
});

export default ItemCellRoot;
