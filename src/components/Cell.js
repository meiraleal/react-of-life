import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  cell: {
    borderWidth: 0.3,
    borderColor: '#333',
    width: `2%`,
    height: `2%`,
  },
  dead: {
    backgroundColor: '#FFF',
  },
  alive: {
    backgroundColor: '#000',
  },
})

class Cell extends React.PureComponent {
  render() {
    return (
      <View style={[styles.cell,
                this.props.status ? styles.alive : styles.dead]}
        />
      )
  }
}

Cell.propTypes = {
  status: PropTypes.bool.isRequired,
  cellSize: PropTypes.number.isRequired,
}

export default Cell
