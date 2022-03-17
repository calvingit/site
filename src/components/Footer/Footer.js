import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__content'>
      Copyright © 2022 Calvin. Powered by{' '}
      <a href='https://create-react-app.dev/' className='link footer__link'>
        Create-React-App
      </a>
      .
    </div>
    <div className='footer__content'>
      <a href='https://beian.miit.gov.cn/' className='link footer__link'>
        粤ICP备2021161054号
      </a>
    </div>
  </footer>
)

export default Footer
