import mapMonumentsDtotoMonuments from "../dto/mappers";
import Monument from "../types";
import MonumentClientStructure from "./types";

class MonumentClient implements MonumentClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getMonument = async (): Promise<Monument[]> => {
    const response = await fetch(`${this.apiUrl}/monuments`);

    const { monuments } = (await response.json()) as {
      monuments: Monument[];
    };

    return mapMonumentsDtotoMonuments(monuments);
  };
}

export default MonumentClient;
