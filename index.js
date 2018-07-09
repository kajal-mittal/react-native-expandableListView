import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstLandingScene from './src/scenes/FirstLandingScene';
import App from './src/scenes/App';
import ExpandableListScene from './src/scenes/ExpandableListScene';
import ListViewScene from './src/scenes/ListViewScene';

const AppFlow = StackNavigator({
	FirstLandingScene: { screen: FirstLandingScene },
	App: { screen: App },
	ExpandableListScene: { screen: ExpandableListScene },
	ListViewScene: { screen: ListViewScene }
});
export default class FirstScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppFlow />
			</View>
		);
	}
}

AppRegistry.registerComponent('RNExpandableListView', () => FirstScreen);
