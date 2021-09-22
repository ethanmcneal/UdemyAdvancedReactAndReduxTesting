import React from 'react';
import { mount , unmount} from 'enzyme'
import CommentBox from '../CommentBox';


let wrapped

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

it('shows a textarea and button', () => {

    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
    wrapped.unmount()
})