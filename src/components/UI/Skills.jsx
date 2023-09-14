import React from 'react'

import { skills } from '../../data/constants'

const Skills = () => {
  return (
    <section id="skills">
      <div className='container'>
        <h2>Skills</h2>
        <p>Here are some of my skills on which I have been working on for the past 2 years.
        </p>
        <div >
          {skills.map((skill) => (
            <div>
              <h3>{skill.title}</h3>
              <ul>
                {skill.skills.map((item) => (
                  <div>
                    <img src={item.image}/>
                    {item.name}
                  </div>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills