import RectWithText from "../../templates/RectWithText";
import RoundedPolygon from "../../templates/RoundedPolygon";
import Text from "../../templates/Text";

const ExecutionUnits = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RoundedPolygon
                points={ [[x - 10, y], [x + 160, y], [x + 160, y + 480], [x - 540, y + 480], [x - 540, y + 300], [x - 10, y + 300]] }
                color={ [213, 255, 230] }
                strokeWidth={ 2 }
                strokeDasharray="5,5"
                radius={ 10 }
            />
            <Text
                x={ x + 50 } y={ y + 20 }
                text="Backend" fontSize={ 24 }
            />

            <RectWithText
                id="mem-1"
                text="MEM-1"
                x={ x + 10 } y={ y + 55 }
                t_x={ 60 } t_y={ -10 }
                width={ 120 } height={ 50 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="agu"
                text="AGU"
                x={ x + 20 } y={ y + 60 }
                t_x={ 50 } t_y={ 25 }
                width={ 100 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [205, 235, 139] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="mem-2"
                text="MEM-2"
                x={ x + 10 } y={ y + 135 }
                t_x={ 60 } t_y={ -10 }
                width={ 120 } height={ 50 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="agu"
                text="AGU"
                x={ x + 20 } y={ y + 140 }
                t_x={ 50 } t_y={ 25 }
                width={ 100 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [205, 235, 139] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />

            <RectWithText
                id="alu-1"
                text="ALU-1"
                x={ x + 10 } y={ y + 225 }
                t_x={ 60 } t_y={ -10 }
                width={ 120 } height={ 50 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="alu"
                text="ALU"
                x={ x + 20 } y={ y + 230 }
                t_x={ 50 } t_y={ 25 }
                width={ 100 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [205, 235, 139] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="alu-0"
                text="ALU-0"
                x={ x - 130 } y={ y + 330 }
                t_x={ 200 } t_y={ -10 }
                width={ 260 } height={ 50 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="alu"
                text="ALU"
                x={ x + 20 } y={ y + 335 }
                t_x={ 50 } t_y={ 25 }
                width={ 100 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [205, 235, 139] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="jmp unit"
                text="JMP Unit"
                x={ x - 120 } y={ y + 335 }
                t_x={ 60 } t_y={ 25 }
                width={ 120 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [205, 235, 139] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="alu-2"
                text="ALU-2"
                x={ x - 270 } y={ y + 410 }
                t_x={ 340 } t_y={ -10 }
                width={ 400 } height={ 50 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [126, 166, 224] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="alu"
                text="ALU"
                x={ x + 20 } y={ y + 415 }
                t_x={ 50 } t_y={ 25 }
                width={ 100 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [205, 235, 139] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="mul"
                text="MUL"
                x={ x - 120 } y={ y + 415 }
                t_x={ 60 } t_y={ 25 }
                width={ 120 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [205, 235, 139] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
            <RectWithText
                id="div"
                text="DIV"
                x={ x - 260 } y={ y + 415 }
                t_x={ 60 } t_y={ 25 }
                width={ 120 } height={ 40 }
                rx={ 5 } ry={ 5 }
                fontSize={ 20 }
                color={ [205, 235, 139] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    )
}

export default ExecutionUnits;
