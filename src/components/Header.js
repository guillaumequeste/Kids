import React from 'react'
import './Header.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bgg, bgf } from '../actions/index';

const App = ({ bgg, bgf }) => (
  <div className="body">
    <button onClick={bgg} className="buttonGarcons">Thème garçons</button>
    <button onClick={bgf} className="buttonFilles">Thème filles</button>
  </div>
)

const mapStateToProps = (state) => ({
  background: state.kids.background
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  bgg,
  bgf,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);