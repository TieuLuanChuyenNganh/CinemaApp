
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        More
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#255005',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }
})
const mapStateToProps = (state) => {
  
  return {
     
        
  }
}

// export default connect(mapStateToProps)(MoreScreen)
export default MoreScreen;