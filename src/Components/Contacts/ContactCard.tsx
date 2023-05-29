import React, { useState } from "react";
import "./ContactCard.css";
import { removeContact } from "../../redux/features/contact/ContactSlice";
import { useDispatch } from "react-redux";
import CreateContact from "./CreateContact";

const ContactCard = ({ fname, _id, lname, status }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<any>(false);

  const dispatch = useDispatch();

  const removeHandler = () => {
    console.log(_id);
    dispatch(removeContact(_id));
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  const updateHandler = () => {
    setOpen(true);
    const data = { fname, _id, lname, status };
    setUpdateData(data);
  };

  return (
    <div>
      <div key={fname} className={status ? "contactcardActive" : "contactcard"}>
        {open && <CreateContact {...updateData} handleClose={handleClose} />}

        {status && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 contactcard__icons "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        )}
        {!status && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 contactcard__iconsError"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        )}

        <p>
          First name: <br /> {fname} <br />
          Last name:
          <br />
          {lname}
          <br />
        </p>
      </div>
      <div className="contactcard__actions">
        <button
          onClick={updateHandler}
          className="bg-green-700 hover:bg-green-800 text-white font-normal py-1 px-4 border border-green-700 rounded"
        >
          Edit
        </button>
        <button
          onClick={removeHandler}
          className="bg-red-500 hover:bg-red-600 text-white font-normal py-1 px-4 border border-red-600 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
