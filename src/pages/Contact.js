import React from 'react';
import '../components/no-record.css'

export default function Contact() {

  return (
    <div className="dark:bg-[#050830] w-full" style={{height : 750}}>
        {/* <div className="flex flex-wrap -mx-1 lg:-mx-4 record-div"> */}
        <section className="flex record-div items-center dark:text-gray-100  dark:bg-[#050830] w-full  ">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center w-full">
                <p className="text-3xl my-16">Contact Us Page</p>
            </div>
        </section>
        {/* </div> */}
    </div>
  )
}
