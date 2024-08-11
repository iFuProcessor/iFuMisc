import Rectangle from "./Rectangle";
import Text from "./Text";

const RectWithText = (props) => {
    const { id, text, x, y, t_x, t_y, width, height, rx, ry,
        fontSize, color, strokeWidth, strokeDasharray } = props;

    return (
        <g id={ id }>
            <Rectangle
                id={ "rect" + id }
                x={ x } y={ y }
                width={ width } height={ height }
                rx={ rx } ry={ ry }
                color={ color }
                strokeWidth={ strokeWidth }
                strokeDasharray={ strokeDasharray }
            />
            <Text
                x={ x + t_x } y={ y + t_y }
                text={ text } fontSize={ fontSize }
            />
        </g>
    );
};

export default RectWithText;
