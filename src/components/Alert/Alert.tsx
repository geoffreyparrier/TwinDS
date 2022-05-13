import {createContext, PropsWithChildren, useContext, useState} from "react";
import {twa} from "../../utils/twa";

interface AlertProps{
    type: string,
    classes?: string
}

export function Alert(props: PropsWithChildren<AlertProps>){
    return (
        <div className={twa`flex gap-2 px-4 py-2 text-${props.type}-text bg-${props.type}-background rounded ${props.classes ?? ''}`}>
            <AlertIcon type={props.type}/>
            <div className={twa`my-auto`}>
                {props.children}
            </div>
        </div>
    );
}

function AlertIcon(props: AlertProps){
    let icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    );
    switch(props.type){
        case 'warning':
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
            );
            break;
        case 'error':
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            );
            break;
        case 'success':
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            );
            break;
    }
    return (
        <div className={twa`my-auto text-${props.type}-icon`}>
            {icon}
        </div>
    );
}

interface AlertProviderValue{
    fire: (newType: string) => void;
    close: () => void;
}

const AlertContext = createContext<AlertProviderValue | undefined>(undefined);

export const useAlert = () => useContext(AlertContext);

export function AlertProvider(props:PropsWithChildren<{}>){
    const [type, setType] = useState<string | null>(null);

    const fire = (newType:string = 'info') => {
        setType(newType);
    };

    const close = () => setType(null);

    return (
        <AlertContext.Provider value={{fire, close}}>
            {props.children}
            {type && (
                <Alert type={type}/>
            )}
        </AlertContext.Provider>
    );
}
