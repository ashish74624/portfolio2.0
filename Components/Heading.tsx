import React from 'react'

interface Props {
    heading: string;
}

export default function Heading({ heading }: Props) {
    return (
        <>
            <h1 className='text-3xl md:text-6xl font-bold dark:text-white text-center mt-12'>
                {heading}
            </h1>
            <div className='w-20 h-2 mt-4 mx-auto bg-blueDash rounded-full'></div>
        </>
    )
}
