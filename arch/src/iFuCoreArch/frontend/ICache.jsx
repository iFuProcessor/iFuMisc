import RectWithText from "../../templates/RectWithText";

const ICache = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="i-cache"
                text={ "Instruction\nCache\n32KB, 8-way" }
                x={ x } y={ y }
                t_x={ 70 } t_y={ 65 }
                width={ 140 } height={ 160 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [255, 181, 112] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    )
}

export default ICache;
