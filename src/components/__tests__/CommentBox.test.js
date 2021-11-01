import React from "react";
import { mount, unmount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
	wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
	wrapped.unmount();
});

it("shows a textarea and button", () => {
	expect(wrapped.find("textarea").length).toEqual(1);
	expect(wrapped.find("button").length).toEqual(1);
});

describe("the form", () => {
    beforeEach(() => {
        wrapped.find("textarea").simulate("change", {
			target: {
				value: "new Comment",
			},
		});
		wrapped.update();
    })
	it("has a text area that users can type in", () => {
		expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
	});

	it("clears textarea on submit", () => {
		expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
		wrapped.find("textarea").simulate("submit");
		wrapped.update();
		expect(wrapped.find("textarea").prop("value")).toEqual("");
	});
});
