/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList, TouchableOpacity, Alert } from 'react-native';
import ItemCellRoot from './ItemCellRoot';
const DATA = [
	{ title: 'Title1', index: 1, data: ['item1', 'item2'] },
	{ title: 'Title2', index: 2, data: ['item3', 'item4'] },
	{ title: 'Title3', index: 3, data: ['item5', 'item6'] }
];
type Props = {};
export default class App extends Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			id: 0,
			expand: false
		};
	}

	getSectionListItem = (title, index) => {
		if (this.state.expand && this.state.id === index) {
			this.setState({ expand: false });
		} else {
			this.setState({ expand: true });
		}
		this.setState({ id: index });
		console.warn(this.state.id);
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={{ height: '50%' }}>
					<SectionList
						renderItem={({ item, section: { title, index } }) => (
							<View>
								{this.state.expand &&
									this.state.id === index && <Text style={styles.itemStyle}>{item + ' ' + index + title}</Text>}
							</View>
						)}
						renderSectionHeader={({ section: { title, index } }) => (
							<TouchableOpacity onPress={this.getSectionListItem.bind(this, title, index)}>
								<Text style={styles.sectionHeaderStyle}>{title}</Text>
							</TouchableOpacity>
						)}
						sections={DATA}
						keyExtractor={(item, index) => item + index}
					/>
				</View>
				<View style={{ height: '50%' }}>
					<SectionList
						renderItem={({ item, section: { title, index } }) => (
							<ItemCellRoot data={item} sections={title} index={index} />
						)}
						renderSectionHeader={({ item, section: { title, index } }) => <View />}
						sections={DATA}
						keyExtractor={(item, index) => item + index}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
		backgroundColor: '#F5FCFF'
	},
	sectionHeaderStyle: {
		backgroundColor: '#CDDC39',
		fontSize: 20,
		padding: 5,
		color: '#fff'
	},
	itemStyle: {
		fontSize: 15,
		padding: 5,
		color: '#000',
		backgroundColor: '#F5F5F5'
	}
});
