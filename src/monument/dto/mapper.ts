import MonumentDto from "./types";
import Monument from "../types";

const mapMonumentsDtotoMonuments = (
  monumentsDto: MonumentDto[],
): Monument[] => {
  const monuments = monumentsDto.map<Monument>(
    ({ name, country, city, ...monumentDto }) => ({
      ...monumentDto,
      name,
      city,
      country,
      imageAlt: `Monument of ${name}, located in ${city}, ${country}`,
    }),
  );

  return monuments;
};

export default mapMonumentsDtotoMonuments;
