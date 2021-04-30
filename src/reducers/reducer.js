const imageBasePath = ''
const istate = {
  images: ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png'],
  currentImage: imageBasePath + 'image1.png'
}

const reducer = (state = istate, action) => {
  switch (action.type) {
    case 'CHANGE_IMAGE': {
      let currentImage = imageBasePath + state.images[Math.floor(Math.random() * 5)]
      return {
        ...state,
        currentImage
      }
      
    }
     
    default:
      return state;
  }
}

export default reducer;