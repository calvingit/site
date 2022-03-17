const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://zhangwen.site',
  title: "Calvin's Site",
  blog: 'https://blog.zhangwen.site',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Calvin',
  role: 'Full Stack Software Engineer',
  description:
    'I have ten years of development experience and have worked on a wide range of client platforms.In the past few years, I have mainly focused on iOS App development, but I plan to pay more attention to cross-platform technologies in the future. I am a self-motivated and self-driven individual who is always looking to learn new things and improve my skills.',
  links: {
    // resume: 'https://zhangwen.site/resume.pdf',
    github: 'https://github.com/calvingit',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Smart Home',
    description:
      'An IoT-based smart home that can control the lights, temperature, and humidity of a house, and send alarm notifications to the owner.',
    stack: ['Objective-C', 'Socket.IO', 'TCP/UDP'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Elderly Care',
    description:
      'A device can detect falling and monitor the sos/smoke/gas alarm, then send a notification to the elderly care center. ',
    stack: ['Swift', 'SwiftUI', 'Redux'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'iWashing',
    description:
      'After payed for the service by scanning the qrcode, the washing machine will wash and dry the clothes or shoes automatically.',
    stack: ['Swift', 'Wechat Pay', 'Alipay'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'iOS',
  'Objetive-C',
  'Swift',
  'SwiftUI',
  'Javascript',
  'Node',
  'React/React Native',
  'Flutter',
  'Electron',
  'Express',
  'Nginx',
  'Git',
  'CI/CD',
  'Docker',
  'Bash',
  'Python',
  'Raspberry-Pi',
  'C/C++',
  'Go',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'zhangwen.site(#)outlook.com',
  twitter: 'https://twitter.com/zhangwen_site',
}

export { header, about, projects, skills, contact }
