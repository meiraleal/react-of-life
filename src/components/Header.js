import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const status = ["Stopped", "Initialized", "Running", "Finished"]

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  h2: {
    fontSize: 20,
    color: '#FFF',
  },
})

const Header = props => (
  <View className="Header">
    <Text style={styles.h1}>Game Of Life</Text>
    <Text style={styles.h2}>Generation: {props.generation}</Text>
    <Text style={styles.h2}>Status: {status[props.status]}</Text>
  </View>
)

Header.propTypes = {
  generation: PropTypes.number.isRequired,
}

export default Header
