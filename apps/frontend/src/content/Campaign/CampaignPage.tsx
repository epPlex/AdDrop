import {Section} from "src/components/Container/Section";
import {BoxProps} from "@mui/material/Box";
import React from "react";
import HorizontalNonLinearStepper from "@components/Container/Stepper";
import {AdDetails} from "@content/Campaign/AdDetails";
import {Distribution} from "@content/Campaign/Distribution";
import {Rewards} from "@content/Campaign/Rewards";
import {Review} from "@content/Campaign/Review";

const steps = [
    'Advert',
    'Distribution',
    'Rewards',
    'Review & Pay'
];


export function CampaignPage({...props}: BoxProps){
    return (
        <div className="flex flex-col w-full h-screen ">
            <Section {...props}>
                <HorizontalNonLinearStepper
                    stepNames={steps}
                    stepComponents={[
                        (buttonAction) => <AdDetails buttonAction={buttonAction}/>,
                        (buttonAction) => <Distribution buttonAction={buttonAction}/>,
                        (buttonAction) => <Rewards buttonAction={buttonAction}/>,
                        (buttonAction) => <Review buttonAction={buttonAction}/>,
                    ]}
                />
            </Section>
        </div>
    );
}