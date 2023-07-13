// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import { motion } from "framer-motion";
import Button from "react-bootstrap/esm/Button";
import Multiselect from "multiselect-react-dropdown";
import { useForm } from "react-hook-form";
import "./DetailsCompany.css";

function DetailsFormCom() {
  const [interestedFields, setInterestedFields] = useState([
    "Aerospace",
    "Civil",
    "Software",
    "IT",
    "Mechanical",
    "Electrical",
    "Medical",
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [companyDetails, setCompanyDetails] = useState();

  const onSubmit = (data) => {
    setCompanyDetails(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="main flex flex-col justify-center items-center">
        <div>
          <h1 className="text-center font-semibold text-2xl md:text-3xl mt-2 p-2">
            Welcome to Kaam-Dhaam
          </h1>
          <h1 className="text-center text-xl md:text-2xl p-2">
            Lets get you started
          </h1>
        </div>

        {/* Only for testing */}
        <pre>{JSON.stringify(companyDetails, undefined)}</pre>
        {/* Only for testing */}

        <div className="w-full md:flex md:justify-center">
          <form
            className="details-form-com p-2 mb-4"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="m-2 p-2">
              <label className="my-label" htmlFor="companyAddress">
                Company Address
              </label>
              <br />
              <textarea
                className="my-input"
                name=""
                id=""
                cols="60"
                rows="4"
                {...register("companyAddress", { required: true })}
              ></textarea>
              <p>{errors.companyAddress && "Company Address is required."}</p>
            </div>

            <div className="m-2 p-2">
              <label className="my-label" htmlFor="companyType">
                Company Type
              </label>
              <br />
              <input
                className="my-input"
                type="text"
                {...register("companyType", { required: true })}
              />
              <p>{errors.companyType && "Company Type is required."}</p>
            </div>

            <div className="m-2 p-2">
              <label className="my-label" htmlFor="companyDescription">
                Company Description
              </label>
              <br />
              <textarea
                className="my-input"
                name=""
                id=""
                cols="60"
                rows="4"
                {...register("companyDescription", { required: true })}
              ></textarea>
              <p>
                {errors.companyDescription &&
                  "Company Description is required."}
              </p>
            </div>

            <div className="m-2 p-2">
              <label className="my-label" htmlFor="interestedFields">
                Interested Fields(to hire from)
              </label>
              <br />
              <Multiselect
                isObject={false}
                options={interestedFields}
                onSelect={(event) => {
                  // setlist(event);
                  console.log(event);

                  //inserts the selected option in array
                  //check console
                }}
                onRemove={(event) => {
                  // setlist(event);
                  console.log(event);
                  //removes the selected opton in array
                  //check console
                }}
              />
            </div>

            <div className="m-2 p-2">
              <label className="my-label" htmlFor="contactNumber">
                Contact Number
              </label>
              <br />
              <input
                className="my-input"
                type="text"
                {...register("contactNumber", { required: true })}
              />
              <p>{errors.contactNumber && "Contact Number is required."}</p>
            </div>

            <div className="m-2 p-2">
              <label className="my-label" htmlFor="websiteLink">
                Website Link(If any)
              </label>
              <br />
              <input
                className="my-input"
                type="text"
                {...register("websiteLink")}
              />
            </div>

            <div className="m-2 p-2">
              <label className="my-label" htmlFor="ownerName">
                Owner Name
              </label>
              <br />
              <input
                className="my-input"
                type="text"
                {...register("ownerName", { required: true })}
              />
              <p>{errors.ownerName && "Owner Name is required."}</p>
            </div>

            <div className="text-center">
              <Button
                type=""
                className="text-center w-[200px] mt-2 font-semibold text-black"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default DetailsFormCom;
