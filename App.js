import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY({x:0,y:200});
     Animated.timing(this.position, {
       toValue:{x:300,y:200},
       // easing:Easing.back(2),
       duration:2000,
     }).start()
  }

  myRoatation() {
    rotate = this.position.x.interpolate({
      inputRange: [0,100],
      outputRange: ["0deg","360deg"]
    })
    return {
      ...this.position.getLayout(),
      transform: [{rotate:rotate}]
    }
  }

  render() {
    return (
      <Animated.View style={this.myRoatation()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red"
  }
});
