import './App.css';
import {Routes} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import UiKit from './ui-kit/UiKit';
import Loader from "./components/Loader/Loader";
import Launch from "./components/Launch/Launch";
import Start from "./components/Start/Start";
import Identification from "./components/Identification/Identification";
import Main from "./components/Main/Main";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            {/*<Route Identification path='/ui-kit/:ui-Id' element={<UiKit/>}/>*/}
            <Route path='*' element={<Main />}/>
            <Route path='/auth' element={<Identification/>}/>
            <Route path='/registr' element={<Identification/>}/>
            {/*<Route path='*' element={<Identification/>}>*/}
            {/*    <Route path=':ident' element={<UiKit />}/>*/}
            {/*</Route>*/}

            {/*<Route path='/identification' element={<Identification/>}>*/}
            {/*    <Route path=':ident' element={<UiKit />}/>*/}
            {/*</Route>*/}
            <Route path='/start' element={<Start/>}/>
            <Route path='/loader' element={<Loader/>}/>
            <Route path='/ui-kit' element={<UiKit/>}>
                <Route path=':sellectPage' element={<UiKit />}/>
            </Route>
            {/*<Route path='*' element={<UiKit/>}/>*/}

          {/*<Route path='/ui-kit' element={<UiKit/>}>*/}
          {/*  <Route path='sellectPage' element={<UiKit />}/>*/}
          {/*</Route>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
