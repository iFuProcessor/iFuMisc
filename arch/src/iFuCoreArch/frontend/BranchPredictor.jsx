import RectWithText from "../../templates/RectWithText";

const BranchPredictor = (props) => {
    const { x, y } = props;

    return (
        <g id="BranchPredictor">
            <RectWithText
                id="BranchPredictor"
                text={ "Branch\nPredictor" }
                x={ x } y={ y }
                t_x={ 60 } t_y={ 20 }
                width={ 120 } height={ 160 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [255, 230, 204] }
                strokeWidth={ 1 }
            />
            <RectWithText
                id="faubtb"
                text={ "faubtb" }
                x={ x + 5 } y={ y + 50 }
                t_x={ 55 } t_y={ 20 }
                width={ 110 } height={ 30 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [218, 232, 252] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="btb"
                text={ "btb" }
                x={ x + 5 } y={ y + 85 }
                t_x={ 25 } t_y={ 20 }
                width={ 50 } height={ 30 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [218, 232, 252] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="bim"
                text={ "bim" }
                x={ x + 65 } y={ y + 85 }
                t_x={ 25 } t_y={ 20 }
                width={ 50 } height={ 30 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [218, 232, 252] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="lh"
                text={ "lh" }
                x={ x + 5 } y={ y + 120 }
                t_x={ 25 } t_y={ 20 }
                width={ 50 } height={ 30 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [218, 232, 252] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="ras"
                text={ "ras" }
                x={ x + 65 } y={ y + 120 }
                t_x={ 25 } t_y={ 20 }
                width={ 50 } height={ 30 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [218, 232, 252] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default BranchPredictor;
