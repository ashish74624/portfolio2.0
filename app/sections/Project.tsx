import React from 'react'
import { HoverEffect } from '@/Components/ui/card-hover-effect';


export const projects = [
  {
    title: "Poloroid",
    description:
      "A Social Media Platform.",
    link: "https://stripe.com",
  },
  {
    title: "Solids",
    description:
      "An Ecommerce platform",
    link: "https://netflix.com",
  },
  {
    title: "Pixel Pry",
    description:
      "An Image Uploader and Retrival Website.",
    link: "https://google.com",
  },
  {
    title: "ShelfWise",
    description:
      "A Library Management System",
    link: "https://meta.com",
  },
  {
    title: "UpFront",
    description:
      "A news website made with next js",
    link: "https://amazon.com",
  },
  {
    title: "InspireEd",
    description:
      "An Education platform",
    link: "https://microsoft.com",
  },
];

export default function Project() {
  return (
    <section className=' w-full flex flex-col' id='project'>
      <h1 className='text-3xl md:text-6xl font-bold dark:text-white text-center mt-12'>My Projects</h1>
      <div className='w-20 h-2 mt-4 mx-auto bg-blueDash rounded-full'></div>
      <div className="max-w-5xl h-max mx-auto ">
        <HoverEffect items={projects} />
      </div>
    </section>
  )
}
