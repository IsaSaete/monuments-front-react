import Monument from "../types";

interface MonumentClientStructure {
  getMonument: () => Promise<Monument[]>;
}

export default MonumentClientStructure;
