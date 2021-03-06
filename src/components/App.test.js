import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'
import Grid from './Grid'
import Header from './Header'

const rows = 50
const cols = 50
const grid = [...Array(rows)].map(() => Array(50).fill(0))
const generation = 0

describe('<App />', () => {
  it('Print out the cells of the grid, either simply as outputted numbers, or (bonus points) rendered to an HTML document.', () => {
    const tree = renderer
      .create(<App {...{
rows, cols, generation, grid,
}}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render Header component', () => {
    const tree = renderer
      .create(<Header generation={10} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render Grid component', () => {
    const tree = renderer
      .create(<Grid grid={grid} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe('<Grid />', () => {
  it('Initialize a 50x50 grid of cells, all considered dead, to begin with', () => {
    // let grid = Life.initializeGrid(rows, cols).grid;
    // const wrapper = mount(<Grid {...{rows, cols, grid}}/>);
    // expect(wrapper.find(Cell)).toHaveLength(50*50);
    // expect(wrapper.find(".Dead")).toHaveLength(50*50);
  })
})
