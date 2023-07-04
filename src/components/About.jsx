import React from "react";
// countup
import CountUp from "react-countup";
// intersection oberver hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import { Link } from "react-scroll";

import about from "../assets/pf.png";

import { FiPhone,FiMail } from "react-icons/fi";

const About = () => {
  const abt ="<About me />";
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
   
    <section className="section dark:bg-white" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex-1 px-2 "
          >
            <h2 className="h2 text-accent mb-5 text-center lg:text-left "> {abt}  </h2>
            {/* text-2xl mb-4 dark:text-slate-800 */}
            {/* mb-8 max-w-lg mx-auto lg:mx-o text-center lg:text-left   dark:text-slate-800 */}
        
            <h3 className="  mb-8 max-w-lg mx-auto lg:mx-0 dark:text-slate-800 text-center lg:text-left">
              {" "}
              Desinger & developer, I create web pages with UI/UX
              user interface, I have years of experience. And I am passionate
              about building excellent software that improve the live of those
              around me.
            </h3>

            <div className=" text-accent    gap-x-6 text-center lg:text-left lg:gap-x-10 mb-10  max-w-max items-center  mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-normal gap-x-4 mb-2 ">
                  <FiPhone size={25} /> 
                  <div className="text-white dark:text-slate-800">
                  +95 09268052189
                    </div>
                </div>
                <div className="flex items-center justify-center lg:justify-normal gap-x-4 mb-4">
                  <FiMail size={25} /> 
                  <div className="text-white dark:text-slate-800">
                  itszdwelrg4@gmail.com
                    </div>
                   
                </div>
              
              </div>
            {/* stats */}

            <div className="flex  gap-x-6 max-w-max items-center mb-2 mx-auto lg:mx-0">
              <button className="btn btn-sm">
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  Contact me
                </Link>
              </button>

            

            </div>
          </motion.div>

         

          <motion.div 
           variants={fadeIn("down", 0.5)}
           initial="hidden"
           whileInView={"show"}
          //  viewport={{ once: false, amount: 0.7 }}
           className=" flex flex-1 max-w-[280px] mx-auto lg:max-w-[482px] h-[380px] py-5 lg:py-0" >
            <img src={about} alt="image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
