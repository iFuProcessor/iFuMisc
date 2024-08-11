const RoundedPolygon = (props) => {
    const { id, points, color, strokeColor = [0, 0, 0], strokeWidth = 1, strokeDasharray, radius = 5 } = props;
    const colorString = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    const strokeColorString = strokeColor ? `rgb(${strokeColor[0]}, ${strokeColor[1]}, ${strokeColor[2]})` : 'none';

    // Function to generate path data with rounded corners
    const generatePathData = (points, radius) => {
        const pointArray = points.map(point => [point[0], point[1]]);
        let pathData = '';

        for (let i = 0; i < pointArray.length; i++) {
            const [x1, y1] = pointArray[i];
            const [x2, y2] = pointArray[(i + 1) % pointArray.length];
            const [x3, y3] = pointArray[(i + 2) % pointArray.length];

            const dx1 = x2 - x1;
            const dy1 = y2 - y1;
            const dx2 = x3 - x2;
            const dy2 = y3 - y2;

            const angle1 = Math.atan2(dy1, dx1);
            const angle2 = Math.atan2(dy2, dx2);

            const x1Offset = x2 - radius * Math.cos(angle1);
            const y1Offset = y2 - radius * Math.sin(angle1);
            const x2Offset = x2 + radius * Math.cos(angle2);
            const y2Offset = y2 + radius * Math.sin(angle2);

            if (i === 0) {
                pathData += `M${x1Offset},${y1Offset}`;
            } else {
                pathData += `L${x1Offset},${y1Offset}`;
            }

            // Adjust the arc direction by changing the sweep-flag (0 or 1)
            pathData += `A${radius},${radius} 0 0,${dx1 * dy2 - dy1 * dx2 > 0 ? 1 : 0} ${x2Offset},${y2Offset}`;
        }

        pathData += 'Z';
        return pathData;
    };

    const pathData = generatePathData(points, radius);

    return (
        <g id={ id }>
            <path
                d={ pathData }
                fill={ colorString }
                stroke={ strokeColorString }
                strokeWidth={ strokeWidth }
                strokeDasharray={ strokeDasharray }
            />
        </g>
    );
};

export default RoundedPolygon;
