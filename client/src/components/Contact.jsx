import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <div className="contact-from">
        <div className="flex justify-center items-center">
          <div className="w-1/3 bg-slate-500 m-2 border border-slate-400 shadow-2xl rounded-md">
            <div className="flex justify-start align-middle items-center ml-2 p-4">
              <MdPhoneIphone />
              <div className="ml-4">
                <ul>
                  <li>Phone</li>
                  <li>+911234567890</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-slate-500 m-2 border border-slate-400 shadow-2xl rounded-md">
            <div className="flex justify-start align-middle items-center ml-2 p-4">
              <AiOutlineMail />
              <div className="ml-4">
                <ul>
                  <li>Email</li>
                  <li>email234@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-slate-500 m-2 border border-slate-400 shadow-2xl rounded-md">
            <div className="flex justify-start align-middle items-center ml-2 p-4">
              <RiUserLocationLine />
              <div className="ml-4">
                <ul>
                  <li>Address</li>
                  <li>Noida Sector - 62</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="get-in-touch ">
          <div className="get-in-touch-inner w-[80%] bg-slate-500 m-auto">
            <div className="w-[80%] m-auto">
              <h1 className="text-2xl pt-10">Get In Touch</h1>
              <div className="flex space-x-20 my-10">
                <form id="contact-from">
                  <div className="flex space-x-32 my-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      className="border-b border-blue-400 w-full bg-transparent"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      className="border-b border-blue-400 w-full bg-transparent"
                    />
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Phone number"
                      className="border-b border-blue-400 w-full bg-transparent"
                    />
                  </div>
                  <div className="message">
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      placeholder="Message"
                      className="border border-blue-400 w-full"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button className="border border-slate-600 px-16 py-2 rounded my-6 hover:bg-slate-800 hover:text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
