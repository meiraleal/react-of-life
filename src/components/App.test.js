import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import Grid from './Grid';
import Header from './Header';
import Cell from './Cell';
import * as Life from './Life';

configure({ adapter: new Adapter() });

const rows = 50;
const cols = 50;
const seed = [[0,0], [0, 1], [1, 0], [1, 3], [2, 1], [2, 2]]; //initialState


describe('<App />', () => {

  it('Be able to take in the following cells [x,y] to set as live, in order to initialize the game: [[0,0], [0, 1], [1, 0], [1, 3], [2, 1], [2, 2]]', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App {...{rows, cols, seed}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Print out the cells of the grid, either simply as outputted numbers, or (bonus points) rendered to an HTML document.', () => {
    const tree = renderer
          .create(<App {...{rows, cols, seed}}/>)
          .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Header component', () => {
    const wrapper = shallow(<App {...{rows, cols, seed}}/>);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render Grid component', () => {
    const wrapper = shallow(<App {...{rows, cols, seed}}/>);
    expect(wrapper.find(Grid)).toHaveLength(1);
  });
});
describe('<Grid />', () => {
  it('Initialize a 50x50 grid of cells, all considered dead, to begin with', () => {
    let grid = Life.initializeGrid(rows, cols).grid;
    const wrapper = mount(<Grid {...{rows, cols, grid}}/>);
    expect(wrapper.find(Cell)).toHaveLength(50*50);
    expect(wrapper.find(".Dead")).toHaveLength(50*50);
  });
});
