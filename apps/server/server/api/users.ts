import { User } from "@ecom-template/types";

export default defineEventHandler(async (event) => {
  const users: User[] = [
    {
      id: "1",
      email: "bob@test.com",
      password: "bob123",
    },
    {
      id: "2",
      email: "alice@test.com",
      password: "alice123",
    },
  ];

  return users;
});
