import GitHubIcon from '@material-ui/icons/GitHub'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, links } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I&apos;m <span className='about__name'>{name}</span>.
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        <>
          {links.resume && (
            <a href={links.resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {links.github && (
            <a
              href={links.github}
              aria-label='github'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}
        </>
      </div>
    </div>
  )
}

export default About
