import React from 'react';
import { mount } from 'enzyme'
import CommentBox from '../CommentBox';

it('shows a textarea and button', () => {
    const wrapped = mount(<CommentBox />);

    console.log(wrapped.find('textarea').length)
})