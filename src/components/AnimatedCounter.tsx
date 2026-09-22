"use client";
import React from 'react'

import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number} ) => {
  return (
    <span className="w-full text-2xl font-bold text-primary">
        $<CountUp 
        
        decimals={2}
        decimal="."
        prefix=""
        end={amount}/>
        </span>
    
  )
}

export default AnimatedCounter