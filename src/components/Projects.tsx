
import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [
    {
        id: 0,
    title: "Todo List ",
     desc: "A react & typescript based app for managing and organizing your tasks efficiently.",
    img: "/project5.jpg",
     tags: ["React","Node","CSS","Typescript"],
    },

    {
        id: 1,
    title: "Countdown Timer ",
     desc: "A Next.js and typescript powered website to track time with an interactive countdown feature.",
    img: "/project4.jpg",
     tags: ["Next.js","Node","CSS","Typescript"],
    },

    {
        id: 2,
    title: "Weather widget ",
     desc: "A Next.js & typescript based tool for fetching and displaying real-time weather data.",
    img: "/project3.jpg",
     tags: ["Next.js","Node","CSS","Typescript"],
    },

      
];

const Projects = () => {
  return (
    <div id='project' className='container pt-32'>
      <Heading title='My projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>  (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
