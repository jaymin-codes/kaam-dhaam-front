// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBarInside from "../../NavbarInside/NavBarInside";
// import { FaSearch } from "react-icons/fa";
import ReactSearchBox from "react-search-box";

function SearchPage() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    //get the api from backend and replace the dummy one
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  const handleSearch = (value) => {
    setInput(value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <NavBarInside />
      <div className="container">
        <div className="flex justify-center items-center my-3">
            <div className=" w-[250px] md:w-[400px]">
          <ReactSearchBox
            placeholder="Search"
            inputFontSize="18px"
            inputBorderColor="black 3px"
            value={input}
            data={users.map((user) => ({ key: user.id, value: user.name }))}
            onChange={handleSearch}
          /></div>
          {/* <FaSearch size={20} className="ml-[15px]"/> */}
        </div>
        <div>
          {filteredUsers.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SearchPage;
