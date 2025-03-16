// pages/experience.js
"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Sample data - replace with your actual experience data
const experienceData = [
    {
    id: 1,
    title: "BSc Computer Science with Artificial Intelligence",
    company: "King's College London",
    period: "Sep 2022 - May 2025",
    description: "",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    type: "education" // work, education, commission
  },
    {
    id: 2,
    title: "Unity Learning Game",
    company: "Sujan Naik",
    period: "October 2024 - April 2025",
    description: "Develop an educational video game as part of a final year Knowledge Exchange Individual Project in Collaboration with IBM.",
    skills: ["Unity", "Blender", "Game Design", "LLMs"],
    type: "project",
      github: ""
  },

    {
    id: 3,
    title: "Develop personal portfolio - you're looking at it!",
    company: "Sujan Naik",
    period: "March 2025",
    description: "",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    type: "project",
      github: "sujan-naik.github.io"
  },
      {
    id: 4,
    title: "AI Web3 Internship Smallcap.ai ",
    company: "AI Tools",
    period: "July 2024 - August 2024",
    description: "Front-end and integration for a web application for users to upload their CV and have this interpreted and evaluated using artificial intelligence then displaying results",
    skills: ["UI/UX", "Figma", "Frontend Development", "Vue.js", "Bootstrap", "CSS"],
    type: "work"
  },

    {
    id: 5,
    title: "PollAnywhere",
    company: "Sujan Naik",
    period: "Jan 2024 - March 2024",
    description: "An interactive polling web application for Informatics Lecturers by \n" +
        "    Tanvir Sahota,\n" +
        "    Siqi Li,\n" +
        "    Sebastian Habram,\n" +
        "    Armaan Uddin,\n" +
        "    Omar Yahya,\n" +
        "    Harun Abukar,\n" +
        "    Saihan Marshall,\n" +
        "    Me.\n ",
    skills: ["MERN Stack", "Next.js", "Tailwind CSS", "JavaScript"],
    type: "project",
      github: "poll"
  },
  {
    id: 6,
    title: "Dingo",
    company: "Sujan Naik",
    period: "November 2023 - December 2023",
    description: "An interactive task-management tool developed by a 5 person team \n" +
        "    Omer Mohamed Osman Hussain,\n" +
        "    Tanvir Singh Sahota,\n" +
        "    George Taylor,\n" +
        "    Siqi Li,\n" +
        "    Me.\n"  ,
    skills: ["Django"],
    type: "project",
      github: "dingo"
  },

];


export default function Experience() {
  const [filter, setFilter] = useState('all');

  // Filter the experience data based on the selected filter
  const filteredData = filter === 'all'
    ? experienceData
    : experienceData.filter(item => item.type === filter);

  return (
    <>
      <Head>
        <title>My Experience | Portfolio</title>
        <meta name="description" content="Professional experience, projects, volunteering, commissions, and education" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">My Experience</h1>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`btn ${filter === 'all' ? 'btn-primary' : 'bg-[var(--muted)] text-[var(--foreground)]'} px-4 py-2`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('work')}
            className={`btn ${filter === 'work' ? 'btn-primary' : 'bg-[var(--muted)] text-[var(--foreground)]'} px-4 py-2`}
          >
            Work
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`btn ${filter === 'education' ? 'btn-primary' : 'bg-[var(--muted)] text-[var(--foreground)]'} px-4 py-2`}
          >
            Education
          </button>
          <button
            onClick={() => setFilter('project')}
            className={`btn ${filter === 'project' ? 'btn-primary' : 'bg-[var(--muted)] text-[var(--foreground)]'} px-4 py-2`}
          >
            Projects
          </button>
          <button
            onClick={() => setFilter('commission')}
            className={`btn ${filter === 'commission' ? 'btn-primary' : 'bg-[var(--muted)] text-[var(--foreground)]'} px-4 py-2`}
          >
            Commissions
          </button>
          <button
            onClick={() => setFilter('volunteering')}
            className={`btn ${filter === 'volunteering' ? 'btn-primary' : 'bg-[var(--muted)] text-[var(--foreground)]'} px-4 py-2`}
          >
            Volunteering
          </button>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-[var(--color-primary)] transform -translate-x-1/2 z-0"></div>


          {/* Timeline items */}
          <div className="space-y-12">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div key={item.id} className="relative z-10">
                  {/* Date indicator - Increased top padding to prevent overlap with dot */}
                  <div className=" md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[var(--color-primary)] text-white px-4 py-1 rounded-full font-medium text-sm mb-4 md:mb-0 inline-block md:mt-10">
                    {item.period}
                  </div>

                  {/* Experience card - Added top margin to prevent overlap with date/dot */}
                  <div className={`project-card md:w-4/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} md:mt-16`}>
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      {/* Badge indicating experience type */}
                      <span className={`
                        ${item.type === 'work' ? 'badge-primary' : 
                          item.type === 'commission' ? 'badge-secondary' : 
                          item.type === 'education' ? 'badge-tertiary' :
                          item.type === 'project' ? 'badge-highlight' :
                          'bg-[var(--color-tertiary-dark)] text-white badge'} 
                        shrink-0
                      `}>
                        {item.type === 'work' ? 'Work' :
                         item.type === 'commission' ? 'Commission' :
                         item.type === 'education' ? 'Education' :
                         item.type === 'project' ? 'Project' :
                         'Volunteering'}
                      </span>
                      {/* Modified title to allow proper wrapping */}
                      <h3 className="project-card-title break-words">
                        {item.title}
                      </h3>
                    </div>

                    <h4 className="text-md font-medium mb-2">{item.company}</h4>

                    <p className="text-[var(--muted-foreground)] mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map(skill => (
                        <span key={skill} className="badge-highlight">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Show more details button for projects */}
                    {item.type === 'project' && (
                      <div className="mt-4 flex justify-end">
                        <Link href={`/projects/${item.github}`} className="btn-sm btn-primary">
                          View Project →
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot with appropriate color - Modified for better positioning */}
                  <div className={`absolute top-0 left-0 md:left-1/2 w-6 h-6 
                    ${item.type === 'work' ? 'bg-[var(--color-primary-dark)]' : 
                      item.type === 'commission' ? 'bg-[var(--color-secondary-dark)]' : 
                      item.type === 'education' ? 'bg-[var(--color-tertiary-dark)]' :
                      item.type === 'project' ? 'bg-[var(--color-highlight-dark)]' :
                      'bg-[var(--color-tertiary-dark)]'} 
                    border-4 border-[var(--background)] rounded-full transform -translate-x-1/2`}>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-[var(--muted-foreground)]">No items found for this category.</p>
              </div>
            )}`
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-[var(--muted-foreground)]">
            Interested in working together? Let's connect!
          </p>
          {/*<Link href="/contact" className="btn-primary px-6 py-2">*/}
          {/*  Contact Me*/}
          {/*</Link>*/}
        </div>
      </main>
    </>)
}
