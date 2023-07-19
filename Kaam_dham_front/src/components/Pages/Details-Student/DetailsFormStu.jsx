// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Multiselect from "multiselect-react-dropdown";
import Button from "react-bootstrap/Button";
import "./DetailsStudent.css";
import { useNavigate } from "react-router-dom";

function DetailsFormStu() {
  const [branch, setBranch] = useState();
  const [interest, setInterest] = useState([
    "Java",
    "dJango",
    "Python",
    "ReactJS",
    "NodeJS",
    "C++",
    "SQL",
  ]);
  const navigate = useNavigate();

  const [finallist,setlist]=useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [studentDetails, setStudentDetails] = useState();
  const onSubmit = (data) => {
    setStudentDetails(data);
    var Url=window.API_PREFIX+"user/registration"
    fetch(Url, {
      method: "POST",
      headers:{
          "Content-type": "application/json",

      },
      body: JSON.stringify({
        Token:localStorage.getItem("SToken"),
        DOB:data['stuDOB'],
        Mobile:data['stuContactNum'],
        College:data['stuCollege'],
        City:data['stuCity'],
        Branch:data['stuBranch'],
        Bio:data['stuBio'],
        Intrested:finallist

        


      }),
  })
  .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Handle the data returned from the API
        
        if (data["status"] === "1") {
            navigate("/profile_student")
        } 
        else if (data["status"] === "0") {
          alert(data['message'])

        } 
        else {
          alert(data['message'])
        }
        // You can do whatever you want with the data here
    })
    .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
    });

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
      <pre>{JSON.stringify(studentDetails, undefined)}</pre>
      {/* Only for testing */}


      <div className="w-full md:flex md:justify-center">
        <form className="details-form-stu p-2 mb-4" action="" onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="m-2 p-2">
            <label className="my-label" htmlFor="stuName">
              Name
            </label>
            <br />
            <input
              className="my-input"
              type="text"
              placeholder="from api"
              name="stuName"
            />
          </div>

          <div className="m-2 p-2">
            <label className="my-label" htmlFor="stuEmail">
              Email
            </label>
            <br />
            <input
              className="my-input"
              type="email"
              placeholder="from api"
              name="stuEmail"
            />
          </div> */}

          <div className="m-2 p-2">
            <label className="my-label" htmlFor="stuDOB">
              DOB
            </label>
            <br />
            <input className="my-input" type="date" name="stuDOB" {...register("stuDOB", { required: true })}/>
            <p>{errors.stuDOB && "Birth Date is required."}</p>
          </div>

          <div className="m-2 p-2">
            <label className="my-label" htmlFor="stuContactNum">
              Contact No.
            </label>
            <br />
            <input className="my-input" type="text" name="stuContactNum" {...register("stuContactNum", { required: true })}/>
            <p>{errors.stuContactNum && "Contact Number is required."}</p>
          </div>

          <div className="m-2 p-2">
            <label className="my-label" htmlFor="stuBio">
              Bio
            </label>
            <br />
            <textarea
              name="stuBio"
              rows="3"
              cols="60"
              id=""
              placeholder="Write something about yourself"
              {...register("stuBio", { required: true })}
            ></textarea>
            <p>{errors.stuBio && "Bio is required."}</p>
          </div>

          <div className="m-2 p-2">
            <label className="my-label" htmlFor="stuCity">
              City
            </label>
            <br />
            <input className="my-input" type="text" name="stuCity" {...register("stuCity", { required: true })}/>
            <p>{errors.stuCity && "City is required."}</p>
          </div>

          <div className="m-2 p-2">
            <label className="my-label" htmlFor="stuCollege">
              College/University
            </label>
            <br />
            <input className="my-input" type="text" name="stuCollege" {...register("stuCollege", { required: true })}/>
            <p>{errors.stuCollege && "College is required."}</p>
          </div>

          <div className="m-2 p-2">
            <label className="my-label" htmlFor="stuBranch">
              Branch
            </label>
            <br />
            <select
              name="stuBranch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              {...register("stuBranch", { required: true })}
            >
              <option value="">Select branch</option>
              <option value="aerospace">Aerospace Engineering</option>
              <option value="civil">Civil Engineering</option>
              <option value="computer">Computer Engineering</option>
              <option value="electrical">Electrical Engineering</option>
              <option value="environmental">Environmental Engineering</option>
              <option value="mechanical">Mechanical Engineering</option>
              <option value="software">Software Engineering</option>
            </select>
            <p>{errors.stuBranch && "Branch is required."}</p>
          </div>

          <div className="m-2 p-2">
            {/* figure out how to insert this multiselect array in student details */}
            <label className="my-label" htmlFor="stuInterest">
              Interests
            </label>
            <br />
            <Multiselect
              isObject={false}
              options={interest}
              onSelect={(event) => {
                setlist(event);

                //inserts the selected option in array
                //check console
              }}
              onRemove={(event) => {
                setlist(event);
                //removes the selected opton in array
                //check console
              }}
            />
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

export default DetailsFormStu;
