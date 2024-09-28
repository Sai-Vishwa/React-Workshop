import { Button } from "../components/ui/button";
import { NextButton } from "../components/NextButton";
import { PreviousButton } from "@/components/PreviousButton";
import FolderStructureimg from "@/assets/folderStructureimg.png";

export const FolderStructure = (() => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-[#f8fafc] leading-4">
            <div className="fixed bottom-8 right-8 flex space-x-6">
                <PreviousButton></PreviousButton>
                <NextButton></NextButton>
            </div>
            <div className="min-h-screen flex pt-16">
                <div className="md:mx-[22%]">
                    <div className="text-5xl font-bold">
                        Understanding the Folder Structure
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl font-semibold">
                            The following structure is typical for a React project:
                        </p>
                        <img className="mt-5"src={FolderStructureimg} alt="folderStructure" width={400} />
                        <div className="text-xl">
                            <h3 className="font-semibold my-5">Key Folders and Files:</h3>
                            <ul className="list-disc ml-6">
                                <li>
                                    <span className="font-bold">node_modules:</span> Contains all your project dependencies.
                                </li>
                                <li className="mt-4">
                                    <span className="font-bold">public:</span> Holds static files like HTML and images that don’t require processing.
                                </li>
                                <li className="mt-4">
                                    <span className="font-bold">src:</span> The main directory where your React components, styles, and logic reside.
                                </li>
                                <li className="mt-4">
                                    <span className="font-bold">package.json:</span> Manages project dependencies and scripts.
                                </li>
                                <li className="mt-4">
                                    <span className="font-bold">README.md:</span> A markdown file for project documentation and instructions.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
