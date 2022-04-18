import { createContext, FC, ReactNode, useState } from "react";

interface IsLoadingContextType {
    isLoading: boolean,
    setIsLoading: (prev: boolean) => void
}

const isLoadingContextInit: IsLoadingContextType = {
    isLoading: false,
    setIsLoading: (prev: boolean) => {}
}

export const IsLoadingContext = createContext<IsLoadingContextType>(isLoadingContextInit);

export const IsLoadingContextProvader: FC<{children: ReactNode}> = ({children}): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false);

    const value = {isLoading, setIsLoading }

    return (
        <IsLoadingContext.Provider value={value}>
            {children}
        </IsLoadingContext.Provider>
    )
}