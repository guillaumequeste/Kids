//initial state
const initialKidsState = {
    background: 'rgb(207, 217, 228)',
    titre: 'block',
    color: 'black',
    titreGarcons: 'none',
    titreFilles: 'none',
    titreJungle: 'none',
    titreDesert: 'none',
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
            titreGarcons: 'block',
            titreFilles: 'none',
            titreJungle: 'none',
            titreDesert: 'none',
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
            titreGarcons: 'none',
            titreFilles: 'block',
            titreJungle: 'none',
            titreDesert: 'hidden',
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
            titreGarcons: 'none',
            titreFilles: 'none',
            titreJungle: 'block',
            titreDesert: 'hidden',
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
            titreGarcons: 'none',
            titreFilles: 'none',
            titreJungle: 'none',
            titreDesert: 'block',
            imgg: 'none',
            imgf: 'none',
            imgj: 'none',
            imgd: 'block'
        }
        default:
        return state;
    }
}
