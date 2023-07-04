import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import Swal from 'sweetalert2';
import { useState } from 'react';
// import alert from '../assets/alert.gif'
const Contact = () => {
  const [user_name,setName] =useState("");
  const [user_email,setEmail] =useState("");
  const [message,setMessage] =useState("");

  const cont ="<Get in touch! />";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     
     if(user_name.trim().length === 0 || user_email.trim().length === 0 || message.trim().length === 0  ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was a problem with your submision.Please review the field below.',
      })
       return;
    }

    emailjs.sendForm('service_bzc9ppw', 'template_07c8ro7', form.current, 'zdryjwVXqGI5dvURf')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Thanks for your mesage.It has been successfully sent!',
            showConfirmButton: false,
            timer: 2400
          })

      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      
      setName("");
      setEmail("");
      setMessage("");

  };
  
  return (

    <section className="py-16 lg:section dark:bg-white"  id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row px-3">
          {/* text */}
          <motion.div 
           variants={fadeIn('right',0.3)}
           initial="hidden"
           whileInView={"show"}
           viewports={{ once:false, amount:0.3 }}
           className="flex-1 flex justify-center items-center">
            <div>
              <h4 className="text-4xl text-center uppercase text-accent font-medium mb-2 tracking-wide">
                {cont}
              </h4>
              <h2 className="text-[30px] lg:text=[90px] leading-none mb-12 dark:text-slate-800 text-center">
                Submit the form below or  <br /> send me an email!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            variants={fadeIn('left',0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once:false, amount:0.3 }}
          ref={form} onSubmit={sendEmail} 
          //  variants={fadeIn('left',0.3)}
          //  initial="hidden"
          //  whileInView={"show"}
          //  viewports={{ once:false, amount:0.3 }}
           className="flex-1 border dark:border-slate-800 rounded-xl flex flex-col gap-y-6 pb-24 p-6 items-start mb-14">
             
            <input
              className="bg-transparent border-b py-3 text-white outline-none w-full placeholder:text-white/70 focus:border-accent transition-all dark:text-slate-900 dark:border-slate-800 focus:dark:border-accent placeholder:dark:text-black/70"
              type="text"
              placeholder="Your name"
              name="user_name" 
              value ={user_name}
              onChange={(e)=>{ setName(e.target.value); }}
            />
            <input
              className="bg-transparent border-b py-3  text-white outline-none w-full placeholder:text-white/70 focus:border-accent transition-al dark:text-slate-900 dark:border-slate-800 focus:dark:border-accent placeholder:dark:text-black/70"
              type="email"
              placeholder="Your email"
              name="user_email"
              value ={user_email}
              onChange={(e)=>{ setEmail(e.target.value); }}
            />
            < textarea className="bg-transparent border-b py-12   text-white outline-none w-full placeholder:text-white/70  focus:border-accent transition-all resize-none mb-12 dark:text-slate-900 dark:border-slate-800 focus:dark:border-accent placeholder:dark:text-black/70"
              placeholder="Your mesage" 
               name="message" 
               value ={message}
              onChange={(e)=>{ setMessage(e.target.value); }} />
            <input className="btn btn-sm " type="submit" value="Send Message" />
           
          </motion.form>
        </div>
      </div>
    </section>
  

    // <form ref={form} onSubmit={sendEmail} className='h-[500px]'>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};

export default Contact;
