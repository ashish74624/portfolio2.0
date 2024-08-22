import React from 'react'
import { SparklesCore } from "@/Components/ui/sparkles";
import { LinkPreview } from '@/Components/ui/link-preview';
import Heading from '@/Components/Heading';

export default function About() {
    return (
        <section className='w-full h-screen z-10 flex flex-col' id='about'>
            <Heading heading='About Me' />

            <div className='flex lg:flex-row flex-col w-full px-4 md:px-6 lg:px-0 gap-14 mt-10 justify-center'>

                <div className="about-sec">
                    <h1 className='text-white text-4xl'>Get to know Me !</h1>
                    <p className='text-gray-200 mt-5 text-lg text-justify'>

                        I&apos;m a <HightLight text='Full Stack Web Developer' /> building and managing the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <LinkPreview url="#project" className="font-bold">
                            Projects
                        </LinkPreview> section.
                        <br /> <br />
                        I&apos;m currently persuing my B.E in Information Science and Engineering from <LinkPreview url="http://rnsit.ac.in/" className="font-bold">
                            R.N.S Institute of Technology
                        </LinkPreview> in Bangalore , India
                        <br /> <br />
                        I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <HightLight text='contact' /> me.
                    </p>
                </div>

                <div className='about-sec'>
                    <h1 className='text-white text-4xl'>My Skills</h1>
                    <div className='mt-5 w-full gap-4 flex flex-wrap'>
                        <Card text='HTML' />
                        <Card text='CSS' />
                        <Card text='JavaScript' />
                        <Card text='React' />
                        <Card text='Tailwind Css' />
                        <Card text='React Router' />
                        <Card text='Next Js' />
                        <Card text='Git' />
                        <Card text='Github' />
                        <Card text='Node Js' />
                        <Card text='Express Js' />
                        <Card text='Mongo Db' />
                    </div>
                </div>
            </div>
        </section>
    )
}

interface Props {
    text: string
}

interface CardProps {
    text: string;
}

function HightLight({ text }: Props) {
    return <span className='text-[#89b0ff]'>{text}</span>
}

function Card({ text }: CardProps) {
    return (
        <div className={`bg-zinc-800 text-white border border-blueDash text-xl px-4 py-1 rounded-md`}>
            {text}
        </div>
    )
}