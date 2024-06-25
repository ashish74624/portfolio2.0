import React from 'react'
import { HoverEffect } from '@/Components/ui/card-hover-effect';


export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
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
