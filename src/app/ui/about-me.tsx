import PrimaryTabs from "@/app/ui/components/Tabs/primary-tabs";
import PreviewCard from "@/app/ui/preview-card";
import SecondaryButton from "@/app/ui/components/Button/secondary-button";
import React from "react";

export default function AboutMe(){

    const bioTitles = ['Education', 'Web Development', 'App Development', 'Game Development', 'Hobbies']
    return (
        <PrimaryTabs tabs={bioTitles}>
                    <div>
                                            <h2>Education</h2>
                        <ol className="">
              <li>
                  King’s College London [September 2022 - May 2025]
                  <p> BSc Computer Science with an AI Specialisation </p>
              </li>
              <li>
                  City of London School [September 2020 - June 2022]
                  <p>A-Levels</p>
                  <p> Economics A* </p>
                  <p> Mathematics A* </p>
                  <p> Further Mathematics A*</p>
              </li>
            </ol>
                    </div>
<div>
  <h2>Web Development</h2>
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{ minWidth: '10vw' }}>
      <h3>Frontend Technologies</h3>
      <ul>
        <li>Vue.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Bootstrap</li>
        <li>CSS</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Backend Technologies</h3>
      <ul>
        <li>Flask</li>
        <li>Django</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Deployment & Hosting</h3>
      <ul>
        <li>Vercel</li>
        <li>Render</li>
        <li>Supabase</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Communication & Authentication</h3>
      <ul>
        <li>Axios</li>
        <li>JWT</li>
        <li>WebSockets API</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Testing & Methodologies</h3>
      <ul>
        <li>Test-Driven Development</li>
        <li>Jest</li>
        <li>React Testing Library</li>
        <li>Agile</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Design & Prototyping</h3>
      <ul>
        <li>Figma</li>
        <li>Canva</li>
      </ul>
    </div>
  </div>
</div>
                    <div>
  <h2>App Development</h2>
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div style={{ minWidth: '10vw' }}>
      <h3>Frameworks & Libraries</h3>
      <ul>
        <li>Electron</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>React Router DOM</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Build Tools & Configuration</h3>
      <ul>
        <li>Electron Forge</li>
        <li>webpack, ts-loader</li>
        <li>TypeScript compiler</li>
        <li>ESLint</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>APIs</h3>
      <ul>
        <li>Google API</li>
        <li>Google Auth Library)</li>
      </ul>
    </div>
  </div>
</div>
                    <div>
  <h2>Game Development</h2>
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div style={{ minWidth: '10vw' }}>
      <h3>Game Engines & Tools</h3>
      <ul>
        <li>Unreal Engine</li>
        <li>Unity</li>
        <li>Blender (Modeling & Animation)</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Core Mechanics & Systems</h3>
      <ul>
        <li>Procedural Terrain Generation</li>
        <li>Player Movement & Combat Systems</li>
        <li>Ability & Weapon Systems</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>AI & Educational Components</h3>
      <ul>
        <li>Locally Hosted Language Model for Dynamic Content</li>
        <li>Text-to-Speech for Audio Feedback</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Courses</h3>
        <ul>
      <li> <a href={"https://learn.unity.com/pathway/unity-essentials"}> Unity Essentials </a></li>
      <li> <a href={"https://learn.unity.com/pathway/junior-programmer"}> Unity Junior Programmer (in progress) </a></li>
        </ul>
    </div>
  </div>
</div>
                    <div>
  <h2>Hobbies</h2>
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div style={{ minWidth: '10vw' }}>
      <h3>Music</h3>
      <ul>
        <li>Grade 7 Electric Guitarist</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Gaming & Modding</h3>
      <ul>
        <li>Recording gameplay of indie games</li>
        <li>Game modding</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Fitness & Sports</h3>
      <ul>
        <li>Bouldering</li>
        <li>Weightlifting</li>
      </ul>
    </div>
    <div style={{ minWidth: '10vw' }}>
      <h3>Professional Work</h3>
      <ul>
        <li>Freelancer for Software Engineering (SWE)</li>
      </ul>
    </div>
  </div>
</div>

                </PrimaryTabs>
    )
}