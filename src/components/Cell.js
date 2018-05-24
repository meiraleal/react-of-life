import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  cell: {
    borderWidth: 0.3,
    borderColor: '#333',
  },
  dead: {
    backgroundColor: '#FFF',
  },
  alive: {
    backgroundColor: '#000',
  },
})

// Calculate the size of the cell based in the number of cols and rows
const cellSizeStyle = size => StyleSheet.create({
  cell: {
    width: `${size}%`,
    height: `${size}%`,
  },
})


const Cell = props => (
  <View style={[cellSizeStyle(props.cellSize).cell,
                styles.cell,
        props.status ? styles.alive : styles.dead]}
  />
)

Cell.propTypes = {
  status: PropTypes.bool.isRequired,
  cellSize: PropTypes.number.isRequired,
}

export default Cell
