"use client";

import React, { createContext, useContext, useMemo } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Program2 } from "../../client/program2";

export const useProgramApis = (): ProgramInterface => {
    const context = useContext(ProgramApisContext);
    if (context === undefined) {
        throw new Error("useProgramApis must be used within a ProgramApisProvider");
    }
    return context;
};

interface ProgramInterface {
    program: Program2;

}
const ProgramApisContext = createContext<ProgramInterface>({
    program: {} as Program2,
});

const ProgramApisProvider = ({ children }) => {
    const { connection } = useConnection();
    const anchorWallet = useAnchorWallet();

    const { program } = useMemo(() => {
        const program = new Program2(anchorWallet!, connection);

        return { program };
    }, [connection, anchorWallet]);

    return <ProgramApisContext.Provider value={{ program }}>{children}</ProgramApisContext.Provider>;
};

export default ProgramApisProvider;
