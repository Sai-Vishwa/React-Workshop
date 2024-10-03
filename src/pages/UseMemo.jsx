import { NextButton } from "../components/NextButton";
import { PreviousButton } from "@/components/PreviousButton";
import { useMemo } from "react";
import { CopyBlock, dracula } from 'react-code-blocks';
import { useNavigate } from "react-router-dom";

export const UseMemo = (() => {
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
                        Ponder on What's useMemo !!
                    </div>
                    <div className="text-2xl mt-6">
                            <p>
                                The useMemo hook allows to recompute certain values only based on dependencies and not on every single re-render
                                <br />
                                Let's consider a simple website which accepts Roll No andd Name as input and check whether the Roll no is prime
                            </p>
                            <div className="text-xl mt-2 mb-6">
                                <CopyBlock
                                    text={`import React, { useState } from 'react';
function prime(num){
    if(num===0){return "";}
    for(let i=2;i<num/2;i++){
        if(num%i===0){
            return "Your Rno is Composite";
        }
    }
    return "Your Rno is PRIME !!!"
}
const RnoAndName = () =>{
    const [rno , setrno] = useState(0);
    const [name , setname] = useState("");
    const rnostat = prime(rno);
    function rnoset(e){
        setrno(e.target.value)
    }
    function nameset(e){
        setname(e.target.value)
    }
    return (<>
        Enter your Roll No - 
        <input type="number" onChange={rnoset} placeholder={rno} />
        <br />
        {rnostat}
        <br />
        Enter your Name - 
        <input type="text" onChange={nameset} placeholder={name} />
    </>)
}`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                    </div>
                    <p>
                        It is obvious that whenever the page re-renders the function prime gets executed.
                        <br />
                        However the value of rno is unchenged whenever the name is being entered and thus the result of prime function.
                        <br />
                        Even though the function is still executed to produce the same output which is an unnecessary overhead.
                        <br /> 
                        To overcome this issue <span className="font-bold">useMemo</span> is used.
                    </p>
                    <div className="text-xl mt-2 mb-16">
                                <CopyBlock
                                    text={`//const rnostat = prime(rno); which runs for every re-render is replaced with 
const rnostat = useMemo(() => prime(rno) , [rno]); //runs only when rno is changed
//Remember to check whether useMemo is imported if not import for proper execution`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                    </div>
            </div>
            </div>
            </div>
            </div>
    )
})