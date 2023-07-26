// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { motion } from "framer-motion";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import NavBarInsideCmpny from "../../NavbarInsideCmpny/NavbarInsideCmpny";

function HomePageCompany() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [postDetails, setPostDetails] = useState();

  const onSubmit = (data) => {
    setPostDetails(data);
  };
  const [skills, setSkills] = useState([
    { id: 1, name: "Java" },
    { id: 2, name: "ReactJS" },
    { id: 3, name: "SQL" },
    { id: 4, name: "Autocad" },
    { id: 5, name: "dJango" },
  ]);
  const onInputChange = (inputValue) => {
    // Check if the typed value exists in the options
    const optionExists = skills.some(
      (option) => option.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (!optionExists && inputValue.trim() !== "") {
      // Add the new option to the list of options
      const newOption = { id: skills.length + 1, name: inputValue };
      setSkills([...skills, newOption]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <NavBarInsideCmpny />

        <div className="flex flex-row container">
          <div className="flex flex-col justify-center w-1/3 h-screen border border-black">
            previous posts from api
          </div>

          <div className="flex items-center justify-center w-2/3 border border-black">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2 m-2">
                <label htmlFor="gigTitle">Gig Title</label>
                <br />
                <input
                  type="text"
                  name="gigTitle"
                  className="w-[400px]"
                  {...register("gigTitle", { required: true })}
                />
                <p className="text-red-500">
                  {errors.gigTitle && "Gig Title is required."}
                </p>
              </div>

              <div className="p-2 m-2">
                <label htmlFor="gigDescription">Description</label>
                <br />
                <textarea
                  name="gigDescription"
                  id=""
                  cols="50"
                  rows="3"
                  {...register("gigDescription", { required: true })}
                ></textarea>
                <p className="text-red-500">
                  {errors.gigDescription && "Description is required."}
                </p>
              </div>

              <div className="p-2 m-2">
                <label htmlFor="eligibiltyCrit">Eligibilty Criteria</label>
                <br />
                <textarea
                  name="eligibiltyCrit"
                  id=""
                  cols="50"
                  rows="3"
                  {...register("eligibiltyCrit", { required: true })}
                ></textarea>
                <p className="text-red-500">
                  {errors.eligibiltyCrit && "Eligibilty Criteria is required."}
                </p>
              </div>

              <div className="p-2 m-2">
                <label htmlFor="skillsReq">Skills Required</label>
                <br />
                <Multiselect
                  options={skills}
                  selectedValues={[]}
                  displayValue="name"
                  onInputChange={onInputChange}
                  onSelect={(event) => {
                    // setlist(event);
                    console.log(event);
                    //inserts the selected option in array
                  }}
                  onRemove={(event) => {
                    // setlist(event);
                    console.log(event);
                    //removes the selected opton in array
                  }}
                />
              </div>

              <div className="p-2 m-2">
                <label htmlFor="duration">Duration</label>
                <br />
                <input
                  type="text"
                  name="duration"
                  {...register("duration", { required: true })}
                />
                <p className="text-red-500">
                  {errors.duration && "Duration is required."}
                </p>
              </div>

              <div className="p-2 m-2">
                <label htmlFor="stipend">Stipend</label>
                <br />
                <input
                  type="text"
                  name="stipend"
                  {...register("stipend", { required: true })}
                />
                <p className="text-red-500">
                  {errors.stipend && "Stipend is required."}
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="bg-blue-500 text-xl font-semibold w-[90px] h-[35px] flex items-center justify-center"
                >
                  Post
                </Button>
              </div>

              {/* Only for testing */}
              <pre>{JSON.stringify(postDetails, undefined)}</pre>
              {/* Only for testing */}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
    //make new navbar for comapny side
  );
}

export default HomePageCompany;
