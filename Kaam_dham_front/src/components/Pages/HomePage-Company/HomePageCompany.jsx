// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect} from "react";
// import Multiselect from "multiselect-react-dropdown";
import { motion } from "framer-motion";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
// import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
import CmpyBg from '../../../imgs/company_home_bg.png';
import NavBarInsideCmpny from "../../NavbarInsideCmpny/NavbarInsideCmpny";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: 'black',
    borderRadius: '0.5rem',
    borderWidth : '2px' 
  }),
};

function HomePageCompany() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = [
    { value: "java", label: "Java" },
    { value: "cpp", label: "CPP" },
    { value: "django", label: "dJango" },
    { value: "autocad", label: "AutoCad" },
  ];

  // eslint-disable-next-line no-unused-vars
  const [postDetails, setPostDetails] = useState();
  const [skills, setSkills] = useState(null);

  //duration add kri deje submit action ma
  const [selectedDuration, setSelectedDuration] = useState();
  const [selectedDurationType, setSelectedDurationType] = useState();
  const [data, setData] = useState([]);
  const [id,setid]=useState('');
  useEffect(() => {
    var Url=window.API_PREFIX+"employer/show_job"
        fetch(Url, {
          method: "POST",
          headers:{
              "Content-type": "application/json",
  
          },
          body: JSON.stringify({
            Token:localStorage.getItem('SToken')
          }),
      })
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
          // Handle the data returned from the API
          if (data["status"] === "1") {
            setData([...data["job"]])
            console.log(data['job'])
          } else {
            alert(data['message'])
          }
          // You can do whatever you want with the data here
      })
  }, []);
  const handleSelect = (selectedOptions) => {
    setSkills(selectedOptions);
    console.log(selectedOptions);
  }

  const onSubmit = (data) => {
    setPostDetails(data);
    console.log(data)
    console.log(skills)
    var Url=window.API_PREFIX+"job/add_job"
      fetch(Url, {
        method: "POST",
        headers:{
            "Content-type": "application/json",

        },
        body: JSON.stringify({
          Token:localStorage.getItem('SToken'),
          Title:data['gigTitle'],
          Description:data['gigDescription'],
          Eligibilty:data['eligibiltyCrit'],
          Duration:data['duration'], // aaiya duration na 2 state variable naaki deje
          Stipend:data['stipend'],
          Skill:skills

        }),
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Handle the data returned from the API
        if (data["status"] === "1") {
          window.location.reload();

        } else {
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
      transition={{ duration: 0.8 }}
    >
      <div>
        <NavBarInsideCmpny />

        <div className="flex flex-row container mt-5">
          <div className="flex flex-col justify-center w-1/3 h-screen">
          {data.map(item => (
            <React.Fragment key={item.id}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}transition={{ duration: 0.5 }} className="w-full p-2 mt-2">
            <h1 className="mb-1">{item.CompanyName}</h1>
            
            <h1 className="mb-1">{item.Title}</h1>
            <h1 className="mb-1">{item.Description}</h1>
            <p className="mb-1">{item.Eligibilty}</p>
            <h1 className="mb-1">{item.Skills}</h1>
            <p className="mb-1">{item.Duration}</p>
            <p className="mb-1">{item.Budget}</p>


            <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center" onClick={() => {
                                
              setid(item.id);
              console.log(item.id)
              }}>View Bid</Button>
          </motion.div>

          <hr />
          </React.Fragment>
          ))}
          </div>

          <div 
          className="flex items-center justify-center w-2/3 py-5"
          style={{
            backgroundImage :`url(${CmpyBg})`,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            // backdropFilter: 'blur(10px)', 
            backgroundSize: 'cover',
          }}
          
          >
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-2 m-2">
                <label className=" font-semibold text-lg" htmlFor="gigTitle">Gig Title</label>
                <br />
                <input
                  type="text"
                  name="gigTitle"
                  className="p-2 w-[450px] h-[35px] border-1 rounded-lg"
                  {...register("gigTitle", { required: true })}
                />
                <p className="text-red-500">
                  {errors.gigTitle && "Gig Title is required."}
                </p>
              </div>

              <div className="p-2 m-2">
                <label className=" font-semibold text-lg" htmlFor="gigDescription">Description</label>
                <br />
                <textarea
                  name="gigDescription"
                  id=""
                  cols="60"
                  rows="3"
                  className="p-2 border-1 rounded-lg"
                  {...register("gigDescription", { required: true })}
                ></textarea>
                <p className="text-red-500">
                  {errors.gigDescription && "Description is required."}
                </p>
              </div>

              <div className="p-2 m-2">
                <label className=" font-semibold text-lg" htmlFor="eligibiltyCrit">Eligibilty Criteria</label>
                <br />
                <textarea
                  name="eligibiltyCrit"
                  id=""
                  cols="60"
                  rows="3"
                  className="p-2 border-1 rounded-lg"
                  {...register("eligibiltyCrit", { required: true })}
                ></textarea>
                <p className="text-red-500">
                  {errors.eligibiltyCrit && "Eligibilty Criteria is required."}
                </p>
              </div>

              <div className="p-2 m-2">
                <label className=" font-semibold text-lg" htmlFor="skillsReq">Skills Required</label>
                <br />
                <CreatableSelect
                defaultValue={skills}
                onChange={handleSelect}
                options={options}
                isMulti={true}
                isSearchable={true}
                styles={customStyles}
                className="border-1 rounded-lg"
                />
                {/* <Multiselect
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
                /> */}
              </div>

              <div className="p-2 m-2">
                <label className=" font-semibold text-lg" htmlFor="duration">Duration</label>
                <br />
                <input
                  className="mr-2 w-[80px] h-[30px] text-center border-1 rounded-lg"
                  type="number"
                  id="duration"
                  name="duration"
                  min="1"    
                  step="1"   
                  value={selectedDuration}  
                  onChange={(event) => setSelectedDuration(event.target.value)}
                  {...register("duration", { required: true })}
                 />
                <select
                  className=" rounded-lg"
                  id="durationType"
                  name="durationType"
                  value={selectedDurationType} 
                  onChange={(event) => setSelectedDurationType(event.target.value)}
                  {...register("durationType", { required: true })}
                >
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                </select>
                <p className="text-red-500">
                  {errors.duration && "Duration is required."}
                </p>
              </div>

              <div className="p-2 m-2">
                <label className=" font-semibold text-lg" htmlFor="stipend">Stipend</label>
                <br />
                <span className="mr-1 font-medium text-xl">₹</span>
                <input
                  type="number"
                  name="stipend"
                  className="p-2 ml-1 border-1 rounded-lg"
                  min="0"
                  step="500"
                  {...register("stipend", { required: true })}
                />
                <p className="text-red-500">
                  {errors.stipend && "Stipend is required."}
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="bg-blue-500 text-2xl font-semibold w-[130px] h-[50px] flex items-center justify-center"
                >
                  Post
                </Button>
              </div>

              {/* Only for testing */}
              {/* <pre>{JSON.stringify(postDetails, undefined)}</pre> */}
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
