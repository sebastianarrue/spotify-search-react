import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../interfaces/Character.interface.js";
import type { RootState } from './store.js'
import { sortBy } from 'lodash'


const initialState: { characters: Character[], allCharacters: Character[] } = {
    allCharacters: [],
    characters: []
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action: PayloadAction<Character[]>) => {
            state.allCharacters = action.payload;
            state.characters = action.payload;
        },
        filter: (state, action: PayloadAction<String>) => {
            state.characters = state.allCharacters.filter(character =>
            (character.title && character.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                (character.description && character.description.toLowerCase().includes(action.payload.toLowerCase()))))
        },
        sort: (state, action: PayloadAction<String>) => {
            const value = action.payload as keyof Character;
            state.characters = sortBy(state.characters, (c: Character) => c[value]);
        }

    }
})

export const characterActions = charactersSlice.actions;
export default charactersSlice.reducer;