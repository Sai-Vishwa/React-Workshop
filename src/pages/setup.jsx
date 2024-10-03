import { Button } from "../components/ui/button"
import { NextButton } from "../components/NextButton"
import { PreviousButton } from "@/components/PreviousButton"
import { CopyBlock, dracula } from 'react-code-blocks';
import { useNavigate } from "react-router-dom";
export const Setup = (() => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#0a0a0a] min-h-screen px-5 md:px-0 text-[#f8fafc] leading-4">
            <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
            <span onClick={() => navigate(`/`)}>
                    <PreviousButton />
                </span>
                <span onClick={()=> navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) + 1}`)}><NextButton></NextButton></span>
            </div>
            <div className="min-h-screen flex pt-16 ">
            <div className="lg:mx-[14%] md:mx-[10%] xl:mx-[22%]">
                    <div className="text-5xl font-bold">
                        Setting Up a React Project
                    </div>
                    <div className="mt-10">
                        <p className="md:text-2xl text-xl font-semibold ">
                            Pre-requisite: Make sure you have Node JS installed.
                        </p>
                        <div className="text-xl md:text-2xl mt-6 mb-16">
                            <p>
                                There are two easy ways to setup the React Project locally on your system.
                            </p>
                            <ul className="list-disc mt-3 ml-6 ">
                                <li>Create React App</li>
                                <li>Vite</li>
                            </ul>
                            <h4 className="my-10 ">To setup using Vite</h4>
                            <div className="text-xl mt-2">
                                <CopyBlock text={"npm create vite@latest"}
                                    language={"bash"}
                                    theme={dracula}
                                    wrapLongLines>
                                </CopyBlock>
                            </div>
                            <h3 className=" text-4xl my-10 font-bold ">What is Vite?</h3>
                            <p className="text-xl">
                                Vite is a modern build tool that provides a faster and leaner development experience for modern web projects
                            </p>
                            <h3 className=" my-7 font-bold">Vite has two key features:</h3>
                            <ul className="list-disc ml-6">
                                <li><span >Instant Dev Server</span></li>
                                <li className="mt-4"><span>Optimized Build</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})