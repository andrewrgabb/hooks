import { Property } from "./property-types";
import PropertyData from "./property-data.json";

export const fetchProperties = (): Property[] => {
  // Do API calls to the backend here using async - await
  // This example uses 'dummy data' to mimic what would be returned from the back end.
  const properties: Property[] = PropertyData;

  return properties;
};
