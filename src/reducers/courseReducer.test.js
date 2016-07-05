import expect from 'expect';
import * as actions from '../actions/courseActions';
import courseReducer from './courseReducer';

describe('Course Reducer', () => {
  it ('should should add course when passed CREATE_COURSE_SUCCESS', () => {
    // Arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);

    // Act
    const newState = courseReducer(initialState, action);

    // Assert
    expect(newState.length).toBe(3);
    expect(newState[0].title).toBe('A');
    expect(newState[1].title).toBe('B');
    expect(newState[2].title).toBe('C');
  });

  it ('should should update course when passed UPDATE_COURSE_SUCCESS', () => {
    // Arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    // Act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    // Assert
    expect(updatedCourse.title).toBe('New Title');
    expect(untouchedCourse.title).toBe('A');
    expect(newState.length).toBe(3);
  });
});
