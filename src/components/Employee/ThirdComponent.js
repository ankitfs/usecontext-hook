import React, {useContext} from "react";
import FirstComponent from "./FirstComponent";
import { UserContext } from "../../Contexts";


const ThirdComponent = () => {

    const myUserName = useContext(UserContext);

    return (
        <span>ThirdString...{myUserName}</span>
    );
}

export default ThirdComponent;