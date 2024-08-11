import RectWithText from "../../templates/RectWithText";

const ROB = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="reorder-buffer"
                text={ "Reorder Buffer\n(36 entries)" }
                x={ x } y={ y }
                t_x={ 125 } t_y={ 420 }
                width={ 250 } height={ 880 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [208, 167, 193] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default ROB;
