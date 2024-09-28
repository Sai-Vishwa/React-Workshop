import { Button } from "../components/ui/button"
import { NextButton } from "../components/NextButton"
import { PreviousButton } from "@/components/PreviousButton"
import { CopyBlock, dracula } from 'react-code-blocks';
export const Setup = (() => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-[#f8fafc] leading-4">
            <div className="fixed bottom-8 right-8 flex space-x-6">
                <PreviousButton></PreviousButton>
                <NextButton></NextButton>
            </div>
            <div className="min-h-screen flex pt-16 ">
                <div className="md:mx-[22%]">
                    <div className="text-5xl font-bold">
                        Setting Up a React Project
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl font-semibold ">
                            Pre-requisite: Make sure you have Node JS installed.
                        </p>
                        <div className="text-2xl mt-6">
                            <p>
                                There are two easy ways to setup the React Project locally on your system.
                            </p>
                            <ul className="list-disc mt-3 ml-6 font-semibold">
                                <li>Create React App</li>
                                <li>Vite</li>
                            </ul>
                            <h4 className="mt-5 font-semibold">To Install Vite</h4>
                            <div className="text-xl mt-2">
                                <CopyBlock text={"npm create vite@latest"}
                                    language={"bash"}
                                    theme={dracula}
                                    wrapLongLines>
                                </CopyBlock>
                            </div>
                            <h3 className="font-semibold my-5">What is Vite?</h3>
                            <p>
                                Vite is a modern build tool that provides a faster and leaner development experience for modern web projects
                            </p>
                            <h3 className="font-semibold my-5">Vite has two key features:</h3>
                            <ul className="list-disc ml-6">
                                <li><span className="font-bold">Instant Dev Server:</span> Unlike traditional bundlers, Vite uses native ES module imports in the browser. This results in instant server start times, regardless of the size of your application</li>
                                <li className="mt-4"><span className="font-bold">Optimized Build:</span> Vite uses Rollup under the hood for production builds, allowing for optimized bundling, tree-shaking, and support for modern JavaScript features</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})