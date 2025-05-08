import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ChatInput from "../components/chat/ChatInput";

describe("ChatInput", () => {
  test("should render", () => {
    render(<ChatInput onSend={() => {}} />);
    expect(screen.getByPlaceholderText("Write a message...")).toBeDefined();
  });

  test("should display character count", () => {
    render(<ChatInput onSend={() => {}} />);
    const input = screen.getByPlaceholderText("Write a message...");

    fireEvent.change(input, { target: { value: "Hello" } });

    expect(screen.getByText("5/140")).toBeDefined();
  });
});
