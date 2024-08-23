import React from 'react'
import { HoverEffect } from '@/Components/ui/card-hover-effect';
import Heading from '@/Components/Heading';


export const projects = [
  {
    title: "Poloroid",
    description:
      "A Social Media Platform.",
    link: "https://poloroid.vercel.app/",
    img: "/poloroid.png",
    techStack: "React | Tailwind Css | Express | Mongo Db",
    github: "https://github.com/ashish74624/Poloroid"
  },
  {
    title: "Solids",
    description:
      "An Ecommerce platform",
    link: "https://solids.vercel.app/",
    img: "/s.png",
    techStack: "Next Js | Kinde Auth | Razorpay",
    github: "https://github.com/ashish74624/Solids"
  },
  {
    title: "Pixel Pry",
    description:
      "Image Uploader, Retrival Website.",
    link: "https://tech-nexus.vercel.app/",
    img: "/px.png",
    techStack: "React | Tailwind Css | Express | Mongo Db",
    github: "https://github.com/ashish74624/Pixel-Pry-TechNexus"
  },
  {
    title: "ShelfWise",
    description:
      "A Library Management System",
    link: "https://shelfwise.vercel.app/",
    img: "/lms.png",
    techStack: "Next js | Aceternity UI | Express | Mongo Db",
    github: "https://github.com/ashish74624/ShelfWise"
  },
  {
    title: "UpFront",
    description:
      "A news website made with next js",
    link: "https://upfront-fawn.vercel.app/",
    img: "/upfront.png",
    techStack: "Next Js | Tailwind Css",
    github: "https://github.com/ashish74624/UpFront"
  },
  {
    title: "InspireEd - Ongoing",
    description:
      "An Education platform",
    link: "https://microsoft.com",
    img: "/poloroid.png",
    techStack: "React | Tailwind Css | Express | Mongo Db",
    github: "https://github.com/ashish74624/Poloroid"
  },
];

export default function Project() {
  return (
    <section className=' w-full flex flex-col z-50' id='project'>
      <Heading heading='My Project' />
      <div className="max-w-5xl h-max mx-auto ">
        <HoverEffect items={projects} />
      </div>
    </section>
  )
}
