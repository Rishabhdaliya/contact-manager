import React, { useState } from "react";
import {
  addContact,
  updateContact,
} from "../../redux/features/contact/ContactSlice";
import { useDispatch } from "react-redux";

interface SomeComponentProps {
  handleClose: () => void;
  fname: string;
  lname: string;
  _id: string;
  status: boolean;
}

interface FormState {
  fname: string;
  lname: string;
  status: boolean;
}

const CreateContact: React.FC<SomeComponentProps> = ({
  handleClose,
  fname,
  _id,
  lname,
  status,
}) => {
  const [formState, setFormState] = useState<FormState>({
    fname: fname ? fname : "",
    lname: lname ? lname : "",
    status: status ? status : false,
  });
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "radio" ? !prevState.status : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform form submission or further processing
    console.log(formState);
    if (formState.fname && formState.lname) {
      dispatch(addContact(formState));
      handleClose();
    } else {
      return alert("First Name and Last names are mandatory");
    }
  };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    debugger;
    // Perform form submission or further processing
    dispatch(updateContact({ ...formState, _id }));
    handleClose();
  };

  return (
    <div>
      <div
        className="relative   z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed  mx-auto inset-0 z-10  overflow-y-auto">
          <div
            style={{ marginRight: "18vw" }}
            className="flex  min-h-full  items-end justify-end p-4 text-center sm:items-center  sm:p-0"
          >
            <div className="relative transform overflow-hidden rounded-lg p-5 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                onClick={handleClose}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 ml-auto cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <h1 className="text-center font-semibold text-red-600">
                Create Contact
              </h1>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex items-center">
                  <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                    First name
                  </label>
                  <div className="flex-1 ml-4">
                    <input
                      type="text"
                      id="first_name"
                      name="fname"
                      value={formState.fname}
                      onChange={handleChange}
                      className="bg-gray-200 border-gray-500 hover:border-gray-400 text-gray-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                      placeholder="Enter First Name"
                      required
                    />
                  </div>
                </div>
                <div className="flex mt-3 items-center">
                  <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                    Last name
                  </label>
                  <div className="flex-1 ml-4">
                    <input
                      type="text"
                      id="last_name"
                      name="lname"
                      value={formState.lname}
                      onChange={handleChange}
                      className="bg-gray-200 border-gray-500 hover:border-gray-400 text-gray-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="flex mt-3 items-center">
                  <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                    Status:
                  </label>
                  <div className="flex-1 mt-4 ml-10">
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        name="status"
                        checked={formState.status}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                      />
                      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Active
                      </label>
                    </div>
                    <div className="flex mt-2  items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        name="status"
                        checked={!formState.status}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                      />
                      <label className="ml-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        InActive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-4 py-3 flex justify-center sm:px-6">
                {_id === "" ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-12 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-12 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                  >
                    update
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
