import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Contact {
  _id: string;
  // Add other properties of the contact object
}

interface ContactState {
  allContacts: Contact[];
}
const initialState: ContactState = {
  allContacts: [],
};

const contact = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<any>) => {
      const _id = uuidv4();
      const contact = { ...action.payload, _id };
      state.allContacts = [...state.allContacts, contact];
    },
    updateContact: (state, action: PayloadAction<any>) => {
      debugger;
      const updatedContact = action.payload;
      const index = state.allContacts.findIndex(
        (contact) => contact._id === updatedContact._id
      );
      if (index !== -1) {
        state.allContacts[index] = updatedContact;
      }
    },
    removeContact: (state, action: PayloadAction<any>) => {
      const filteredContacts = state.allContacts.filter(
        (item) => item?._id != action.payload
      );

      console.log(filteredContacts);

      state.allContacts = [...filteredContacts];
    },
  },
});

export const { addContact, removeContact, updateContact } = contact.actions;

export default contact.reducer;
