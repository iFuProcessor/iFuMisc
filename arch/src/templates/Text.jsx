const Text = (props) => {
    const { x, y, text, fontSize = 24 } = props;
    const lines = text.split('\n');

    // Helper function to replace spaces with non-breaking spaces
    const replaceSpaces = (str) => {
        return str.replace(/ /g, '\u00A0');
    };

    return (
        <g>
            <text
                x={ x } y={ y }
                fontFamily="Consolas" fontSize={ fontSize }
                fill="black" textAnchor="middle" alignmentBaseline="middle"
            >
                {
                    lines.map((line, index) => (
                        <tspan key={ index } x={ x } dy={ index === 0 ? 0 : "1.2em" } textAnchor="middle">
                            { replaceSpaces(line) }
                        </tspan>
                    ))
                }
            </text>
        </g>
    )
}

export default Text;
