import RoundedPolygon from '../../templates/RoundedPolygon';
import DecodeStage from './DecodeStage';
import RenameStage from './RenameStage';
import Dispatcher from './Dispatcher';
import IssueStage from './IssueStage';
import ROB from './ROB';
import Arrow from '../../templates/Arrow';
import Text from '../../templates/Text';
import MemSystem from './MemSystem';
import ExecutionUnits from './ExecutionUnits';
import RegisterFile from './RegisterFile';
import CSR from './CSR';
import TLBData from './TLBData';
import Line from '../../templates/Line';

const Backend = (props) => {
    const { x, y } = props;

    return (
        <g>
            <RoundedPolygon
                points={ [[x, y], [x + 790, y], [x + 790, y + 940], [x - 750, y + 940], [x - 750, y + 350], [x, y + 350]] }
                color={ [218, 232, 252] }
                strokeWidth={ 2 }
                strokeDasharray="5,5"
                radius={ 40 }
            />
            <Text
                x={ x + 70 } y={ y + 30 }
                text="Backend" fontSize={ 24 }
            />

            <DecodeStage x={ x + 60 } y={ y + 40 } />
            <RenameStage x={ x + 230 } y={ y + 40 } />
            <Dispatcher x={ x + 230 } y={ y + 260 } />
            <IssueStage x={ x + 230 } y={ y + 410 } />
            <RegisterFile x={ x } y={ y + 360 } />
            <ExecutionUnits x={ x - 170 } y={ y + 360 } />
            <CSR x={ x - 420 } y={ y + 570 } />
            <TLBData x={ x - 710 } y={ y + 570 } />
            <MemSystem x={ x - 710 } y={ y + 360 } />
            <ROB x={ x + 510 } y={ y + 40 } />

            {/* decode-stage -> rename-stage */ }
            <Arrow
                points={ [[x + 140, y + 170], [x + 216, y + 170]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x + 190 } y={ y + 166 }
                text={ "3 \nuops" } fontSize={ 16 }
            />

            {/* rename-stage -> dispatcher */ }
            <Arrow
                points={ [[x + 330, y + 230], [x + 330, y + 246]] }
                color={ [0, 0, 0] }
            />
            {/* dispatcher -> issue-stage */ }
            <Arrow
                points={ [[x + 330, y + 320], [x + 330, y + 370], [x + 470, y + 370], [x + 470, y + 710], [x + 444, y + 710]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x + 470, y + 480], [x + 444, y + 480]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x + 425 } y={ y + 360 }
                text={ "3 uops" } fontSize={ 16 }
            />
            {/* dispatcher -> rob */ }
            <Arrow
                points={ [[x + 470, y + 370], [x + 496, y + 370]] }
                color={ [0, 0, 0] }
            />
            {/* rob -> rename-stage */ }
            <Arrow
                points={ [[x + 510, y + 170], [x + 444, y + 170]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x + 475 } y={ y + 136 }
                text={ "commits\n3 uops" } fontSize={ 16 }
            />
            {/* csr -> tlbd */ }
            <Arrow
                points={ [[x - 420, y + 590], [x - 476, y + 590]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x - 454 } y={ y + 586 }
                text={ "tlb\ninstr" } fontSize={ 16 }
            />
            {/* issue-stage -> reg-file */ }
            <Arrow
                points={ [[x + 230, y + 480], [x + 194, y + 480]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x + 212 } y={ y + 476 }
                text={ "2 \nuops" } fontSize={ 16 }
            />
            <Arrow
                points={ [[x + 230, y + 710], [x + 194, y + 710]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x + 212 } y={ y + 706 }
                text={ "3 \nuops" } fontSize={ 16 }
            />
            {/* reg-file -> exe-units */ }
            <Arrow
                points={ [[x, y + 440], [x - 26, y + 440]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x, y + 520], [x - 26, y + 520]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x, y + 610], [x - 26, y + 610]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x, y + 715], [x - 26, y + 715]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x, y + 795], [x - 26, y + 795]] }
                color={ [0, 0, 0] }
            />
            {/* exe-units -> rob */ }
            <Arrow
                points={ [[x - 710, y + 400], [x - 730, y + 400], [x - 730, y + 890], [x + 496, y + 890]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ x + 280 } y={ y + 886 }
                text={ "write back\n5 uops" } fontSize={ 16 }
            />
            <Line
                points={ [[x - 710, y + 520], [x - 730, y + 520]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x - 160, y + 610], [x - 246, y + 610]] }
                color={ [0, 0, 0] }
            />
            <Line
                points={ [[x - 420, y + 630], [x - 730, y + 630]] }
                color={ [0, 0, 0] }
            />
            <Line
                points={ [[x - 300, y + 715], [x - 730, y + 715]] }
                color={ [0, 0, 0] }
            />
            <Line
                points={ [[x - 440, y + 795], [x - 730, y + 795]] }
                color={ [0, 0, 0] }
            />
            {/* exe-units -> lsu */ }
            <Arrow
                points={ [[x - 160, y + 440], [x - 186, y + 440]] }
                color={ [0, 0, 0] }
            />
            <Arrow
                points={ [[x - 160, y + 520], [x - 186, y + 520]] }
                color={ [0, 0, 0] }
            />
            {/* exe-units -> reg-file */ }
            <Arrow
                points={ [[x + 90, y + 890], [x + 90, y + 854]] }
                color={ [0, 0, 0] }
            />
        </g>
    );
}

export default Backend;
