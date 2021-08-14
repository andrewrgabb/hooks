import React from "react";
import { fetchProperties } from "../../api/property/property-fetch";
import { Property } from "../../api/property/property-types";
import { filterPropertiesBySearchTerm } from "./filters/property-search";

interface UsePropertiesHook {
  properties: Property[] | undefined;
  loading: boolean;
  error: any | undefined;
  refresh: () => void;
  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
  numProperties: number;
  numFilteredProperties: number;
}

const useProperties = (): UsePropertiesHook => {
  const [properties, setProperties] = React.useState<Property[] | undefined>(
    undefined
  );

  const [filteredProperties, setFilteredProperties] = React.useState<
    Property[] | undefined
  >(undefined);

  const [loading, setLoading] = React.useState<boolean>(false);

  const [error, setError] = React.useState<any | undefined>(undefined);

  const [searchTerm, setSearchTerm] = React.useState<string>("");

  // Initially call once
  React.useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refresh the properties information from the database
  const refresh = async () => {
    setLoading(true);

    try {
      const properties = fetchProperties();

      setProperties(properties);
      setLoading(false);
      setError(undefined);
    } catch (e: any) {
      setError("Error loading properties");
      setLoading(false);
      setProperties(undefined);
    }
  };

  // Call filtering functions after properties has been modified
  React.useEffect(() => {
    if (!properties) {
      return;
    }

    const newSearchedProperties = filterPropertiesBySearchTerm(
      properties,
      searchTerm
    );

    setFilteredProperties(newSearchedProperties);
  }, [properties, searchTerm]);

  const numProperties: number = properties ? properties.length : 0;
  const numFilteredProperties: number = filteredProperties
    ? filteredProperties.length
    : 0;

  return {
    properties: filteredProperties,
    loading: loading,
    error: error,
    refresh: refresh,
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    numProperties: numProperties,
    numFilteredProperties: numFilteredProperties,
  };
};

export default useProperties;
