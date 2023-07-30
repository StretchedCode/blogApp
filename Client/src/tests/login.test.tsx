import Login from "../pages/login"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test("render of Form", () => {
  const { container } = render(<Login></Login>)

  expect(screen.getByRole("form")).toMatchSnapshot()
})

test("DOM structure matches snapshot", () => {
  const { container } = render(<Login></Login>)

  expect(container).toMatchSnapshot()
})
