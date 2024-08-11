import RectWithText from "../../templates/RectWithText";

const PreDecoder = (props) => {
    const { x, y } = props;

    return (
        <RectWithText
            id="pre-decoder"
            text={ "Pre-Decoder" }
            x={ x } y={ y }
            t_x={ 90 } t_y={ 25 }
            width={ 180 } height={ 40 }
            rx={ 5 } ry={ 5 }
            fontSize={ 20 }
            color={ [218, 232, 252] }
            strokeWidth={ 1 }
            strokeDasharray="none"
        />
    )
}

export default PreDecoder;
