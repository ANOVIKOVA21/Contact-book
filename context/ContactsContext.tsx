'use client';

import { createContext, useContext, useState } from 'react';
import { contacts as initialContacts } from 'data/contacts';
type Contact = typeof initialContacts;
type ContactsContextType = {
  contacts: Contact;
  setContacts: React.Dispatch<React.SetStateAction<Contact>>;
};
export const ContactsContext = createContext<ContactsContextType | undefined>(undefined);
export function ContactsProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
}
export const useContacts = () => useContext(ContactsContext);
