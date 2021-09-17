import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

it('Shows the CommentBox component', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('Shows the CommentList Component', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentList).length).toEqual(1)
})