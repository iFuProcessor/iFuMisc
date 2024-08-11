import RectWithText from "../../templates/RectWithText";

const DecodeStage = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="decode-stage"
                text={ "3-way\nDecoder" }
                x={ x } y={ y }
                t_x={ 40 } t_y={ 130 }
                width={ 80 } height={ 280 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default DecodeStage;
