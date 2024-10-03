import { Button } from "../components/ui/button"
import { NextButton } from "../components/NextButton"
import { PreviousButton } from "@/components/PreviousButton"
import { CopyBlock, dracula } from 'react-code-blocks';
import { useNavigate } from "react-router-dom";

export const UseStateOverview = (() => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-[#0a0a0a] px-5 md:px-0  min-h-screen text-[#f8fafc] leading-4">
            <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) - 1}`)}><PreviousButton /></span>
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) + 1}`)}><NextButton /></span>
            </div>

            <div className="min-h-screen flex pt-16">
            <div className="lg:mx-[22%] md:mx-[10%]">
                    <div className="text-5xl font-bold">
                        Understanding `useState` Hook in React
                    </div>
                    
                    <div className="mt-10">
                        <p className="text-2xl font-semibold">
                            What is `useState` in React?
                        </p>
                        <div className="text-2xl mt-6 mb-16">
                            <p>
                                The `useState` hook is a fundamental part of functional components in React. It allows you to add state to functional components, making them dynamic and interactive.
                            </p>

                            <h3 className="text-4xl my-10 font-bold">Basic Usage of `useState`</h3>
                            <p>
                                Here's how you can use the `useState` hook to manage state in a component:
                            </p>

                            <div className="text-xl mt-2">
                                <CopyBlock 
                                    text={`import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>
                            <h3 className="text-4xl my-10 font-bold">How `useState` Works</h3>
                            <p>
                                The `useState` hook accepts the **initial state** as an argument and returns an array with two elements:
                            </p>
                            <ul className="list-disc ml-6">
                                <li className="mt-3"><span className="font-bold ">State Variable:</span> The current value of the state.</li>
                                <li className="mt-3"><span className="font-bold ">Setter Function:</span> A function to update the state value.</li>
                            </ul>

                            <div className="text-xl mt-7">
                                <CopyBlock 
                                    text={`const [state, setState] = useState(initialValue);`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>

                            <p className="mt-6">
                                For example, `useState(0)` initializes the `count` variable to `0`. You can update it using `setCount`.
                            </p>

                            <h3 className="text-4xl my-10 font-bold">Updating State</h3>
                            <p>
                                Whenever you want to update the state, you use the setter function provided by `useState`. React will re-render the component with the new state value.
                            </p>
                            <div className="text-xl mt-2">
                                <CopyBlock 
                                    text={`// Example: Toggling a Boolean State

const ToggleComponent = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <p>The light is {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </div>
    );
}`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>
                            <p>
                                In this example, the button toggles the `isOn` state between `true` and `false` when clicked.
                            </p>

                            <h3 className="text-4xl my-10 font-bold">Multiple State Variables</h3>
                            <p>
                                You can manage multiple pieces of state by calling `useState` multiple times in the same component.
                            </p>

                            <div className="text-xl mt-2">
                                <CopyBlock 
                                    text={`const ExampleComponent = () => {
    const [name, setName] = useState('John');
    const [age, setAge] = useState(25);

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    );
}`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>
                            <p>
                                In this case, two separate state variables, `name` and `age`, are managed independently.
                            </p>

                            <h3 className="text-4xl my-10 font-bold">Things to Remember</h3>
                            <ul className="list-disc ml-6">
                                <li>`useState` is used inside functional components to create state variables.</li>
                                <li>The setter function is used to update the state, and this triggers a re-render of the component.</li>
                                <li>State updates are **asynchronous**. If you're updating based on the previous state, use the function form of `setState`.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
