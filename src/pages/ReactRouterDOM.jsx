import { NextButton } from "../components/NextButton"
import { PreviousButton } from "@/components/PreviousButton"
import { CopyBlock, dracula } from 'react-code-blocks';
import { useNavigate } from "react-router-dom";

export const ReactRouterDOM = (() => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#0a0a0a] px-5 md:px-0 min-h-screen text-[#f8fafc] leading-4 ">
            <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) - 1}`)}><PreviousButton /></span>
                <span onClick={() => navigate(`/`)}><NextButton /></span>
            </div>
            <div className="min-h-screen flex pt-16">
            <div className="lg:mx-[14%] md:mx-[10%] xl:mx-[22%]">
                    <div className="text-5xl font-bold">
                        Understanding React Router DOM
                    </div>
                    <div className="text-xl md:text-2xl mt-6 mb-8">
                            <p>
                            React Router DOM is the standard routing library available in React. It allows to navigate between different pages without full page reloads. It enables dynamic routing to map URLs to React components seamlessly.
                            <br /></p><br />
                            <p className="font-semibold">
                                React Router DOM is an additional library in React which must be installed at the terminal.
                            </p>
                    </div>
                    <div className="text-xl mt-2">
                                <CopyBlock
                                    text={`npm install react-router-dom`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>
                    <div className="text-xl md:text-2xl mt-6 mb-16">
                        <p className="font-semibold">
                            Major Functional Components in React Router DOM
                        </p>
                    
                    <ul className="list-disc ml-6 text-2xl">
                                <li className="mt-3"><span className="font-bold">Browser Router:</span>Provide routing capabilities </li>
                                <li className="mt-3"><span className="font-bold">Routes:</span>It is used to group multiple Route components.</li>
                                <li className="mt-3"><span className="font-bold">Route:</span>Maps a path to a component.When the path matches the current URL, the specified component is rendered.</li>
                    </ul>
                    </div>
                    <h3 className="text-4xl my-10 font-bold mb-10">Standard Syntax for React Router DOM</h3>
                    <div className="text-xl md:text-2xl mt-6 mb-16">
                        <p>
                            This is how the App.jsx file will look of the website you are using now.
                        </p>
                    </div>
                    <div className="text-xl mt-2 mb-16">
                                <CopyBlock
                                    text={`
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //importing functional components from rrd

//importing functional components of pages
import { Setup } from './pages/setup';
import { Home } from './pages/home';
import { FolderStructure } from './pages/folderStructure';
import { CleanUp } from './pages/CleanUp';
import { ComponentsOverview } from './pages/component';
import { UseStateOverview } from './pages/useStateOverview';
import { UseEffectOverview } from './pages/useEffectOverview';
import { HooksOverview } from './pages/hooksOverview';
import { UseStatePreviousState } from './pages/UseStatePreviousState';
import { UseMemo } from './pages/UseMemo';
import { ReactRouterDOM } from './pages/ReactRouterDOM';
import { UseNavigate } from './pages/UseNavigate';

function App() {
return (
<BrowserRouter>
    <Routes>
        //path = route element = functional component
        <Route path='/' element={<Home/>}/>
        <Route path="/slide/1" element={<Setup/>}/>
        <Route path="/slide/2" element={<FolderStructure/>}/>
        <Route path="/slide/3" element={<CleanUp/>}/>
        <Route path="/slide/4" element={<ComponentsOverview/>}/>
        <Route path="/slide/5" element={<HooksOverview/>}/>
        <Route path="/slide/6" element={<UseStateOverview/>}/>
        <Route path='/slide/7' element={<UseStatePreviousState/>}/>
        <Route path="/slide/8" element={<UseEffectOverview/>}/>
        <Route path="/slide/9" element={<UseMemo/>}/>
        <Route path="/slide/10" element={<ReactRouterDOM/>}/>
        <Route path="/slide/11" element={<UseNavigate/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>
                            <h3 className="text-4xl my-10 font-bold mb-10">useNavigate - Hook in React Router DOM</h3>
                            <div className="text-xl md:text-2xl mt-6 mb-16">
                        <p>
                        useNavigate is a HOOK provided by React Router to programmatically navigate between routes inside the app. It's used for navigating to different views or handling redirects.
                        <br />
                        <br />
                        Declaring and using useNavigate in code
                        </p>
                    </div>
                    <div className="text-xl mt-2 mb-16">
                                <CopyBlock
                                    text={`
import { useNavigate } from "react-router-dom";
export const Page1 = (()=>{
    const nav = useNavigate(); //declaring a useNavigate hook

    return (<>
        <button onClick={()=>{nav('/Page2')}} >Click to navigate to Page 2</button>
    </>)
})`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>
            </div>
            </div>
        </div>)
})