import React, {useContext} from "react";
import { NameContext } from "../../App";
import ThirdComponent from "./ThirdComponent";
import { SecondComponent } from "./SecondComponent";




const FirstComponent = () => {
    
    return (
        <div>
            <span>Hi...</span>
            <SecondComponent/>
        </div>
    );
}

export default FirstComponent;