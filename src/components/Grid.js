import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Cell from './Cell'


const generateGrid = (grid) => {
  const cellSize = grid.length > 0 ? 100 / grid.length : 2
  return grid.map((row, rowIndex) =>
    row.map((colValue, colIndex) => {
      const key = `${rowIndex}-${colIndex}`
      // transform the value of the col (0 or 1) to boolean
      return <Cell key={key} cellSize={cellSize} status={!!colValue} />
    }))
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    maxWidth: 300,
    maxHeight: 300,
  },
})

const Grid = props => (
  <View className="Grid" style={styles.grid}>
    {generateGrid(props.grid)}
  </View>
)

Grid.propTypes = {
  grid: PropTypes.array.isRequired,
}

export default Grid
