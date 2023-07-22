import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import Home from './src/pages/home.page'

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   onPress = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.button} onPress={this.onPress}>
//           <Text>Click me</Text>
//         </TouchableOpacity>
//         <View>
//           <Text>You clicked {this.state.count} times</Text>
//           <Text>You clicked {this.state.count} times</Text>
//         </View>
//       </View>
//     );
//   }
// }

export default class App extends React.Component {

  constructor(props : any) {
    super(props);
    //new DatabaseInit
    console.log("initialize database")
  }


  render() {
    return (
      <Home />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

// export default App;