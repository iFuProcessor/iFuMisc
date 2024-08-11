import RectWithText from "../../templates/RectWithText";

const RegisterFile = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="register-file"
                text={ "Register File\n(8R 5W)" }
                x={ x } y={ y }
                t_x={ 90 } t_y={ 230 }
                width={ 180 } height={ 480 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [170, 238, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default RegisterFile;
