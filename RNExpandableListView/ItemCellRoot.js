import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ItemCellRoot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false,
			id: 0
		};
	}

	getSectionListItem = (title, index) => {
		if (this.state.expand && this.state.id === index) {
			this.setState({ expand: false });
		} else {
			this.setState({ expand: true });
		}
		this.setState({ id: index });
		console.warn(index);
	};
	render() {
		return this.renderCell();
	}
	renderCell(expand) {
		const { data, sections, index } = this.props;
		return (
			<View>
				<TouchableOpacity onPress={this.getSectionListItem.bind(this, sections, index)}>
					<Text style={styles.sectionHeaderStyle}>{sections}</Text>
				</TouchableOpacity>
				<TouchableOpacity>{this.state.expand && <Text>{data}</Text>}</TouchableOpacity>
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
