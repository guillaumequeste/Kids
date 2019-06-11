import React from 'react'
import './Kids.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { bgg, bgf, bgj, bgd } from '../actions/index'

const Kids = ({ background, titre, color, titreGarcons, titreFilles, titreJungle, titreDesert, imgg, imgf, imgj, imgd }) => (
    <div style={{background:`${background}`}} className="bodyKids">
        <div className="pStyle">
            <p style={{color:`${color}`}} className="essai">Ceci est un essai React-Redux :</p>
            <p style={{display:`${titre}`}}>Choisis ton thème</p>
            <p style={{display:`${titreGarcons}`,color:`${color}`}}>Garçons</p>
            <p style={{display:`${titreFilles}`,color:`${color}`}}>Filles</p>
            <p style={{display:`${titreJungle}`,color:`${color}`}}>Jungle</p>
            <p style={{display:`${titreDesert}`,color:`${color}`}}>Désert</p>
            
        </div>
        <div>
            <img src={require("../img/ball.png")} alt="ball" className="imgg" style={{display:`${imgg}`}}></img>
            <img src={require("../img/poney.png")} alt="poney" className="imgf" style={{display:`${imgf}`}}></img>
            <img src={require("../img/tiger.png")} alt="tiger" className="imgj" style={{display:`${imgj}`}}></img>
            <img src={require("../img/oasis.png")} alt="oasis" className="imgd" style={{display:`${imgd}`}}></img>
        </div>
        <div>
            <img src={require("../img/voiture.png")} alt="ball" className="imgg2" style={{display:`${imgg}`}}></img>
            <img src={require("../img/barbie.png")} alt="poney" className="imgf2" style={{display:`${imgf}`}}></img>
            <img src={require("../img/singe.png")} alt="tiger" className="imgj2" style={{display:`${imgj}`}}></img>
            <img src={require("../img/chameau.png")} alt="oasis" className="imgd2" style={{display:`${imgd}`}}></img>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    background: state.kids.background,
    titre: state.kids.titre,
    color: state.kids.color,
    titreGarcons: state.kids.titreGarcons,
    titreFilles: state.kids.titreFilles,
    titreJungle: state.kids.titreJungle,
    titreDesert: state.kids.titreDesert,
    imgg: state.kids.imgg,
    imgf: state.kids.imgf,
    imgj: state.kids.imgj,
    imgd: state.kids.imgd
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    bgg,
    bgf,
    bgj,
    bgd
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Kids);