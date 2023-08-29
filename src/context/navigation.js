import { Children, createContext } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
    return ( 
    
    <div> <NavigationContext.Provider value={{}}>
        {children}
    </NavigationContext.Provider>
    </div>

);
}

export { NavigationProvider };
export default NavigationContext;
