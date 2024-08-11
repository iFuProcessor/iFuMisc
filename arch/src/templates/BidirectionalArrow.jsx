const BidirectionalArrow = (props) => {
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
                markerStart="url(#arrowhead)"
                markerEnd="url(#arrowhead)"
            />
        </g>
    );
}

export default BidirectionalArrow;
