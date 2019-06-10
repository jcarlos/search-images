import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from '../Layout';

configure({ adapter: new Adapter() });

describe("Layout", () => {
  const images = [{
    author: 'nobody@flickr.com ("NgocTu123")',
    date_taken: "2019-06-06T21:59:54-08:00",
    link: "https://www.flickr.com/photos/146532146@N04/48029106921/",
    tags: "tú anniversary",
    thumbnail:
      "https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg"
  }]
  it("renders a <Container>", () => {
    const wrapper = shallow(<Layout content={images} />);
    expect(wrapper.type()).toBe("div");
  });
});