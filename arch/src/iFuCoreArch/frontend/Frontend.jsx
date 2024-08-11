import RectWithText from "../../templates/RectWithText";
import BranchPredictor from "./BranchPredictor";
import FetchBuffer from "./FetchBuffer";
import ICache from "./ICache";
import InstructionFetch from "./InstructionFetch";
import Arrow from "../../templates/Arrow";
import PreDecoder from "./PreDecoder";
// import ITLB from "./ITLB";
import FetchTargetQueue from "./FetchTargetQueue";
import Text from "../../templates/Text";

const Frontend = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RectWithText
                id="frontend"
                text="Frontend"
                x={ x } y={ y }
                t_x={ 75 } t_y={ 30 }
                width={ 730 } height={ 340 }
                rx={ 40 } ry={ 40 }
                fontSize={ 24 }
                color={ [213, 232, 212] }
                strokeWidth={ 2 }
                strokeDasharray="5,5"
            />

            <BranchPredictor x={ x + 20 } y={ y + 40 } />
            <ICache x={ x + 400 } y={ y + 40 } />
            <InstructionFetch x={ x + 170 } y={ y + 40 } />
            <PreDecoder x={ x + 180 } y={ y + 145 } />
            {/* <ITLB x={ x + 345 } y={ y + 100 } /> */ }
            <FetchBuffer x={ x + 570 } y={ y + 40 } />
            <FetchTargetQueue x={ x + 20 } y={ y + 240 } />

            {/* ifu <-> bpu */ }
            <Arrow
                points={ [[x + 170, y + 80], [x + 154, y + 80]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x + 140, y + 165], [x + 156, y + 165]] }
                color={ [0, 0, 0] }
            />

            {/* ifu <-> icache */ }
            <Arrow
                points={ [[x + 370, y + 80], [x + 386, y + 80]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x + 400, y + 165], [x + 384, y + 165]] }
                color={ [0, 0, 0] }
            />

            {/* ifu <-> ftq */ }
            <Arrow
                points={ [[x + 270, y + 200], [x + 270, y + 226]] }
                color={ [0, 0, 0] }
            />
            {/* ifu <-> fetch-buffer */ }
            <Arrow
                points={ [[x + 270, y + 210], [x + 556, y + 210]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x + 500 } y={ y + 225 }
                text="4 Instr/cycle" fontSize={ 16 }
            />
            {/* ftq <-> core */ }
            <Arrow
                points={ [[x + 370, y + 280], [x + 420, y + 280], [x + 420, y + 320]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x + 480 } y={ y + 300 }
                text={ "PC read\nfor backend" } fontSize={ 16 }
            />
        </g>
    );
}

export default Frontend;
