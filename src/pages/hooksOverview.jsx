import { Button } from "../components/ui/button";
import { NextButton } from "../components/NextButton";
import { PreviousButton } from "@/components/PreviousButton";
import { CopyBlock, dracula } from 'react-code-blocks';
import { useNavigate } from "react-router-dom";

export const HooksOverview = (() => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#0a0a0a] min-h-screen px-5 md:px-0 text-[#f8fafc] leading-4">
            <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) - 1} `)}>
                    <PreviousButton />
                </span>
                <span onClick={() => navigate(`/slide/${parseInt(window.location.pathname.slice(-1)) + 1}`)}>
                    <NextButton />
                </span>
            </div>

            <div className="min-h-screen flex pt-16">
            <div className="lg:mx-[14%] md:mx-[10%] xl:mx-[22%]">
                    <div className="text-5xl font-bold">
                        Understanding Hooks in React
                    </div>

                    <div className="mt-10">
                        <p className="md:text-2xl text-xl font-semibold">
                            What are Hooks in React?
                        </p>
                        <div className="md:text-2xl text-xl mt-6">
                            <p>
                                Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to allow developers to manage state and lifecycle methods without needing to use class components.
                            </p>

                            <h3 className="text-4xl my-10 font-bold">Why were Hooks Introduced?</h3>
                            <p>
                                Before Hooks, class components were required to manage state and lifecycle methods. Hooks enable the use of state and lifecycle features in functional components, leading to cleaner and more reusable code.
                            </p>
                            <h3 className="text-4xl my-10 font-bold">Some of the Popular Hooks</h3>
                            <ul className="list-disc">
                                <li className="ml-4 "><code className="text-red-600 bg-slate-900 px-2 py-1 rounded-xl">useState</code></li>
                                <li className="mt-4 ml-4"><code className="text-red-600 bg-slate-900 px-2 py-1 rounded-xl">useEffect</code></li>
                                <li className="mt-4 ml-4"><code className="text-red-600 bg-slate-900 px-2 py-1 rounded-xl">useRef</code></li>
                                <li className="mt-4 ml-4"><code className="text-red-600 bg-slate-900 px-2 py-1 rounded-xl">useMemo</code></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
