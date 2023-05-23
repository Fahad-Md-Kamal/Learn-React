'use client';

import React from 'react'

type HeadingProps = {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
  return (
    <div className={props.center ? "text-center": "text-start"}>
        <div className="text-2xl font-bold">
            {props.title}
        </div>
        <div className="font-light text-neutral-500 mt-2">
            {props.subtitle}
        </div>
    </div>
  )
}

export default Heading