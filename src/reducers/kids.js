//initial state
const initialKidsState = {
    background: 'white',
    color: 'black',
    titreGarcons: 'none',
    titreFilles: 'none',
};

//reducer
export default (state = initialKidsState, action) => {
    const { type } = action; // can also use { type, data }

    switch (type) {
        case 'GARCONS':
        return {
            ...state,
            background: 'rgb(26, 129, 247)',
            color: 'rgb(59, 249, 3)',
            titreGarcons: 'block',
            titreFilles: 'none'
        }
        case 'FILLES':
        return {
            ...state,
            background: 'rgb(240, 99, 221)',
            color: 'yellow',
            titreFilles: 'block',
            titreGarcons: 'none'
        }
        default:
        return state;
    }
}
