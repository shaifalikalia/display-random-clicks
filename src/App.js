/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { connect } from "react-redux";
import { getImageFromActionCreater } from "./actions/action";

function App(props) {
  console.log('props******', props.currentImg);
  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          onClick={() => props.selectCurrentImage()}
        >
          <img src={props.currentImg} className="App-logo" alt="logo" />
      </a>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentImg: state.currentImage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCurrentImage: () => dispatch(getImageFromActionCreater())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
