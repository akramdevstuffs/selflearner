import { CarouselArrowBackwardElem, CarouselArrowForwardElem } from "./UtilsElements";

export const CarouselPrevArrow = ({className, onClick, style}) => {
    return (
        <CarouselArrowBackwardElem className={className}
        style={{...style}}
        onClick={onClick}
        />
    );
}

export const CarouselNextArrow = ({className, onClick, style}) => {
    return (
        <CarouselArrowForwardElem className={className}
        style={{...style}}
        onClick={onClick}
        />
    );
}