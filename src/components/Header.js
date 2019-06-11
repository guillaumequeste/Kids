import React from 'react'
import './Header.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bgg, bgf, bgj, bgd } from '../actions/index';

const App = ({ bgg, bgf, bgj, bgd }) => (
  <div className="body">
    <button onClick={bgg} className="buttonGarcons">Thème garçons</button>
    <button onClick={bgf} className="buttonFilles">Thème filles</button>
    <button onClick={bgj} className="buttonJungle">Thème Jungle</button>
    <button onClick={bgd} className="buttonDesert">Thème désert</button>
  </div>
)

const mapStateToProps = (state) => ({
  background: state.kids.background
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  bgg,
  bgf,
  bgj,
  bgd
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);