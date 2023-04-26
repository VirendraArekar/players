import React from 'react';
import {BsStarFill, BsStar } from 'react-icons/bs';

export default function Rating({rate = 0}) {
  return (
    <p className="flex text-grey-darker text-sm">
        {
            [1,2,3,4,5].map((arr, index) => {
            return index < rate ? <span key={index}><BsStarFill /> </span>: <span key={index}><BsStar /></span>;
            })
        }
    </p>
  )
}
