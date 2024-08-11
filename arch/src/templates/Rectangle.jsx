const Rectangle = (props) => {
    const { id, x, y, width, height, rx, ry, color,
        strokeColor = [0, 0, 0], strokeWidth = 1, strokeDasharray } = props;
    const colorString = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    const strokeColorString = strokeColor ? `rgb(${strokeColor[0]}, ${strokeColor[1]}, ${strokeColor[2]})` : 'none';

    return (
        <g id={ id }>
            <rect
                x={ x } y={ y }
                width={ width } height={ height }
                rx={ rx } ry={ ry }
                fill={ colorString }
                stroke={ strokeColorString }
                strokeWidth={ strokeWidth }
                strokeDasharray={ strokeDasharray }
            />
        </g>
    );
};

export default Rectangle;
