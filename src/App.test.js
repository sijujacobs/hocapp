import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';


import { shallow, mount, render } from 'enzyme';



describe('<App />', () => {
  it('has 1 child', () => {
    const wrapper = shallow(<Foo />);
    //const tree = renderer.create(<App />).toJSON();
    //expect(tree.children.length).toBe(1);
  });
});
