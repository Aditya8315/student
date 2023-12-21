// src/App.js
import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import './App.css'; // Ensure this file contains Tailwind CSS styles
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoIosInformationCircle } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialDropdownState = Array(5).fill(false); // Assuming there are 3 components, adjust as needed
  const [showDropdown, setShowDropdown] = useState(initialDropdownState);

  const toggleDropdown = (index) => {
    const updatedState = [...showDropdown];
    updatedState[index] = !updatedState[index];
    setShowDropdown(updatedState);
  };
  const Card = ({ studentName, freedos, streak, imageUrl }) => {
    return (
      <Box
        flex={{ base: "1", md: "0 1 calc(33.333% - 1rem)" }}
        p="4"
        bg="white"
        // height={"25vh"}
        boxShadow="md"
        borderRadius="md"
        mb={{ base: 4, md: 0 }}
        mx={{ base: "auto", md: 4 }}
        transition="border 0.3s"
        _hover={{ border: "4px solid purple" }}
      >
        <Image src={imageUrl} alt={studentName} m="4" borderRadius='full'
          boxSize='100px' backgroundColor={"black"} /> {/* Add Image */}
        <Text fontWeight="bold" fontSize={"3xl"} m="2">
          {studentName}
        </Text>
        <Flex justify="space-around">
          <Box>
            <Text color={"purple"} fontSize={"2xl"} fontWeight={"bold"} >{freedos}</Text>
            <Text>Freedos Points</Text>
          </Box>
          <Box>
            <Text color={"purple"} fontSize={"2xl"} fontWeight={"bold"} >{streak}</Text>
            <Text>Streak</Text>
          </Box>
        </Flex>
      </Box>
    );
  };
  return (
    <ChakraProvider>
      <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-red-300 via-amber-50 to-teal-300">

        {/* First Section */}
        <div className="md:w-[30%] w-full p-4">
          <div className="flex flex-col items-center">

            {/* Teacher Card */}
            <div className="  mb-4 w-full">
              <div className="bg-white p-5 shadow-md rounded-md">
                <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Teacher" className="w-24 h-24 rounded-full mb-2 bg-black m-auto" />
                <p className="font-bold mb-2 text-center">Teacher Name</p>
                <p className="text-gray-500 mb-2 text-center">School Name</p>
                <div className="flex flex-row p-2 mb-2 justify-center items-center">
                  <FaEdit size={"30px"} />
                  <span className="font-bold  left-0 w-[50%] p-2 text-lg ">Grade 5</span>
                  <div className='bg-black flex flex-row p-2 rounded-md'>
                    <span className=" bg-black text-white px-2 ">Section A  </span>
                    <SlArrowDown size={"20px"} color='white' />
                  </div>
                </div>
              </div>

              {/* My Students Section */}
              <div className="bg-white p-5 shadow-md rounded-md mt-5">
                <div className="w-full text-left mb-4">
                  <div className="flex flex-row  justify-between">
                    <p className="font-bold mb-2">My Students</p>
                    <button className="cursor-pointer hover:text-blue-300">View All</button>
                  </div>
                  <div className="flex">
                  
                    <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 1" className="w-10 h-10 rounded-full mr-2 bg-black" />
                    <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-10 h-10 rounded-full mr-2 bg-black" />
                    <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-10 h-10 rounded-full mr-2 bg-black" />
                    <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-10 h-10 rounded-full mr-2 bg-black" />
            
                  </div>
                </div>
                <div className="w-full text-left mb-4">
                  <div className="flex flex-row  justify-between">
                    <p className="font-bold mb-2">My Watchlist</p>
                    <button className="cursor-pointer hover:text-blue-300">View All</button>
                  </div>
                  <div className="flex">
                  
                  <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 1" className="w-10 h-10 rounded-full mr-2 bg-black" />
                  <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-10 h-10 rounded-full mr-2 bg-black" />
                  <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-10 h-10 rounded-full mr-2 bg-black" />
                  <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-10 h-10 rounded-full mr-2 bg-black" />
          
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Second Section */}
        <div className="flex-1 p-2 h-screen">
          {/* Tabs Section */}
          <div className="flex m-2 ">
            <div className="flex-1">
              <div className="h-12 bg-slate-300  rounded-tl-md rounded-bl-md text-center text-md font-semibold">Overall Summary</div>
            </div>
            <div className="flex-1">
              <div className="h-12 bg-white   text-center text-md font-bold">Guided Path Progress</div>
            </div>
            <div className="flex-1">
              <div className="h-12 bg-slate-300  rounded-tr-md rounded-br-md text-center text-md font-semibold">Assignment Progress</div>
            </div>
          </div>

          {/* Container Section */}
          <div className="border-black border-2  rounded-md w-full  bg-white h-[600px] overflow-y-scroll overflow-hidden max-h-[600px]">
          {[...Array(5)].map((_, index) => (
          <div className="flex items-center mb-4  p-4 shadow-md m-2">
              {/* Bullet Icon */}
              <div className="bg-blue-500 w-4 h-4  top-10 rounded-full mr-4"></div>
              {/* Three Vertical Sections */}
              <div className="flex-1">
                <div className="text-sm font-bold mb-1">Assigned On</div>
                <div className="text-xs mb-1">1 Dec 2023</div>
                <div className="text-sm font-bold mb-1">Due by</div>
                <div className="text-xs">5 Dec 2023</div>
                {showDropdown[index] && <div className="mt-2">
                  <ul className="list-disc list-inside text-sm">
                    <li>Task - 1</li>
                    <li>Task - 2</li>
                    <li>Task - 3</li>
                  </ul>
                </div>}
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold mb-1 ">Unit name</div>
                <div className="text-xs mb-4">Description of the unit...</div>
                {showDropdown[index] && <div className="mt-2">
                  <div className="flex  flex-col m-2">
                  <div className="w-16 h-3 my-2 bg-gray-300 rounded-full">
                      <div className="w-8 h-full bg-green-400 rounded-full"></div>
                    </div>
                    <div className="w-16 h-3 my-2 bg-gray-300 rounded-full">
                      <div className="w-8 h-full bg-green-400 rounded-full"></div>
                    </div>
                    <div className="w-16 h-3 my-2 bg-gray-300 rounded-full">
                      <div className="w-8 h-full bg-green-400 rounded-full"></div>
                    </div>
                
                  </div>
                </div>}
              </div>
              <div className="flex-1">
                <div className="w-16 h-3 my-2 bg-gray-300 rounded-full">
                      <div className="w-8 h-full bg-green-400 rounded-full"></div>
                    </div>
                <div className="flex flex-row">
                  <button className="border border-black px-2 py-1 rounded-md mb-1">Completed</button>
                  {/* Dropdown Button */}
                  <button
                    onClick={()=>toggleDropdown(index)}
                    className=" p-1 rounded-full ml-2"
                  >
                    <MdKeyboardArrowDown size={"40px"} />
                  </button>
                </div>
            
                {showDropdown[index] && (
                  <div className="mt-2">
             
                    <div className="flex my-1">
                      <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 1" className="w-6 h-6 bg-black rounded-full mr-1" />
                      <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-6 h-6  bg-black rounded-full mr-1" />
                      <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 1" className="w-6 h-6 bg-black rounded-full mr-1" />
                      <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-6 h-6  bg-black rounded-full mr-1" />
                    </div>
                    <div className="flex my-1">
                      <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 1" className="w-6 h-6 bg-black rounded-full mr-1" />
                      <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-6 h-6  bg-black rounded-full mr-1" />
                      <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 1" className="w-6 h-6 bg-black rounded-full mr-1" />
                      <img src="https://img.icons8.com/stickers/100/human-head.png" alt="Student 2" className="w-6 h-6  bg-black rounded-full mr-1" />
                    </div>
    

                  </div>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Third Section */}
        <div className=" md:w-[30%] w-full p-4 text-white">

          <div className="bg-gradient-to-b from-blue-500 to-red-500 px-5 py-10 rounded-md">
            <h2 className="text-xl font-bold mt-5 ">Due Today</h2>
            <p className="mt-4 text-xl font-semibold">Assignment 1</p>
            <p>lorem Ipsum</p>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md mt-4">View</button>
          </div>

          {/* Assignments Section */}
          <div className="mt-6 bg-white text-black rounded-md">
            <div className="flex flex-row items-center my-2">
              <IoIosInformationCircle size={"40px"} className="pl-2 " />
              <h2 className="text-2xl font-bold p-2">Assignments</h2>
            </div>
            {/* Assignment Components */}
            <div className="overflow-y-auto max-h-80">
              <div className="m-4 shadow-md">
                <div className="flex items-center mb-2 justify-between">
                  <p className="text-sm mr-4 bg-red-300 rounded-md p-2">#Homework</p>
                  <p className="text-sm">4/8/20</p>
                </div>
                <h3 className="text-lg font-bold mb-2">Monthly Talent Show postponed</h3>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="m-4 shadow-md">
                <div className="flex items-center mb-2 justify-between">
                  <p className="text-sm mr-4 bg-blue-300 rounded-md p-2">#Homework</p>
                  <p className="text-sm">4/8/20</p>
                </div>
                <h3 className="text-lg font-bold mb-2">Monthly Talent Show postponed</h3>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="m-4 shadow-md">
                <div className="flex items-center mb-2 justify-between">
                  <p className="text-sm mr-4 bg-green-300 rounded-md p-2">#Homework</p>
                  <p className="text-sm">4/8/20</p>
                </div>
                <h3 className="text-lg font-bold mb-2">Monthly Talent Show postponed</h3>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full" >
        <ModalOverlay className="bg-gradient-to-br from-red-300 via-amber-50 to-teal-300"/>
        <ModalContent >
          <ModalHeader fontSize={"2xl"}>Your Students</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* First Row */}
            <Flex mb={{ base: 4, md: 4 }} flexDir={{ base: "column", md: "row" }}>
              <Card studentName="Student 1" freedos={5} streak={3} imageUrl="https://img.icons8.com/stickers/100/human-head.png" />
              <Card studentName="Student 2" freedos={8} streak={5} imageUrl="https://img.icons8.com/stickers/100/human-head.png" />
              <Card studentName="Student 3" freedos={6} streak={2} imageUrl="https://img.icons8.com/stickers/100/human-head.png" />
            </Flex>
            {/* Second Row */}
            <Flex flexDir={{ base: "column", md: "row" }} mb={{ base: 4, md: 4 }}>
              <Card studentName="Student 4" freedos={4} streak={1} imageUrl="https://img.icons8.com/stickers/100/human-head.png" />
              <Card studentName="Student 5" freedos={7} streak={4} imageUrl="https://img.icons8.com/stickers/100/human-head.png" />
              <Card studentName="Student 6" freedos={9} streak={6} imageUrl="https://img.icons8.com/stickers/100/human-head.png" />
            </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>

      {/* Button to open the modal */}
      <Button onClick={onOpen} position="fixed" bottom="8" right="8">
        <FaPlusCircle size={"80px"} color='black' />
      </Button>
    </ChakraProvider>
  );
}

export default App;
