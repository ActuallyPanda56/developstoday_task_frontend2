export interface Country {
  name: string;
  countryCode: string;
  flagUrl: string;
}

export interface CountryFlag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

interface CountryBorders {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[] | null;
  flagUrl: string;
}

interface CountryPopulation {
  year: number;
  value: number;
}

export interface CountryDetails {
  name: string;
  borders: CountryBorders[];
  population: CountryPopulation[];
  flagUrl: string;
}
