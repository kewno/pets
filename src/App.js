import './App.css';
import {Routes} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import UiKit from './ui-kit/UiKit';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            {/*<Route path='/ui-kit/:ui-Id' element={<UiKit/>}/>*/}

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
