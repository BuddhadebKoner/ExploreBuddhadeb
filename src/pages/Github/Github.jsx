import React from 'react'
import './Github.css'
import ApiDataResponce from '../../Api/apiresponce'

export default function Github() {
  return (
    <>
      <div className="github-main-container">
        <div className="github-container">
          <h2 className='git_subheadings'>Explore</h2>
          <>
            <h1 align="center" >
              <img className='headline-style' src={ApiDataResponce.githubData.heroText} />
            </h1>
            <p
              className='dece-paragraph'
              align="center" dangerouslySetInnerHTML={{ __html: ApiDataResponce.githubData.desc }}></p>
            <br />
            <h2 className='git_subheadings'>Known  Technologysnpm</h2>
            <div align="center" className='langiage-icons'>
              {ApiDataResponce.githubData.language.split(',').map((skill, index) => (
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
                src={ApiDataResponce.githubData.githubCommits}
                alt=""
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={ApiDataResponce.githubData.mostUseLang}
                alt=""
              />
            </div>
            <p />

            <p />
            <div>
              <img
                src={ApiDataResponce.githubData.trophys}
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
