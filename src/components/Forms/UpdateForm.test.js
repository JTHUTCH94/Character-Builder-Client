import React from 'react';
import { shallow, mount } from 'enzyme';

import { UpdateForm } from './UpdateForm';

describe('UpdateForm', () => {
    it('Should render without crashing', () => {
        shallow(<UpdateForm/>);
    });

});