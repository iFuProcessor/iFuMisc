const Arrow = (props) => {
    const { points, color } = props;
    const pointsString = points.map(p => p.join(',')).join(' ');
    const colorString = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    return (
        <g>
            <polyline
                points={ pointsString }
                stroke={ colorString }
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
            />
        </g>
    );
}

export default Arrow;
