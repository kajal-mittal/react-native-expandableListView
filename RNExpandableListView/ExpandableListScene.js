import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ExpandableListView from './ExpandableListView';
const DATA = [
	{ title: 'Title1', index: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
	{ title: 'Title2', index: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
	{ title: 'Title3', index: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
	{ title: 'Title4', index: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
	{ title: 'Title5', index: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
];
export default class ExpandableListScene extends Component {
	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<View style={{ flex: 1, backgroundColor: 'yellow' }}>
					<Text>kajal</Text>
					{this.renderList()}
				</View>
			</ScrollView>
		);
	}
	renderList = () => {
		let list = [];

		for (let i = 0; i < DATA.length; i++) {
			list.push(
				<ExpandableListView title={DATA[i].title}>
					<Text>{DATA[i].description}</Text>
				</ExpandableListView>
			);
		}
		return list;
	};
}
