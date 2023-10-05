import React from "react";
import {Header} from "../Header";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import style from "../../../styles/style.module.scss";

const Base = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFABC"
}));

const Body = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    maxWidth: style.mainMaxWidth,
    flexDirection: "column",
    alignItems: "center",
}));

interface ScreenProps {
    children: React.ReactNode;
    headerPosition?: string;
    admins?: string[];
}

export const Screen = ({ children, headerPosition = "absolute" }: ScreenProps) => {
    // const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    // header was previously fixed
    // headerposition in burger app is static
    return (
        <Base>
            <Header headerPosition={headerPosition} />

            <Body>
                {children}
            </Body>
        </Base>
    );
};

export default Screen;
