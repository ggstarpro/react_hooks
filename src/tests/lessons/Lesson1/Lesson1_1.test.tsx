import { describe, test } from 'vitest';
import {render, screen, act } from '@testing-library/react';
import Lesson1_1 from "@/lessons/Lesson1/Lesson1_1"
import userEvent from "@testing-library/user-event";

describe("Lesson1_1", () => {
  test("input textbox", async () => {
    const user = userEvent.setup();
    render(<Lesson1_1  />)
    const inputTextElement = screen.getByRole('textbox');
    expect(inputTextElement).toHaveValue('卍解');

    await user.clear(inputTextElement);
    await user.type(inputTextElement, 'Hello World')

    expect(inputTextElement).toHaveValue('Hello World');
  })

  test("click add ng Button", async () => {
    const user = userEvent.setup();
    render(<Lesson1_1  />)
    const incrementButton = screen.getByRole("button", {
      name: "Add Age NG",
    })
    const resultElement = screen.getByText(/You arr ng/i)
    expect(resultElement).toHaveTextContent("0");

    await user.click(incrementButton);

    expect(resultElement).toHaveTextContent("1");
  })

  test("click add ok Button", async () => {
    const user = userEvent.setup();
    render(<Lesson1_1  />)
    const incrementButton = screen.getByRole("button", {
      name: "Add Age OK",
    })
    const resultElement = screen.getByText(/you arr ok/i)
    expect(resultElement).toHaveTextContent("0");

    await user.click(incrementButton);

    expect(resultElement).toHaveTextContent("3");
  })
});