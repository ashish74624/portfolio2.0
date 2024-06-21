import React from 'react'
import { SparklesCore } from "@/Components/ui/sparkles";

export default function About() {
  return (
    <section className='w-full h-screen relative z-10 flex flex-col' id='about'>
        <div className="w-full absolute inset-0 -z-10 h-full">
                    <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    />
                </div>

        <h1 className='text-3xl md:text-6xl font-bold dark:text-white text-center mt-12'>About Me</h1>
        <div className='w-20 h-2 mt-4 mx-auto bg-[#89b0ff] rounded-full'></div>

        <div className='flex w-full gap-14 mt-10 justify-center'>

            <div className="h-max relative w-5/12  rounded-md">
                <h1 className='text-white text-4xl'>Get to know Me !</h1>
                <p className='text-gray-200 mt-5 text-lg'>
                    I&apos;m a <HightLight text='Full Stack Web Developer'/> building and managing the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <HightLight text='Projects'/> section.
                    <br /> <br />
                    I&apos;m currently persuing my B.E in Information Science and Engineering from <HightLight text='R.N.S Institute of Technology'/> in Bangalore , India
                    <br /> <br />
                    I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <HightLight text='contact'/> me.
                </p>
            </div>

            <div className='w-5/12 rounded text-white'>
                <h1 className='text-white text-4xl'>My Skills</h1>
                <div className='mt-5 space-x-4'>
                    <Card text='HTML' color='text-orange-500'/>
                    <Card text='CSS' color='text-blue-500'/>
                    <Card text='JavaScript' color='text-yellow-300'/>
                    <Card text='React' color='text-[#58C4DC]'/>
                    <Card text='Tailwind Css' color='text-sky-400'/>
                </div>
                <div className='mt-4 space-x-4'>
                    <Card text='React Router' color='text-red-500'/>
                    <Card text='Next Js' color='text-white'/>
                    <Card text='Git' color='text-orange-500'/>
                    <Card text='Github' color='text-white'/>
                    <Card text='Node Js' color='text-green-200'/>
                </div>
                <div className='mt-4 space-x-4'>
                    <Card text='Express Js' color='text-white'/>
                    <Card text='Mongo Db' color='text-green-500'/>
                </div>
            </div>
        </div>
    </section>
  )
}

interface Props {
    text:string
}

interface CardProps{
    text:string;
    color:string;
}

function HightLight ({text}:Props){
    return <span className='text-[#89b0ff]'>{text}</span>
}

function Card ({text,color}:CardProps){
    return (
        <span className={`bg-zinc-800 ${color.toString()} text-xl px-4 py-1 rounded-md`}>
            {text} 
        </span>
    )
}