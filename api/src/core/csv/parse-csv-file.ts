import { parseFile, ParserOptionsArgs } from "@fast-csv/parse";
import { ObjectParser } from "./types";

/**
 * Parses the csv file at the given file path, applying the given mapper to each row of data.
 * Assumes the first row contains headers which will be used define the keys of the objects passed into the mapper
 */
export async function parseCsvFile<Output, CsvData = Output>(
  filePath: string,
  mapper: ObjectParser<Output, CsvData>,
  options: ParserOptionsArgs = {}
): Promise<Output[]> {
  return new Promise((resolve, reject) => {
    const allIds = new Set<string>();

    const result: Output[] = [];

    parseFile(filePath, {
      headers: true,
      ...options,
    })
      .on("error", reject)
      .on("data", (data) => {
        const mappedData = mapper(data);
        // If we have an id field, make sure we don't have duplicates.
        // Since we're doing an upsert, this can cause arbitrary failures when seeding if two create queries for the same record
        // try and run at the same time.
        const newId = (mappedData as any)?.id;
        if (newId != null) {
          if (allIds.has(newId)) {
            reject(`Duplicate ID = ${newId} found in CSV = ${filePath}`);
          }
          allIds.add(newId);
        }

        result.push(mappedData);
      })
      .on("end", () => resolve(result));
  });
}
