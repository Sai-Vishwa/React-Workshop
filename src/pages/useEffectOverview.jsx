import { Button } from "../components/ui/button";
import { NextButton } from "../components/NextButton";
import { PreviousButton } from "@/components/PreviousButton";
import { CopyBlock, dracula } from 'react-code-blocks';
import { useNavigate } from "react-router-dom";

export const UseEffectOverview = (() => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#0a0a0a] px-5 md:px-0  min-h-screen text-[#f8fafc] leading-4">
            <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) - 1}`)}>
                    <PreviousButton />
                </span>
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) + 1}`)}>
                    <NextButton />
                </span>
            </div>

            <div className="min-h-screen flex pt-16">
            <div className="lg:mx-[14%] md:mx-[10%] xl:mx-[22%]">
                    <div className="text-5xl font-bold">
                        Understanding `useEffect` Hook in React
                    </div>

                    <div className="mt-10">
                        <p className="text-2xl font-semibold">
                            What is `useEffect` in React?
                        </p>
                        <div className="text-2xl mt-6">
                            <p>
                                The `useEffect` hook allows you to perform side effects in functional components. It is called after the component renders, and you can use it to fetch data, directly manipulate the DOM, or set up subscriptions.
                            </p>

                            <h3 className="text-4xl my-10 font-bold">Basic Usage of `useEffect`</h3>
                            <p>
                                Here's how you can use the `useEffect` hook:
                            </p>

                            <div className="text-xl mt-2">
                                <CopyBlock
                                    text={`import React, { useEffect, useState } from 'react';

const DataFetchingComponent = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []); // Empty dependency array means it runs once when the component mounts

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>

                            <h3 className="text-4xl my-10 font-bold">How `useEffect` Works</h3>
                            <p>
                                The `useEffect` hook takes two arguments:
                            </p>
                            <ul className="list-disc ml-6">
                                <li className="mt-3"><span className="font-bold">Effect Function:</span> A function containing the side-effect logic.</li>
                                <li className="mt-3"><span className="font-bold">Dependency Array:</span> An array that determines when to run the effect. If it's empty, the effect runs once after the initial render.</li>
                            </ul>

                            <div className="text-xl mt-7">
                                <CopyBlock
                                    text={`useEffect(() => {
    // Your effect logic here
}, [dependencies]);`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>

                            <p className="mt-6">
                                For example, if you want to run an effect when a certain state variable changes, you can include it in the dependency array.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
