import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import ContactCard from "./ContactCard";
import CreateContact from "./CreateContact";
import { useSelector } from "react-redux";

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);

  const allContacts = useSelector((state: any) => state.contact.allContacts);
  const labelComp = {
    label: "Contacts Page",
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  let initialData = {
    fname: "",
    _id: "",
    lname: "",
    status: false,
  };
  return (
    <div>
      <Layout {...labelComp}>
        <div className="contacts__actions">
          <button
            onClick={() => setOpen(true)}
            className="bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-1 px-4 border border-red-600 hover:border-transparent rounded"
          >
            Create Contacts
          </button>
        </div>
        {open && <CreateContact {...initialData} handleClose={handleClose} />}

        {allContacts.length > 0 ? (
          <div className="contact__cards">
            {allContacts &&
              allContacts?.map((item: Record<string, any>) => (
                <ContactCard {...item} />
              ))}
          </div>
        ) : (
          <div className="contacts__empty">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>
              No Contact Found! <br />
              Please add contact form <br /> create contact button
            </p>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Contact;
