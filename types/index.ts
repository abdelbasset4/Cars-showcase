import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    iconStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

  export interface SearchManuFacturerProps {
    manufacturerSelected: string;
    setManufacturerSelected: (manufacturer: string) => void;
  }