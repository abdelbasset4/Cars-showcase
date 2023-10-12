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

export interface CarsProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission:string ;
  year: number;
}

export interface carDetailsProps {
  isOpen: boolean;
  closeModal : ()=>void;
  car:CarsProps
}

export interface FilterProps {
  manufacturer?: string;
  model?: string;
  year?: number;
  limit?: number;
  fuel?: string;
}
export interface HomeProps {
  searchParams:FilterProps;
}

export interface OptionProps {
  title:string;
  value:string;
}

export interface CustomFilterProps {
  title:string;
  options:OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}