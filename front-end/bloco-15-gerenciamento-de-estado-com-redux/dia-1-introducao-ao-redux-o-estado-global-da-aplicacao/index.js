
const  NEXT_COLOR = (index) => (
  {
  type: "NEXT",
  index});

const  PREVIOUS_COLOR = (index) => ({
    type: "PREVIOUS",
    index});

// const  RANDOM_COLOR = (randomColor) => ({
//     type: "RANDOM",
//     randomColor});

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

let caso;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case caso:
      return {
        ...state,
        // colors: caso === 'RANDOM'? [...state.colors, action.randomColor] : null,
        index: if(caso === 'NEXT'){}
        // caso === 'NEXT'? state.index + action.index : state.index - action.index,
        
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

function sendNext () {
  caso = 'NEXT'
  if (store.getState().index < store.getState().colors.length-1){
    store.dispatch(NEXT_COLOR(1))
  }
  let value = document.getElementById("value")
  let container = document.getElementById("container")
  container.style.backgroundColor = store.getState().colors[store.getState().index]
  value.innerHTML = store.getState().colors[store.getState().index]
  console.log(store.getState().index)
}

function sendPrevious () {
  caso = 'PREVIOUS'
  if (store.getState().index > 0){
    store.dispatch(PREVIOUS_COLOR(1))
  }
  let value = document.getElementById("value")
  container.style.backgroundColor = store.getState().colors[store.getState().index]
  value.innerHTML = store.getState().colors[store.getState().index]
  console.log(store.getState().index)
}

// function criarCor() {
//   const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//   let cor = '#';
//   const aleatorio = () => Math.floor(Math.random() * oneChar.length);
//   for (let i = 0; i < 6; i += 1) {
//       cor += oneChar[aleatorio()];
//   }
//   return cor;
// }

// function sendRandom () {
//   caso = 'RANDOM'
//   let value = document.getElementById("value")
//   container.style.backgroundColor = store.getState().colors[store.getState().index]
//   value.innerHTML = store.getState().colors[store.getState().index]
//   console.log(store.getState().index)
// }

// const randomBtn = document.getElementById("random")
// randomBtn.addEventListener('click', sendRandom)

const nextBtn = document.getElementById("next")
nextBtn.addEventListener('click', sendNext)

const previousBtn = document.getElementById("previous")
previousBtn.addEventListener('click', sendPrevious)
