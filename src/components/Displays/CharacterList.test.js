import React from 'react';
import { shallow, mount } from 'enzyme';

import { CharacterList } from './CharacterList';

describe('<CharacterList />', () => {
    it('Should render without crashing', () => {
        shallow(<CharacterList characters={[]} />);
    });

    it.only('Should render the characters in the character list', () => {
        const characters = ['Character1', 'Character2', 'Character3'];
        const wrapper = shallow(<CharacterList characters={characters} />);
        const state = {
            characters: []
        };

        const lis = wrapper.find('.character');
        console.log(lis.length);
        expect(lis.length).toEqual(characters.length);

    });
});