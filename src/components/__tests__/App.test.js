import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

beforeEach(() => {
    const wrapped = shallow(<App />)
});

it('Shows the CommentBox component', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('Shows the CommentList Component', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})