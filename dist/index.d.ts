import * as React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare type NVButtonProps = {
    variant?: string | 'text';
    defaultValue?: number;
    children: React.ReactNode;
};
declare function NVButton(props: NVButtonProps | any): JSX.Element;

declare type NVTooltipProps = {
    title: string;
    children: React.ReactNode;
};
declare function NVTooltip(props: NVTooltipProps | any): JSX.Element;

export { Button, NVButton, NVTooltip };
