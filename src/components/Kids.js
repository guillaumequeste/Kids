import React from 'react'
import './Kids.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { bgg, bgf } from '../actions/index'

const Kids = ({ background, color, titreGarcons, titreFilles }) => (
    <div style={{backgroundColor:`${background}`}} className="bodyKids">
        <div className="pStyle">
            <p style={{display:`${titreGarcons}`,color:`${color}`}}>Garçons</p>
            <p style={{display:`${titreFilles}`,color:`${color}`}}>Filles</p>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    background: state.kids.background,
    color: state.kids.color,
    titreGarcons: state.kids.titreGarcons,
    titreFilles: state.kids.titreFilles
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    bgg,
    bgf,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Kids);