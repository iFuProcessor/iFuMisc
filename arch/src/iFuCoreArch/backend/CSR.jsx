import RectWithText from "../../templates/RectWithText";

const CSR = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="csr"
                text="CSR"
                x={ x } y={ y }
                t_x={ 80 } t_y={ 45 }
                width={ 160 } height={ 80 }
                rx={ 10 } ry={ 10 }
                fontSize={ 20 }
                color={ [170, 238, 255] }
                strokeWidth={ 1 }
                strokeDasharray="none"
            />
        </g>
    );
}

export default CSR;
