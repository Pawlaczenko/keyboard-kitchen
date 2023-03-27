import React, { createContext, RefObject, useContext } from "react"

export interface IContainerContext {
    constraints: RefObject<HTMLDivElement> | undefined,
    zIndexStack: number,
    incrementzIndexStack: (n:number)=>void
}

const initialContainerContext : IContainerContext = {
    constraints: undefined,
    zIndexStack: 0,
    incrementzIndexStack: ()=>{}
}

export const ContainerContext = React.createContext<IContainerContext>(initialContainerContext);

export const useContainerContext = () => useContext(ContainerContext)