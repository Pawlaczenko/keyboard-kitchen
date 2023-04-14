import React, { createContext, RefObject, useContext } from "react"

export type IContainerContext = RefObject<HTMLDivElement> | undefined;

const initialContainerContext : IContainerContext = undefined;

export const ContainerContext = React.createContext<IContainerContext>(initialContainerContext);

export const useContainerContext = () => useContext(ContainerContext)