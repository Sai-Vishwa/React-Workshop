import ShimmerButton from "@/components/ui/shimmer-button";
import { useNavigate } from "react-router-dom";

export function ExploreNowButton() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/slide/1")} className="z-10 flex mt-8 items-center justify-center">
            <ShimmerButton>
                <span onClick={() => alert("hi")} className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg py-2 px-4">
                    Explore Now
                </span>
            </ShimmerButton>
        </div>
    );
}
