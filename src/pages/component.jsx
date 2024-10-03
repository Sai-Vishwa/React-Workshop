import { NextButton } from "../components/NextButton"
import { PreviousButton } from "@/components/PreviousButton"
import { CopyBlock, dracula } from 'react-code-blocks';
import { useNavigate } from "react-router-dom";

export const ComponentsOverview = (() => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#0a0a0a] px-5 md:px-0 min-h-screen text-[#f8fafc] leading-4 ">
            <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) - 1}`)}><PreviousButton /></span>
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) + 1}`)}><NextButton /></span>
            </div>

            <div className="min-h-screen flex pt-16">
            <div className="lg:mx-[14%] md:mx-[10%] xl:mx-[22%]">
                    <div className="text-5xl font-bold">
                        Understanding React Components
                    </div>

                    <div className="mt-10">
                        <p className="text-xl md:text-2xl font-semibold">
                            What is a Component in React?
                        </p>
                        <div className="text-xl md:text-2xl mt-6 mb-16">
                            <p>
                                A component in React is a reusable piece of UI. It allows you to split the UI into independent, reusable pieces and think about each piece in isolation.
                            </p>
                            <h4 className="my-10 font-bold">Types of Components</h4>
                            <ul className="list-disc mt-3 ml-6">
                                <li className=""><span className="font-bold ">Functional Components:</span> Components created as JavaScript functions.</li>
                                <li className="mt-4"><span className="font-bold ">Class Components:</span> Components created using ES6 class syntax (less common in modern React).</li>
                            </ul>

                            <h3 className=" text-4xl my-10 font-bold">Creating a Functional Component</h3>
                            <div className="text-xl mt-2">
                                <CopyBlock
                                    text={`const Greeting = () => {
    return (
        <h1>Hello, World!</h1>
    );
}`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>
                            <p className="mt-3">
                                This is an example of a simple functional component that returns a heading saying "Hello, World!".
                            </p>

                            <h3 className=" text-4xl my-10 font-bold">Using Props in Components</h3>
                            <p>
                                Props are arguments passed into React components. Props allow you to pass data from one component to another.
                            </p>

                            <div className="text-xl mt-3">
                                <CopyBlock
                                    text={`const Greeting = ({ name }) => {
    return (
        <h1>Hello, {name}!</h1>
    );
}`}
                                    language={"javascript"}
                                    theme={dracula}
                                    wrapLongLines
                                />
                            </div>
                            <p className="mt-3">
                                Now, this `Greeting` component accepts a `name` prop, and will display a personalized greeting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
