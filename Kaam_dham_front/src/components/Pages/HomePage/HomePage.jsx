// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect} from "react";
import NavBarInside from "../../NavbarInside/NavBarInside";
import Button from "react-bootstrap/esm/Button";
import { motion } from "framer-motion";
import Select from 'react-select';

const gigArea = [
  {value : 'computer', label : 'Computer Engg'},
  {value : 'electircal', label : 'Electrical Engg'},
  {value : 'civil', label : 'Civil Engg'},
  {value : 'mechanical', label : 'Mechanical Engg'},
  {value : 'medical', label : 'Medical'},
  {value : 'administrative', label : 'Administrative'},
]

function HomePage() {
  const [data, setData] = useState([]);
  const [id,setid]=useState('');
  useEffect(() => {
  var Url=window.API_PREFIX+"job/show_job"
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <NavBarInside />

        <div className="flex flex-row p-2">
          <div className="w-1/5">
            <div className="h-full flex flex-col p-2">
              <h1>Filters</h1>
              <div>
                <label htmlFor="hourly">
                  <input type="checkbox" />
                  Hourly
                </label>
                <br />
                <label htmlFor="Weekly">
                  <input type="checkbox" />
                  Weekly
                </label>
              </div>
              <div className="w-full">
                {/* put an input field of area in company post form which will be dividing all gigs in different categories */}
                <h1>Gig Area</h1>
                <div>
                  <Select options={gigArea} />
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>

          <div
            className="w-3/5 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 4rem - 4px)" }}
          >
            {/* posts will come here */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full p-2 mt-2"
            >
              <h1 className="mb-1">Company Name</h1>
              <h1 className="mb-1">Role Name</h1>
              <p className="mb-1">
                Role details Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia minus, voluptas consequuntur ipsam atque
                similique cum animi adipisci amet cupiditate.
              </p>
              <h1 className="mb-1">Eligibility</h1>
              <p className="mb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                minus?
              </p>
              <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center">
                Apply
              </Button>
            </motion.div>

            <hr />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full p-2 mt-2"
            >
              <h1 className="mb-1">Company Name</h1>
              <h1 className="mb-1">Role Name</h1>
              <p className="mb-1">
                Role details Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia minus, voluptas consequuntur ipsam atque
                similique cum animi adipisci amet cupiditate.
              </p>
              <h1 className="mb-1">Eligibility</h1>
              <p className="mb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                minus?
              </p>
              <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center">
                Apply
              </Button>
            </motion.div>

            <hr />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full p-2 mt-2"
            >
              <h1 className="mb-1">Company Name</h1>
              <h1 className="mb-1">Role Name</h1>
              <p className="mb-1">
                Role details Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia minus, voluptas consequuntur ipsam atque
                similique cum animi adipisci amet cupiditate.
              </p>
              <h1 className="mb-1">Eligibility</h1>
              <p className="mb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                minus?
              </p>
              <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center">
                Apply
              </Button>
            </motion.div>

            <hr />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full p-2 mt-2"
            >
              <h1 className="mb-1">Company Name</h1>
              <h1 className="mb-1">Role Name</h1>
              <p className="mb-1">
                Role details Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia minus, voluptas consequuntur ipsam atque
                similique cum animi adipisci amet cupiditate.
              </p>
              <h1 className="mb-1">Eligibility</h1>
              <p className="mb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                minus?
              </p>
              <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center">
                Apply
              </Button>
            </motion.div>

            <hr />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full p-2 mt-2"
            >
              <h1 className="mb-1">Company Name</h1>
              <h1 className="mb-1">Role Name</h1>
              <p className="mb-1">
                Role details Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia minus, voluptas consequuntur ipsam atque
                similique cum animi adipisci amet cupiditate.
              </p>
              <h1 className="mb-1">Eligibility</h1>
              <p className="mb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                minus?
              </p>
              <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center">
                Apply
              </Button>
            </motion.div>

            <hr />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full p-2 mt-2"
            >
              <h1 className="mb-1">Company Name</h1>
              <h1 className="mb-1">Role Name</h1>
              <p className="mb-1">
                Role details Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia minus, voluptas consequuntur ipsam atque
                similique cum animi adipisci amet cupiditate.
              </p>
              <h1 className="mb-1">Eligibility</h1>
              <p className="mb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                minus?
              </p>
              <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center">
                Apply
              </Button>
            </motion.div>

            <hr />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full p-2 mt-2"
            >
              <h1 className="mb-1">Company Name</h1>
              <h1 className="mb-1">Role Name</h1>
              <p className="mb-1">
                Role details Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia minus, voluptas consequuntur ipsam atque
                similique cum animi adipisci amet cupiditate.
              </p>
              <h1 className="mb-1">Eligibility</h1>
              <p className="mb-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                minus?
              </p>
              <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center">
                Apply
              </Button>
            </motion.div>
            {data.map(item => (
            <React.Fragment key={item.id}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}transition={{ duration: 0.5 }} className="w-full p-2 mt-2">
            <h1 className="mb-1">{item.Title}</h1>
            <h1 className="mb-1">{item.Description}</h1>
            <p className="mb-1">{item.Eligibilty}</p>
            <h1 className="mb-1">{item.Skills}</h1>
            <p className="mb-1">{item.Duration}</p>
            <p className="mb-1">{item.Budget}</p>


            <Button className="bg-green-500 text-lg w-[100px] h-[35px] flex items-center justify-center" onClick={() => {
                                
              setid(item.id);
              console.log(item.id)
              }}>Apply</Button>
          </motion.div>

          <hr />
          </React.Fragment>
          ))}
          </div>
          
        

          <div className="w-1/5">
            <div className="h-full flex items-center justify-center">hello</div>
          </div>
        </div>
        </div>
    </motion.div>
  );
}


        
         

          

          
  

        

      

export default HomePage;
