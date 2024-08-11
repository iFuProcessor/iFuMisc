import RectWithText from "../../templates/RectWithText";

const Dispatcher = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="dispatcher"
                text={ "Dispatcher" }
                x={ x } y={ y }
                t_x={ 100 } t_y={ 35 }
                width={ 200 } height={ 60 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default Dispatcher;
