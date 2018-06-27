/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList, TouchableOpacity, Alert } from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			showItems: false
		};
	}
	_renderItem() {
		console.warn('_renderItem' + this.state.showItems);
		<View>
			{this.state.showItems && (
				<Text
					key={index}
					style={{
						fontSize: 15,
						padding: 5,
						color: '#000',
						backgroundColor: '#F5F5F5'
					}}
				>
					{'item'}
				</Text>
			)}
		</View>;
	}
	getSectionListItem = title => {
		this.setState({ showItems: true });
		Alert.alert(title);
	};

	render() {
		return (
			<View style={styles.container}>
				<SectionList
					renderItem={({ item }) => (
						<View>
							{this.state.showItems && (
								<Text
									style={{
										fontSize: 15,
										padding: 5,
										color: '#000',
										backgroundColor: '#F5F5F5'
									}}
								>
									{'item'}
								</Text>
							)}
						</View>
					)}
					renderSectionHeader={({ section: { title } }) => (
						<TouchableOpacity onPress={this.getSectionListItem.bind(this, title)}>
							<Text
								style={{
									backgroundColor: '#CDDC39',
									fontSize: 20,
									padding: 5,
									color: '#fff'
								}}
							>
								{title}
							</Text>
						</TouchableOpacity>
					)}
					sections={[
						{ title: 'Title1', data: ['item1', 'item2'] },
						{ title: 'Title2', data: ['item3', 'item4'] },
						{ title: 'Title3', data: ['item5', 'item6'] }
					]}
					keyExtractor={(item, index) => item + index}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 100,
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
