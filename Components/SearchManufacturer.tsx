"use client"
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { manufacturers } from "@/constants";
import { SearchManuFacturerProps } from "@/types";
import Image from "next/image";
const SearchManufacturer = ({ manufacturerSelected, setManufacturerSelected }: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredmanufacturers=
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manifactuer">
      <Combobox value={manufacturerSelected} onChange={setManufacturerSelected}>
        <div className="relative w-full">
          
            <Combobox.Button className="absolute top-3 left-3">
              <Image
                 width={20}
                 height={20}
                 src="/Volkswagen.png"
                 alt="cars logo search"
              />
            </Combobox.Button>
          
            <Combobox.Input
              className='search-manufacturer__input'
              placeholder="Search Cars by Manufacturer"
              displayValue={(manufacturers:string) => manufacturers}
              onChange={(e) => setQuery(e.target.value)}
            />
           
          
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}>
            <Combobox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredmanufacturers.length === 0 && query !== "" ? (
                <div className='search-manufacturer__option'>
                  Nothing found.
                </div>
              ) : (
                filteredmanufacturers.map((manufacturer) => (
                  <Combobox.Option
                    key={manufacturer}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary text-white" : "text-gray-900"
                      }`
                    }
                    value={manufacturer}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}>
                          {manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-primary"
                            }`}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
