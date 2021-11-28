import path from "path";

import { Prisma } from "@prisma/client";
import {
  makeObjectParser,
  parseCsvFile,
} from "../../../core";

const CSV_FILE_NAME = path.join(__dirname, "fixtures.csv");

export const loadUsers = async (): Promise<Partial<Prisma.UserCreateInput>[]> =>
  parseCsvFile(
    CSV_FILE_NAME,
    makeObjectParser<Prisma.UserCreateInput>({
      id: String,
      firstName: String,
      lastName: String,
    })
  );
