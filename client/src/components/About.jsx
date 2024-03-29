import React from "react";
import aboutImage from "../images/about.png";

const About = () => {
  return (
    <>
      <div className="about-form">
        <div className="about-from-inner w-[80%] m-auto my-6 bg-white-500 p-6 border-4 border-blue-950 rounded-md">
          <form method="">
            <div className="grid grid-cols-3 gap-4">
              <div className="border">
                <img
                  src={aboutImage}
                  alt="please wait"
                  className="w-full object-contain h-full"
                />
              </div>
              <div className="">
                <h4 className="text-2xl">Atul Paswan</h4>
                <h5 className="text-blue-800">Full Stack Developer</h5>
                <p className="text-gray-500">Rankings: 1/10</p>
                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                  <ul class="flex flex-wrap -mb-px" role="tablist">
                    <li class="me-2">
                      <a
                        href="#user-information"
                        id="profile-tab"
                        role="tab"
                        data-toggle="tab"
                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      >
                        Profile
                      </a>
                    </li>

                    <li class="me-2">
                      <a
                        href="#user-dashboard"
                        id="home-tab"
                        data-toggle="tab"
                        role="tab"
                        class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
                        aria-current="page"
                      >
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-end">
                <button className="bg-blue-950 py-1 px-2 rounded-md text-white hover:border hover:border-blue-950 hover:bg-white hover:text-blue-950">
                  Edit Profile
                </button>
              </div>
              <div className="grid grid-cols-2">
                <div className="">
                  <div className="work-line">
                    <p className="text-xl">Work Line</p>
                    <a href="/">GitHub</a>
                    <br />
                    <a href="/">LinkIn</a>
                    <br />
                    <a href="/">Instagram</a>
                    <br />
                  </div>
                </div>
                <div className="">
                  <div id="user-information">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-8">
                        <div className="" id="myTabContent">
                          <div className="" id="home">
                            <div className="grid grid-cols-6 gap-40 ">
                              <div className="">
                                <label>Name</label>
                              </div>
                              <div className="">
                                <p className="flex-nowrap">Atul Paswan</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="user-dashboard">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-8">
                        <div className="" id="myTabContent">
                          <div className="" id="home">
                            <div className="grid grid-cols-6 gap-40 ">
                              <div className="">
                                <label>Name</label>
                              </div>
                              <div className="">
                                <p className="flex-nowrap">Atul Paswan</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
