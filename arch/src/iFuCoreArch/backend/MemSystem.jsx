import RectWithText from "../../templates/RectWithText";
import Text from "../../templates/Text";

const MemSystem = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="mem-system"
                text="Memory Subsystem"
                x={ x } y={ y }
                t_x={ 110 } t_y={ 20 }
                width={ 510 } height={ 200 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [229, 213, 255] }
                strokeWidth={ 2 }
                strokeDasharray="5,5"
            />
            <RectWithText
                id="ldq"
                text={ "Load Queue\n(12 entries)" }
                x={ x + 360 } y={ y + 10 }
                t_x={ 70 } t_y={ 35 }
                width={ 140 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [244, 215, 227] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="stq"
                text={ "Store Queue\n(12 entries)" }
                x={ x + 360 } y={ y + 110 }
                t_x={ 70 } t_y={ 35 }
                width={ 140 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [244, 215, 227] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />

            <RectWithText
                id="dcache"
                text=""
                x={ x + 10 } y={ y + 30 }
                t_x={ 130 } t_y={ 20 }
                width={ 340 } height={ 160 }
                rx={ 10 } ry={ 10 }
                fontSize={ 24 }
                color={ [246, 207, 206] }
                strokeWidth={ 2 }
                strokeDasharray="5,5"
            />
            <RectWithText
                id="meta"
                text={ "Meta" }
                x={ x + 240 } y={ y + 55 }
                t_x={ 50 } t_y={ 35 }
                width={ 100 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [255, 181, 112] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="data"
                text={ "Data" }
                x={ x + 240 } y={ y + 120 }
                t_x={ 50 } t_y={ 35 }
                width={ 100 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [255, 181, 112] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="mshr"
                text={ "MHSR\n(2 + 3) entries" }
                x={ x + 20 } y={ y + 120 }
                t_x={ 105 } t_y={ 25 }
                width={ 210 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [255, 181, 112] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="wfu"
                text={ "WFU" }
                x={ x + 130 } y={ y + 55 }
                t_x={ 50 } t_y={ 35 }
                width={ 100 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [255, 181, 112] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="mmiou"
                text={ "MMIOU" }
                x={ x + 20 } y={ y + 55 }
                t_x={ 50 } t_y={ 35 }
                width={ 100 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [255, 181, 112] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <Text
                x={ x + 140 } y={ y + 50 }
                text="Non-blocking DCache"
                fontSize={ 24 }
            />
        </g>
    );
}

export default MemSystem;
