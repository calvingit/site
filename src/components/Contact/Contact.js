import { useState } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import { contact } from '../../portfolio'
import './Contact.css'
import '../About/About.css'

const copyToClipboard = (text) => {
  const ta = document.createElement('textarea')
  ta.innerText = text
  document.body.appendChild(ta)
  ta.select()
  document.execCommand('copy')
  ta.remove()
}

const Contact = () => {
  if (!contact.email) return null
  const email = contact.email.replace('(#)', '@')
  const [clicked, setClicked] = useState(false)

  const clickAction = () => {
    copyToClipboard(email)
    setClicked(true)
    if (clicked) {
      return
    }
    setTimeout(() => {
      setClicked(false)
    }, 2000)
  }
  return (
    <section className='section contact center about' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='about__contact center'>
        <button
          type='button'
          className='btn btn--outline'
          onClick={clickAction}
        >
          {clicked ? 'Copied' : 'Email Me'}
        </button>

        {contact.twitter && (
          <a
            href={contact.twitter}
            aria-label='twitter'
            className='link link--icon'
          >
            <TwitterIcon />
          </a>
        )}
      </div>
    </section>
  )
}

export default Contact
