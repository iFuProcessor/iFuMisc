import RectWithText from "../../templates/RectWithText";

const FetchBuffer = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="fetch-buffer"
                text={ "Fetch Buffer\n9 entries" }
                x={ x } y={ y }
                t_x={ 70 } t_y={ 130 }
                width={ 140 } height={ 280 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [205, 162, 190] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default FetchBuffer;
