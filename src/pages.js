'use strict'

export default {
  '/': {
    H1: 'Hello Symbols',
    P: 'Lorem ipsum dolor sit amet',
    TestComponent: {},
    Link: {
      props: {
        href: '/about',
        ':hover': {
          '& svg': {
            margin: '- Y - -'
          }
        }
      },
      Icon: {
        transition: 'margin ease A',
        margin: '- X - -',
        name: 'arrow up right'
      },
      Span: 'About us'
    }
  },
  '/about': {
    H3: 'This is Symbols starter-kit',
    P: 'Lorem ipsum dolor sit amet',
    Link: {
      href: '/',
      text: 'Go Back'
    }
  }
}
