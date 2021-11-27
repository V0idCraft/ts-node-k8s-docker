import React from "react";
import { render } from "@testing-library/react";
import { UserItem } from ".";
import { IUser } from "../../shared";

describe("UserItem component tests", () => {
  it("Should render user in the screen", () => {
    const user: IUser = {
      firstName: "Jose",
      lastName: "Gil",
      id: "testId",
    };
    const { container } = render(<UserItem user={user} />);
    expect(container).toBeInTheDocument();
  });
});
