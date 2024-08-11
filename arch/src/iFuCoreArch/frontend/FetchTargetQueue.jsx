import RectWithText from "../../templates/RectWithText";

const FetchTargetQueue = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="fetch-target-queue"
                text={ "Fetch Target Queue\n16 entries" }
                x={ x } y={ y }
                t_x={ 175 } t_y={ 35 }
                width={ 350 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [205, 162, 190] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default FetchTargetQueue;
