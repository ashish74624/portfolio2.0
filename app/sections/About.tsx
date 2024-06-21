import React from 'react'
import { SparklesCore } from "@/Components/ui/sparkles";
import { LinkPreview } from '@/Components/ui/link-preview';

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

        <div className='flex lg:flex-row flex-col w-full px-4 md:px-6 lg:px-0 gap-14 mt-10 justify-center'>

            <div className="about-sec">
                <h1 className='text-white text-4xl'>Get to know Me !</h1>
                <p className='text-gray-200 mt-5 text-lg text-justify'>
                     
                    I&apos;m a <HightLight text='Full Stack Web Developer'/> building and managing the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <LinkPreview url="/#about" className="font-bold">
                        Projects
                    </LinkPreview> section.
                    <br /> <br />
                    I&apos;m currently persuing my B.E in Information Science and Engineering from <LinkPreview url="http://rnsit.ac.in/" className="font-bold">
                        R.N.S Institute of Technology
                    </LinkPreview> in Bangalore , India
                    <br /> <br />
                    I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <HightLight text='contact'/> me.
                </p>
            </div>

            <div className='about-sec'>
                <h1 className='text-white text-4xl'>My Skills</h1>
                <div className='mt-5 w-full gap-4 flex flex-wrap'>
                    <Card text='HTML' color='text-orange-500'/>
                    <Card text='CSS' color='text-blue-500'/>
                    <Card text='JavaScript' color='text-yellow-300'/>
                    <Card text='React' color='text-[#58C4DC]'/>
                    <Card text='Tailwind Css' color='text-sky-400'/>
                    <Card text='React Router' color='text-red-500'/>
                    <Card text='Next Js' color='text-white'/>
                    <Card text='Git' color='text-orange-500'/>
                    <Card text='Github' color='text-white'/>
                    <Card text='Node Js' color='text-green-200'/>
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
        <div className={`bg-zinc-800 ${color.toString()} text-xl px-4 py-1 rounded-md`}>
            {text} 
        </div>
    )
}