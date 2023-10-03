"use client";

import React from "react";
import Screen from "../src/components/layout/Screen";
import { usePathname } from "next/navigation";
import style from "src/styles/style.module.scss";
import { Text } from "../src/components/Text/TextComponent";

export default function PageNotFound() {
    const path = usePathname();

    return (
        <Screen>
            <div style={{ height: style.viewportHeight }} className="w-screen flex items-center justify-center">
                <Text.H6
                    sx={{ textAlign: "center", marginX: "16px" }}
                >
                    Oops! Not yet implemented: <i>{path}</i>
                </Text.H6>
            </div>
        </Screen>
    );
}
