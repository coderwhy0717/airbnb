const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848A'
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222'
  },
  mixin: {
    boxShadow: `
        transition: box-shadow 250ms ease;
        &:hover {
          box-shadow: 0 2px 4px #ccc;
        }
    `,
    showShadow: `box-shadow: 0 2px 4px #ccc;`,
    position: `top: 50%;
    transform: translate(0, -70%);`,
    shadowPosition: `
    top: 50%;
    transform: translate(0, -50%);
    `
  }
}

export default theme
