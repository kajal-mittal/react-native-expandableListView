import React, { Component } from 'react';
import { Text, TouchableOpacity, Alert, View, Button, Picker } from 'react-native';

export default class FirstLandingScene extends Component {
	constructor() {
		super();

		this.state = {
			PickerValueHolder: ''
		};
	}

	GetSelectedPickerItem = () => {
		Alert.alert(this.state.PickerValueHolder);
	};

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{/* <TouchableOpacity
					style={{ backgroundColor: 'blue' }}
					onPress={() => {
						this.props.navigation.navigate('ListViewScene');
					}}
				>
					<Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>ListView</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{ backgroundColor: 'blue', margin: 30 }}
					onPress={() => {
						this.props.navigation.navigate('App');
					}}
				>
					<Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>Section List</Text>
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
				</TouchableOpacity> */}
				<Picker
					selectedValue={this.state.PickerValueHolder}
					onValueChange={(itemValue, itemIndex) => this.setState({ PickerValueHolder: itemValue })}
				>
					<Picker.Item label="React Native" value="React Native" />
					<Picker.Item label="Java" value="Java" />
					<Picker.Item label="Html" value="Html" />
					<Picker.Item label="Php" value="Php" />
					<Picker.Item label="C++" value="C++" />
					<Picker.Item label="JavaScript" value="JavaScript" />
				</Picker>

				<Button title="Get Selected Picker Value" onPress={this.GetSelectedPickerItem} />
			</View>
		);
	}
}
