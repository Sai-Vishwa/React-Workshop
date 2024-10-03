import { PreviousButton } from "@/components/PreviousButton"
import { NextButton } from "@/components/NextButton"
import finalAppJSX from "@/assets/finalAppJSX.png"
import { useNavigate } from "react-router-dom"
export const CleanUp = (() => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#0a0a0a] md:px-0 px-5 min-h-screen text-[#f8fafc] leading-4 ">
            <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) - 1}`)}><PreviousButton></PreviousButton></span>
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) + 1}`)}><NextButton></NextButton></span>
            </div>
            <div className="min-h-screen flex pt-16">
                <div className="lg:mx-[14%] md:mx-[10%] xl:mx-[22%]">
                    <div className="text-5xl font-bold text">
                        Cleaning up the BoilerPlate Code
                    </div>
                    <div className="mt-10 md:text-2xl text-xl mb-16">
                        <p className="">
                            When you create a new React project using Vite, it generates a considerable amount of boilerplate code by default.
                        </p>
                        <p className="mt-3">This can be deleted to start with a fresh project</p>
                        <h3 className="mt-3">Clean up the App.jsx so that your final structure looks like this</h3>
                        <img src={finalAppJSX} alt="finalAppjsx" width={700} />
                        <ul className="list-disc ml-6 mt-3">
                            <li>Completely clean the index.css file</li>
                            <li className="mt-2">Delete App.css</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
})