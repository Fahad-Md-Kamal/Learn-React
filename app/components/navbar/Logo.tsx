"use client"

import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';

type Props = {}

const Logo = (props: Props) => {
  return (
    <Image alt="logo" 
    className="hidden md:block cursor-pointer" 
    height="100" 
    width="100" 
    src="/images/logo.png"/>
  )
}

export default Logo