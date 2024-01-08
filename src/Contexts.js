import React, { createContext } from "react";
import FirstComponent from "./components/Employee/FirstComponent";

export const UserContext = createContext();

const Contexts = () => {

    const userName = 'Vishal Agarwal';

    return (
        <UserContext.Provider value={userName}>
            <FirstComponent />
        </UserContext.Provider>
    );
}

export default Contexts;