import RectWithText from "../../templates/RectWithText";


const InstructionFetch = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="instruction-fetch"
                text={ "Instruction Fetch\n(5 cycles)" }
                x={ x } y={ y }
                t_x={ 100 } t_y={ 40 }
                width={ 200 } height={ 160 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    )
}

export default InstructionFetch;
