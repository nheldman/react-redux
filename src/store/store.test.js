import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('Should handle creating courses', () => {
    // Arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    // Act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // Assert
    const actual = store.getState().courses[0];
    
    expect(actual).toEqual(course);
  });
});
