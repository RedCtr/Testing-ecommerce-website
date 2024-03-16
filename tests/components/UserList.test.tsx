import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("Test User List components", () => {
  it("should render no users when user list is empty", () => {
    render(<UserList users={[]} />);

    const noUsersElement = screen.getByText(/no users/i);
    expect(noUsersElement).toBeInTheDocument();
  });

  it("should render user list", () => {
    const users: User[] = [
      { id: 1, name: "Red" },
      { id: 2, name: "Ctr" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });

    const noUsersElement = screen.getAllByRole("link");
    // expect(noUsersElement).toBeInTheDocument();
    expect(noUsersElement.length).toBe(2);
  });
});
