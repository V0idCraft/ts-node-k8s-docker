import { mapValues } from "lodash";
import { ObjectFieldParsers, ObjectParser } from "./types";

/**
 * This function makes it simple to build a function which will transform an object containing serialized (string)
 * values to an object of the correct shape by specifying mapper functions that will be called for each corresponding
 * field on the given object.
 *
 * See the unit tests for a useful example.
 */
export const makeObjectParser =
  <T>(objectParser: ObjectFieldParsers<T>): ObjectParser<T> =>
  (data) =>
    mapValues(data, (value, key) => {
      return key in objectParser ? objectParser[key](value, data) : value;
    });
