import RectWithText from "../../templates/RectWithText";

const IssueStage = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="mem-issue-queue"
                text={ "Mem Issue Queue\n(6 entries)" }
                x={ x } y={ y }
                t_x={ 100 } t_y={ 65 }
                width={ 200 } height={ 140 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [244, 215, 227] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="int-issue-queue"
                text={ "Int Issue Queue\n(10 entries)" }
                x={ x } y={ y + 230 }
                t_x={ 100 } t_y={ 65 }
                width={ 200 } height={ 140 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [244, 215, 227] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default IssueStage;
