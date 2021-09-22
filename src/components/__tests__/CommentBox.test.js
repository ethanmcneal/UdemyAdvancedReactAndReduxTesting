import React from "react";
import { mount, unmount } from "enzyme";
import CommentBox from "../CommentBox";

let wrapped;

beforeEach(() => {
	wrapped = mount(<CommentBox />);
});

afterEach(() => {
	wrapped.unmount();
});

it("shows a textarea and button", () => {
	expect(wrapped.find("textarea").length).toEqual(1);
	expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that users can type in", () => {
	wrapped.find("textarea").simulate("change", {
		target: {
			value: "new Comment",
		},
	});
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
});
