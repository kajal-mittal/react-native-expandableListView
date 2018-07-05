import React, { Component } from 'react';
import { View, Text, ListView, Button } from 'react-native';
const DATA = [
	{ title: 'Title1', index: 0, description: ['qeowwruru ipsum dolor sit amet, consectetur adipiscing elit'] },
	{ title: 'Title2', index: 1, description: ['qeowwruru ipsum dolor sit amet, consectetur adipiscing elit'] },
	{ title: 'Title3', index: 2 },
	{ title: 'Title4', index: 3, description: ['qeowwruru ipsum dolor sit amet, consectetur adipiscing elit'] },
	{ title: 'Title5', index: 4, description: ['ieskjsc ipsum dolor sit amet, consectetur adipiscing elit'] },
	{ title: 'Title6', index: 5 },
	{ title: 'Title7', index: 6 },
	{ title: 'Title8', index: 7 }
];

export default class ListViewScene extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});
	}

	render() {
		return (
			<ListView
				dataSource={this.ds.cloneWithRowsAndSections(DATA)}
				renderSectionHeader={this.renderSectionHeader.bind(this)}
				renderRow={this.renderRow.bind(this)}
			/>
		);
	}
	renderSectionHeader(sectionRowData, sectionID) {
		let val = DATA[sectionID].title;
		return <Text style={{ backgroundColor: 'blue', fontSize: 30, padding: 10 }}>{val}</Text>;
	}

	renderRow(rowData) {
		return <View>{this.renderView(rowData)}</View>;
	}
	renderView = rowData => {
		let row = [];
		for (r of rowData) {
			if (!!r.description) {
				row.push(<Text>{r.description}</Text>);
			} else {
				row.push(<Text>No description</Text>);
			}
		}
		return row;
	};
}
