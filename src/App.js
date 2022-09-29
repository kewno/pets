import './App.css';
import {Routes, useParams} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import UiKit from './ui-kit/UiKit';
import Loader from "./components/Loader/Loader";
import Launch from "./components/Launch/Launch";
import Identification from "./components/Identification/Identification";
import Main from "./components/Main/Main";
import {useEffect, useState} from "react";
import {setTheme} from "./redux/reducer";
import {useDispatch} from "react-redux";
import Registr from "./components/Registr/Registr";
import Auth from "./components/Auth/Auth";
import PetsDetail from "./components/PetsDetail/PetsDetail";
import Pets from "./components/Pets/Pets";
import PageError from "./components/PageError/PageError";
import Start from "./components/Start/Start";

function App() {
    //let theme = useSelector(store => store.reducer.theme)

    let [launch, setLaunch] = useState(false)

    let dispatch = useDispatch()

    useEffect(() => {
        let a = localStorage.getItem('theme') || 'dark'
        dispatch(setTheme(a))


        setTimeout(() => {
            setLaunch(true)
        }, 2000)

    }, [])

    let itemsPets = [
        {id: 1, img: 'post-1.png', name: 'Bob', rank: 'Котенок', rankId : 'cat'},
        {id: 2, img: 'post-2.png', name: 'Жорик', rank: 'Котенок', rankId : 'cat'},
        {id: 3, img: 'post-3.png', name: 'Bob', rank: 'Котенок', rankId : 'cat'},
        {id: 4, img: 'post-4.png', name: 'Bob', rank: 'Котенок', rankId : 'cat'},
        {id: 5, img: 'post-5.png', name: 'Bob', rank: 'Котенок', rankId : 'cat'},
        // {id: 6, img: 'post-6.png', name: 'Bob', rank: 'Котенок', rankId : 'cat', coll: 159},
        // {id: 7, img: 'post-7.png', name: 'Bob', rank: 'Котенок', rankId : 'cat', coll: 127},
        // {id: 8, img: 'post-8.png', name: 'Bob', rank: 'Котенок', rankId : 'cat', coll: 213},
        // {id: 9, img: 'post-9.png', name: 'Bob', rank: 'Котенок', rankId : 'cat', coll: 154},
        // {id: 10, img: 'post-10.png', name: 'Bob', rank: 'Котенок', rankId : 'cat', coll: 134},
        // {id: 11, img: 'post-11.png', name: 'Bob', rank: 'Котенок', rankId : 'dog', coll: 140},
        // {id: 12, img: 'post-12.png', name: 'Bob', rank: 'Котенок', rankId : 'dog', coll: 147},
        // {id: 13, img: 'post-13.png', name: 'Песка', rank: 'Собака', rankId : 'dog', coll: 159}
    ]

  return (
      <BrowserRouter>
        <Routes>
            <Route path='*' element={<PageError />}/>
            <Route path='/' element={<Main />}/>
            <Route path='/auth' element={<Identification><Auth/></Identification>}/>
            <Route path='/registr' element={<Identification><Registr/></Identification>}/>
            <Route path='/launch' element={<Launch/>}/>
            <Route path='/start' element={<Start/>}/>
            {/*<Route path='*' element={<Identification/>}>*/}
            {/*  start  <Route path=':ident' element={<UiKit />}/>*/}
            {/*</Route>*/}
            {/*<Route path='/identification' element={<Identification/>}>*/}
            {/*    <Route path=':ident' element={<UiKit />}/>*/}
            {/*</Route>*/}
            {/*<Route path='*' element={<PetsDetail />}/>*/}
            <Route path='/pets-detail' element={<PetsDetail />}>
                <Route path='*' element={<PetsDetail />}/>
            </Route>
            <Route path='/loader' element={<Loader/>}/>
            <Route path='/ui-kit' element={<UiKit/>}>
                <Route path=':sellectPage' element={<UiKit />}/>
            </Route>

            <Route path='/pets' element={<Pets items={itemsPets}/>}>
                <Route path='*' element={<Pets />}/>
            </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;


// <BrowserRouter>
//     {launch ?
//         <Routes>
//             <Route path='*' element={<PageError />}/>
//             <Route path='/' element={<Main />}/>
//             <Route path='/auth' element={<Identification><Auth/></Identification>}/>
//             <Route path='/registr' element={<Identification><Registr/></Identification>}/>
//             <Route path='/launch' element={<Launch/>}/>
//             <Route path='/start' element={<Start/>}/>
//             {/*<Route path='*' element={<Identification/>}>*/}
//             {/*  start  <Route path=':ident' element={<UiKit />}/>*/}
//             {/*</Route>*/}
//             {/*<Route path='/identification' element={<Identification/>}>*/}
//             {/*    <Route path=':ident' element={<UiKit />}/>*/}
//             {/*</Route>*/}
//             {/*<Route path='*' element={<PetsDetail />}/>*/}
//             <Route path='/pets-detail' element={<PetsDetail />}>
//                 <Route path='*' element={<PetsDetail />}/>
//             </Route>
//             <Route path='/loader' element={<Loader/>}/>
//             <Route path='/ui-kit' element={<UiKit/>}>
//                 <Route path=':sellectPage' element={<UiKit />}/>
//             </Route>
//
//             <Route path='/pets' element={<Pets items={itemsPets}/>}>
//                 <Route path='*' element={<Pets />}/>
//             </Route>
//
//         </Routes>
//
//         :
//         <Launch/>
//     }
// </BrowserRouter>