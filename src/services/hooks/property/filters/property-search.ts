import { Property } from "../../../api/property/property-types";

const match = (text: string, subString: string) => {
  return text.toLowerCase().includes(subString);
};

// Filter Properties by search
export const filterPropertiesBySearchTerm = (
  properties: Property[],
  searchTerm: string
): Property[] => {
  const searchTermLower: string = searchTerm.toLowerCase();

  return properties.filter((property: Property) =>
    match(property.title, searchTermLower)
  );
};
