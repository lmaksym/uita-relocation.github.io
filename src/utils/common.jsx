import {hiddenFields} from "../constants/hiddenFields";
import getUnicodeFlagIcon from "country-flag-icons/unicode";


export const getCountriesMap = (countries) => {
    return countries ? new Map(countries.slice(1).map(obj => {
        return [obj.country_id, {...obj}];
    })) : [];
};
export const getTitlesMap = (countries) => {
    return countries ? new Map(Object.entries(countries[0])) : '';
}

export const getCountry = (countries, selectedCountryId) => countries?.get(selectedCountryId) || null;

export const getFilteredFields = (country) => {
    return country && Object.entries(country).filter(([key]) => !hiddenFields.includes(key))
}

export const getFilteredHeaders = (titles) => {
    const copyTitles = new Map(titles);
    hiddenFields.forEach(el => {
        if(copyTitles.has(el)) {
            copyTitles.delete(el)
        }
    })

    return copyTitles;
}

export const getUnicodeFlag = (country) => country.country_abbreviation ? getUnicodeFlagIcon(country.country_abbreviation) : '';
