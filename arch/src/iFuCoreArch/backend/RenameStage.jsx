import RectWithText from "../../templates/RectWithText";

const RenameStage = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="rename-stage"
                text={ "Rename Stage" }
                x={ x } y={ y }
                t_x={ 70 } t_y={ 20 }
                width={ 200 } height={ 190 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="map-table"
                text={ "Map Table" }
                x={ x + 10 } y={ y + 30 }
                t_x={ 90 } t_y={ 25 }
                width={ 180 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [218, 232, 252] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="busy-table"
                text={ "Busy Table" }
                x={ x + 10 } y={ y + 80 }
                t_x={ 90 } t_y={ 25 }
                width={ 180 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [218, 232, 252] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="free-list"
                text={ "Free List" }
                x={ x + 10 } y={ y + 130 }
                t_x={ 90 } t_y={ 25 }
                width={ 180 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [218, 232, 252] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default RenameStage;
