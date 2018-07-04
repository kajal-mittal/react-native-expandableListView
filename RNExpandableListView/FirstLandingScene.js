import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class FirstLandingScene extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity
					style={{ backgroundColor: 'blue' }}
					onPress={() => {
						this.props.navigation.navigate('ListViewScene');
					}}
				>
					<Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>ListView</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ backgroundColor: 'blue' }}
					onPress={() => {
						this.props.navigation.navigate('App');
					}}
				>
					<Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>Expand one Item,other closed</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ backgroundColor: 'blue', margin: 30 }}
					onPress={() => {
						this.props.navigation.navigate('ExpandableListScene');
					}}
				>
					<Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>
						Expand & Collapse one by one item
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
