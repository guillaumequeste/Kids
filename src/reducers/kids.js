//initial state
const initialKidsState = {
    background: 'rgb(207, 217, 228)',
    titre: 'block',
    color: 'black',
    titreTheme: 'Choisis ton thème',
    imgg: 'none',
    imgf: 'none',
    imgj: 'none',
    imgd: 'none'
};

//reducer
export default (state = initialKidsState, action) => {
    const { type } = action; // can also use { type, data }

    switch (type) {
        case 'GARCONS':
        return {
            ...state,
            background: 'rgb(26, 129, 247)',
            titre: 'none',
            color: 'white',
            titreTheme: 'Garçons',
            imgg: 'block',
            imgf: 'none',
            imgj: 'none',
            imgd: 'none'
        }
        case 'FILLES':
        return {
            ...state,
            background: 'rgb(240, 99, 221)',
            titre: 'none',
            color: 'yellow',
            titreTheme: 'Filles',
            imgg: 'none',
            imgf: 'block',
            imgj: 'none',
            imgd: 'none'
        }
        case 'JUNGLE':
        return {
            ...state,
            background: 'rgb(0, 187, 9)',
            titre: 'none',
            color: 'rgb(118, 69, 0)',
            titreTheme: 'Jungle',
            imgg: 'none',
            imgf: 'none',
            imgj: 'block',
            imgd: 'none'
        }
        case 'DESERT':
        return {
            ...state,
            background: 'rgb(255, 238, 1)',
            titre: 'none',
            color: 'black',
            titreTheme: 'Désert',
            imgg: 'none',
            imgf: 'none',
            imgj: 'none',
            imgd: 'block'
        }
        default:
        return state;
    }
}
