import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";


function ContactComponent() {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [comment, setComment] = useState("");
  // const [selectedValues, setSelectedValues] = useState([]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(firstname, lastname, email, number, selectedValues, comment);
  //   if (firstname === "" || lastname === "" || email === "" || number === "") {
  //     swal({
  //       title: "Please fill all the fields",
  //       text: "",
  //       icon: "warning",
  //       buttons: {
  //         confirm: { text: "Okay", className: "sweet-warning" },
  //       },
  //     });
  //     return;
  //   }
    
  //   e.preventDefault();
  //   axios
  //     .post("https://eleitcoaching-backend.herokuapp.com/api/postcontactmail", {
  //       firstname,
  //       lastname,
  //       email,
  //       number,
  //       comment,
  //       selectedValues
  //     })
  //     .catch((err) => console.log(err));
  //   swal({
  //     title: "Email Sent Successfully!",
  //     text: "",
  //     icon: "success",
  //     buttons: {
  //       confirm: { text: "Okay", className: "sweet-warning" },
  //     },
  //   });
  //   setFirstname("");
  //   setLastname("");
  //   setEmail("");
  //   setNumber("");
  //   setComment("");
    
  // };
  
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #dbeff6, #e6f3fb,#f4f9fd, #f5fafe)",
      }}
    >
      <div class="container mx-auto">
        <div class="flex justify-evenly px-6 ">
          <div class="w-full mx-10 xl:w-3/4 lg:w-11/12 flex flex-wrap">
            <div class="fixed right-3.5 z-50 block md:hidden">
              <a target="_blank" rel="noreferrer" href="tel:+97150809793">
                <img
                  className="w-16 h-16 rounded-full "
                  src="/call.png"
                  alt="Call Us"
                />
              </a>
            </div>
            <div class="w-full lg:block lg:w-5/12 bg-cover rounded-l-lg">
              <img src="/contact.jpeg" alt="Contact" />
            </div>

            <div class="w-full lg:w-7/12 py-5 rounded-lg lg:rounded-l-none">
              <form id="contact-form" method="POST" action="send" class="pt-6 pb-8 lg:px-4 mb-4rounded">
              {/* onSubmit={handleSubmit}  */}
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <input
                      name="fname"
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      // onChange={(e) => setFirstname(e.target.value)}
                      // value={firstname}
                      placeholder="First Name"
                    />
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      name="lname"
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      // onChange={(e) => setLastname(e.target.value)}
                      // value={lastname}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    name="mail"
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                    placeholder="Email"
                  />
                </div>
                <div class="mb-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Contact Number
                  </label>
                  <input
                    name="cnum"
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="tel"
                    // onChange={(e) => setNumber(e.target.value)}
                    // value={number}
                    placeholder="Contact Number"
                  />
                </div>
                <div class="max-w-sm">
                  <h2 class="mb-2 pt-2 font-bold text-gray-700">
                    {" "}
                    Make the right choice :
                  </h2>

{/* <<<<<<< HEAD */}
                  <div class="flex flex-col group-hover:bg-purple-500">
                    <span class="text-gray-700">
                      <input
                        type="checkbox"
                        id="one"
                        value="Improve Relationship"
                        // onChange={(e) => {
                        //   if (
                        //     selectedValues.indexOf("Improve Relationship") >= 0
                        //   ) {
                        //     setSelectedValues((prev) =>
                        //       prev.filter((x) => x === "Improve Relationship")
                        //     );
                        //   } else
                        //     setSelectedValues((prev) => [
                        //       ...prev,
                        //       "Improve Relationship",
                        //     ]);
                        // }}
                      />{" "}
                      Improve Relationship
                    </span>
                    <span class="text-gray-700">
                      <input
                        type="checkbox"
                        id="one"
                        value="Family"
                        // onChange={(e) => {
                        //   if (
                        //     selectedValues.indexOf("Family") >= 0
                        //   ) {
                        //     setSelectedValues((prev) =>
                        //       prev.filter((x) => x === "Family")
                        //     );
                        //   } else
                        //     setSelectedValues((prev) => [
                        //       ...prev,
                        //       "Family",
                        //     ]);
                        // }}
                      />{" "}
                      Family
                    </span>
                    <span class="text-gray-700">
                      <input
                        type="checkbox"
                        id="one"
                        value="Divorce"
                        // onChange={(e) => {
                        //   if (
                        //     selectedValues.indexOf("Divorce") >= 0
                        //   ) {
                        //     setSelectedValues((prev) =>
                        //       prev.filter((x) => x === "Divorce")
                        //     );
                        //   } else
                        //     setSelectedValues((prev) => [
                        //       ...prev,
                        //       "Divorce",
                        //     ]);
                        // }}
                      />{" "}
                      Divorce
                    </span>
                    <span class="text-gray-700">
                      <input
                        type="checkbox"
                        id="one"
                        value="Communication"
                        // onChange={(e) => {
                        //   if (
                        //     selectedValues.indexOf("Communication") >= 0
                        //   ) {
                        //     setSelectedValues((prev) =>
                        //       prev.filter((x) => x === "Communication")
                        //     );
                        //   } else
                        //     setSelectedValues((prev) => [
                        //       ...prev,
                        //       "Communication",
                        //     ]);
                        // }}
                      />{" "}
                      Communication
                    </span>
                    <span class="text-gray-700">
                      <input
                        type="checkbox"
                        id="one"
                        value="Self - Awareness"
                        // onChange={(e) => {
                        //   if (
                        //     selectedValues.indexOf("Self - Awareness") >= 0
                        //   ) {
                        //     setSelectedValues((prev) =>
                        //       prev.filter((x) => x === "Self - Awareness")
                        //     );
                        //   } else
                        //     setSelectedValues((prev) => [
                        //       ...prev,
                        //       "Self - Awareness",
                        //     ]);
                        // }}
                      />{" "}
                      Self - Awareness
                    </span>
                    <span class="text-gray-700">
                      <input
                        type="checkbox"
                        id="one"
                        value="Fears & Phobias"
                        // onChange={(e) => {
                        //   if (
                        //     selectedValues.indexOf("Fears & Phobias") >= 0
                        //   ) {
                        //     setSelectedValues((prev) =>
                        //       prev.filter((x) => x === "Fears & Phobias")
                        //     );
                        //   } else
                        //     setSelectedValues((prev) => [
                        //       ...prev,
                        //       "Fears & Phobias",
                        //     ]);
                        // }}
                      />{" "}
                      Fears & Phobias
                    </span>
                    <span class="text-gray-700">
                      <input
                        type="checkbox"
                        id="one"
                        value="Lifestyle & Career Change"
                        // onChange={(e) => {
                        //   if (
                        //     selectedValues.indexOf("Lifestyle & Career Change") >= 0
                        //   ) {
                        //     setSelectedValues((prev) =>
                        //       prev.filter((x) => x === "Lifestyle & Career Change")
                        //     );
                        //   } else
                        //     setSelectedValues((prev) => [
                        //       ...prev,
                        //       "Lifestyle & Career Change",
                        //     ]);
                        // }}
                      />{" "}
                      Lifestyle & Career Change
                    </span>
                    <span class="text-gray-700">
                      <input
                        type="checkbox"
                        id="one"
                        value="Others"
                        // onChange={(e) => {
                        //   if (
                        //     selectedValues.indexOf("Others") >= 0
                        //   ) {
                        //     setSelectedValues((prev) =>
                        //       prev.filter((x) => x === "Others")
                        //     );
                        //   } else
                        //     setSelectedValues((prev) => [
                        //       ...prev,
                        //       "Others",
                        //     ]);
                        // }}
                      />{" "}
                      Others
                    </span>
{/* ======= */}
                    
                
{/* >>>>>>> 1b26ed7 (Minor Changes) */}
                  </div>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-700 font-bold"
                  >
                    Comments:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    // onChange={(e) => setComment(e.target.value)}
                    // value={comment}
                    className="w-full bg-whit rounded border border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <div class="mb-6 text-center">
                  <button
                    class=" px-12 py-2 font-bold text-blue-50 bg-pink-500 rounded-full hover:bg-pink-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
