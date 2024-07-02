import React from 'react'
import './Github.css'
import Resume from '../../assets/Resume'

export default function Github() {
  const githubdata = Resume.githubdata;
  return (
    <>
      <div className="github-main-container">
        <div className="github-container">
          <h2 className='git_subheadings'>Explore</h2>
          <>
            <h1 align="center" >
              <img className='headline-style' src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=👋+Hello,+Future+Collaborator!;🇮🇳+i'am+Buddhadeb+Koner;" />
            </h1>
            <p
              className='dece-paragraph'
              align="center" dangerouslySetInnerHTML={{ __html: Resume.githubdata.desc }}></p>
            <br />
            <h2 className='git_subheadings'>Known  Technologysnpm</h2>
            <div align="center" className='langiage-icons'>
              {githubdata.language.split(',').map((skill, index) => (
                <img
                  key={index}
                  src={`https://skillicons.dev/icons?i=${skill}`}
                  alt={skill}
                />
              ))}
            </div>

            <h2 className='git_subheadings'>Commits</h2>
            <div className='commits-github' >
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=BuddhadebKoner&theme=dark&hide_border=false"
                alt=""
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=BuddhadebKoner&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
                alt=""
              />
            </div>
            <p />

            <p />
            <div>
              <img
                src="https://github-profile-trophy.vercel.app/?username=BuddhadebKoner&theme=radical&no-frame=false&no-bg=true&margin-w=10"
                alt=""
              />
            </div>
            <p />
          </>
        </div>
      </div>
    </>
  )
}
