import mapMonumentsDtotoMonuments from "../dto/mapper";
import MonumentDto from "../types";
import MonumentClientStructure from "./types";

class MonumentClient implements MonumentClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getMonument = async (): Promise<MonumentDto[]> => {
    const response = await fetch(`${this.apiUrl}/monuments`);

    const { monuments } = (await response.json()) as {
      monuments: MonumentDto[];
    };

    return mapMonumentsDtotoMonuments(monuments);
  };
}

export default MonumentClient;
