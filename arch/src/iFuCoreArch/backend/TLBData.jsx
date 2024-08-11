import RectWithText from "../../templates/RectWithText";

const TLBData = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="tlb-data"
                text="TLB Data"
                x={ x } y={ y }
                t_x={ 110 } t_y={ 25 }
                width={ 220 } height={ 40 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [170, 238, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default TLBData;
