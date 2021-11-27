import React from "react";
import { IUser } from "../../shared";

export type UserItemProps = {
  user: IUser;
};

export const UserItem: React.FC<UserItemProps> = React.memo(({ user }) => {
  return (
    <React.Fragment>
      <div>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
      </div>
      <hr />
    </React.Fragment>
  );
});
