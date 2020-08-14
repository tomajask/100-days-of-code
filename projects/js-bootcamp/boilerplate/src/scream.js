console.log('scream.js')

const scream = (string) => string.toUpperCase() + '!'

// export default scream          OR
export { scream as default }
