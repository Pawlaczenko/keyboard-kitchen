import React, { createContext, RefObject, useContext } from "react"

export const ConstraintsContext = React.createContext<RefObject<Element> | undefined>(undefined);

export const useConstraintsContext = () => useContext(ConstraintsContext)