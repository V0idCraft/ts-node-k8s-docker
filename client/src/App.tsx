import React, { useEffect } from "react";
import { IUserAllResponse, useFetch } from "./modules/shared";
import { UserItem } from "./modules/user";
function App() {
  const [fetchCallback, { data, isLoading }] = useFetch<IUserAllResponse>({
    // this will be redirect by Ingress-nginx
    url: "/api/v1/user/all"
  });

  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

  if (isLoading && !data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      {data?.data?.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}

export default App;
