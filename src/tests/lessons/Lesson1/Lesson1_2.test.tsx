import { describe, test } from 'vitest';
import {render, screen, act } from '@testing-library/react';
import Lesson1_2 from "@/lessons/Lesson1/Lesson1_2"
import userEvent from "@testing-library/user-event";


const INIT_INFO = {
  firstName: "Alice",
  lastName: "Soft",
  email: "test@example.com"
};

describe("Lesson1_1", () => {
  test("input First Name", async () => {
    const user = userEvent.setup();
    render(<Lesson1_2  />)
    const inputTextElement = screen.getByRole('textbox', {
      name: /first name:/i
    });

    const result = screen.getByText(/alicesofttest@example\.com/i);
    const afterFirstName = '氏'
    expect(result).toHaveTextContent(INIT_INFO.firstName);
    expect(result).not.toHaveTextContent(afterFirstName);

    await user.clear(inputTextElement);
    await user.type(inputTextElement, afterFirstName)

    expect(result).toHaveTextContent(afterFirstName);
  })

  test("input Last Name", async () => {
    const user = userEvent.setup();
    render(<Lesson1_2  />)
    const inputTextElement = screen.getByRole('textbox', {
      name: /last name:/i
    });

    const result = screen.getByText(/alicesofttest@example\.com/i);
    const afterLastName = '氏'
    expect(result).toHaveTextContent(INIT_INFO.firstName);
    expect(result).not.toHaveTextContent(afterLastName);

    await user.clear(inputTextElement);
    await user.type(inputTextElement, afterLastName)

    expect(result).toHaveTextContent(afterLastName);
  })

  test("input Email", async () => {
    const user = userEvent.setup();
    render(<Lesson1_2  />)
    const inputTextElement = screen.getByRole('textbox', {
      name: /Email:/i
    });

    const result = screen.getByText(/alicesofttest@example\.com/i);
    const afterEmail = 'god@example.com'
    expect(result).toHaveTextContent(INIT_INFO.firstName);
    expect(result).not.toHaveTextContent(afterEmail);

    await user.clear(inputTextElement);
    await user.type(inputTextElement, afterEmail)

    expect(result).toHaveTextContent(afterEmail);
  })
});