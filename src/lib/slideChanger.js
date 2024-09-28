import { useNavigate } from "react-router-dom";
export const slideChanger = (() => {
    const navigate = useNavigate();
    const currentSlide = window.location.pathname;
    console.log(currentSlide)
    // navigate('')
})