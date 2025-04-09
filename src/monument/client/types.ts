import MonumentDto from "../types";

interface MonumentClientStructure {
  getMonument: () => Promise<MonumentDto[]>;
}

export default MonumentClientStructure;
