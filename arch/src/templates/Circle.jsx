const Circle = (props) => {
    const { id, x, y, r, color } = props;
    const colorString = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

    return (
        <g id={ id }>
            <circle cx={ x } cy={ y } r={ r } fill={ colorString } />
        </g>
    );
}

export default Circle;
