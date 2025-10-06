// lib/chatbot.ts

class ChatbotService {
  /**
   * Processes a user message and returns a chatbot reply.
   * Replace this stub with integration to a real AI/LLM if needed.
   *
   * @param message - The user message
   * @returns The chatbot's response
   */
  static async ask(message: string): Promise<string> {
    // Simple hardcoded logic for now — replace with AI/LLM later.
    const lower = message.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi")) {
      return "Hello! How can I assist you today?";
    }

    if (lower.includes("help")) {
      return "Sure! Please tell me what you need help with.";
    }

    // Default response
    return "I'm not sure how to respond to that. Could you rephrase?";
  }
}

export default ChatbotService;
