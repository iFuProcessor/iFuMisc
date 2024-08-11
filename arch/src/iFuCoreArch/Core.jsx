import ArrowHeadDef from "../templates/ArrowHeadDef";
import Frontend from "./frontend/Frontend";
import Arrow from "../templates/Arrow";
import Text from "../templates/Text";
import Backend from "./backend/Backend";

const Core = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2880" height="1800">
            <ArrowHeadDef />
            <Frontend x={ 10 } y={ 10 } />
            <Backend x={ 750 } y={ 10 } />

            {/* frontend -> decode-stage */ }
            <Arrow
                points={ [[720, 180], [796, 180]] }
                color={ [0, 0, 0] }
            />
            <Text
                x={ 765 } y={ 174 }
                text={ "3  instrs" } fontSize={ 16 }
            />
        </svg>
    );
}

export default Core;
