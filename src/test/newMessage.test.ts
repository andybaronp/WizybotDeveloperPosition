import { describe, test, expect } from "vitest";
import { newMessage } from "../utils/newMessage";

describe("newMessage", () => {
  test("should create a user message with default values", () => {
    const message = newMessage("Hello", false, false);

    expect(message).toEqual({
      id: message.id,
      text: "Hello",
      isAgent: false,
      time: message.time,
      showProductRecommendation: false,
    });
  });

  test("should create an agent message with default values", () => {
    const message = newMessage("How can I help?", true);

    expect(message).toEqual({
      id: message.id,
      text: "How can I help?",
      isAgent: true,
      time: message.time,
      showProductRecommendation: false,
    });
  });

  test("should create a message with product recommendation", () => {
    const message = newMessage("Check this product", true, true);
    expect(message).toEqual({
      id: message.id,
      text: "Check this product",
      isAgent: true,
      time: message.time,
      showProductRecommendation: true,
    });
  });
});
