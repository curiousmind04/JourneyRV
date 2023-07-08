"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";
import classes from "./CountrySelect.module.css";

export type CountrySelectValue = {
  value: string;
  label: string;
  flag: string;
  latlng: number[];
  region: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className={classes.option}>
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className={classes.region}>{option.region}</span>
            </div>
          </div>
        )}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            padding: "0.75rem",
          }),
          //   input: (baseStyles) => ({
          //     ...baseStyles,
          //     fontSize: "1.125rem",
          //     lineHeight: "1.75rem",
          //   }),
          //   option: (baseStyles) => ({
          //     ...baseStyles,
          //     fontSize: "1.125rem",
          //     lineHeight: "1.75rem",
          //   }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};
export default CountrySelect;
