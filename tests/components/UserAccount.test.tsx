import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

const user: User = {
  id: 1,
  name: "Red",
  isAdmin: true,
};

describe("Testing UserAccount Component", () => {
  it("should display a user name", () => {
    render(<UserAccount user={user} />);

    // const headlineName = screen.getByTestId("user-name");
    const headlineName = screen.getByText(user.name);
    expect(headlineName).toBeInTheDocument();
  });

  it("should render Edit button if user id admin", () => {
    render(<UserAccount user={user} />);

    const headlineName = screen.getByRole("button");

    expect(headlineName).toBeInTheDocument();
    expect(headlineName).toHaveTextContent(/edit/i);
  });

  it("should render Edit button if user not an admin", () => {
    render(<UserAccount user={{ ...user, isAdmin: false }} />);

    const headlineName = screen.queryByRole("button");

    expect(headlineName).not.toBeInTheDocument();
  });
});
