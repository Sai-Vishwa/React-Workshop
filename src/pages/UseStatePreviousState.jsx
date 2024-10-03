import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { NextButton } from "../components/NextButton"
import { PreviousButton } from "@/components/PreviousButton"
import { CopyBlock, dracula } from 'react-code-blocks';

export const UseStatePreviousState = (()=>{
    const nav = useNavigate();
    return (<div className="bg-[#0a0a0a] md:px-0 px-5 min-h-screen text-[#f8fafc] leading-4 lg:mx-[14%] md:mx-[10%] xl:mx-[22%]">
        <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
                <span onClick={() => nav(`/slide/${parseInt(window.location.pathname.slice(-1)) - 1}`)}><PreviousButton /></span>
                <span onClick={() => nav(`/slide/${parseInt(window.location.pathname.slice(-1)) + 1}`)}><NextButton /></span>
        </div>
        <div className="text-5xl font-bold text mt-16">
            Retaining Previous State values in use state
            <div className= "mt-10 text-2xl font-normal">
                Let's consider that the web page consists of info about different students which are meant to be changed.
                So it's obvious to have multiple use states as follows
            </div>
            <div className="text-xl mt-2">
                                <CopyBlock
                                    text={`import React, { useState } from 'react';

const StudentDetails = () => {
    const [name1,setname1] = useState("Shanto");
    const [rno1,setrno1] = useState(263);
    const [dept1,setdept1] = useState("CSE");
    const [name2,setname2] = useState("Rakul");
    const [rno2,setrno2] = useState(216);
    const [dept2,setdept2] = useState("CSE");
    
    return (
            <ul>
                <li key=1>Name 1 : {name1}</li>
                <li key=2>Rno 1 : {rno1}</li>
                <li key=3>Dept 1 : {dept1}</li>
                <li key=4>Name 2 : {name2}</li>
                <li key=5>Rno 2 : {rno2}</li>
                <li key=6>Dept 2 : {dept2}</li>
            </ul>);
};`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                    </div>
                    <div className= "mt-10 text-2xl font-normal">
                Which is inefficient and a tedious work to do.
                <br />It is practiced to group the values which togetherly represent a same object or a single entity.
                Thereby it is suggested to have something like this.
            </div>
            <div className="text-xl mt-2">
                                <CopyBlock
                                    text={`import React, { useState } from 'react';

const StudentDetails = () => {
    const [s1,setstudent1] = useState(["Shanto",263,"CSE"]);
    const [s2,setstudent2] = useState(["Rakul",216,"CSE"]);
    return (
            <>
                <h4>Student 1</h4>
                <p>
                    Name - {s1[0]} <br />
                    Rno - {s1[1]} <br />
                    Dept - {s1[2]}
                </p>
                <h4>Student 2</h4>
                <p>
                    Name - {s2[0]} <br />
                    Rno - {s2[1]} <br />
                    Dept - {s2[2]}
                </p>
            </>
            );
};`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                    </div>
                    <div className= "mt-10 text-3xl font-bold">
                Updating Fields in Complex UseStates 
            </div>
            <div className= "mt-10 text-2xl font-normal">
                Let's say we've a button to change the name from Rakul to Rakul Prakash.
                However it is obvious to notice that the name of student 2 is only changed and all 
                other values must be retained from the original state as it is.
            </div>
            <div className="text-xl mt-2">
                                <CopyBlock
                                    text={`import React, { useState } from 'react';

const StudentDetails = () => {
    const [s1,setstudent1] = useState(["Shanto",263,"CSE"]);
    const [s2,setstudent2] = useState(["Rakul",216,"CSE"]);

    function changename(){
        setstudent1((previousState)=>{
                previousState[0] = previousState[0]==="Rakul"?"Rakul Prakash":"Rakul";
                return(previousState);
            }
    }

    return (
            <>
                <h4>Student 1</h4>
                <p>
                    Name - {s1[0]} <br />
                    Rno - {s1[1]} <br />
                    Dept - {s1[2]}
                </p>
                <h4>Student 2</h4>
                <p>
                    Name - {s2[0]} <br />
                    Rno - {s2[1]} <br />
                    Dept - {s2[2]}
                </p>
                <button onClick={changename}>Change name </button>
            </>
            );
}`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                    </div>
            <div className= "mt-10 text-2xl font-normal mb-16">
                Remember using "SPREAD OPERATOR" is also practiced for retaining previous state values
            </div>
        </div>
        </div>)
})



