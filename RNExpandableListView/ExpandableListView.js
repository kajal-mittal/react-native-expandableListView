import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native'; //Step 1

export default class ExpandableListView extends Component {
	constructor(props) {
		super(props);
		this.icons = {
			//Step 2
			up: require('./images/disclosure.png'),
			down: require('./images/disclosure.png')
		};

		this.state = {
			//Step 3
			title: props.title,
			expanded: false
		};
	}

	toggle() {
		this.setState({
			expanded: !this.state.expanded //Step 2
		});
	}

	render() {
		//Step 5
		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{this.state.title}</Text>
					<TouchableHighlight style={styles.button} onPress={this.toggle.bind(this)} underlayColor="#f1f1f1">
						<Image style={styles.buttonImage} source={this.icons.up} />
					</TouchableHighlight>
				</View>
				{this.state.expanded && <View style={styles.body}>{this.props.children}</View>}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		margin: 10,
		overflow: 'hidden'
	},
	titleContainer: {
		flexDirection: 'row'
	},
	title: {
		flex: 1,
		padding: 10,
		color: '#2a2f43',
		fontWeight: 'bold'
	},
	button: {},
	buttonImage: {
		width: 30,
		height: 25,
		resizeMode: 'center',
		transform: [{ rotate: '180deg' }]
	},
	body: {
		padding: 10,
		paddingTop: 0
	}
});
