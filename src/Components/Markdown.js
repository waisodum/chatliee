import React from "react";
import ReactMarkdown from "react-markdown";

export default function ChatAppInstructions() {
  const markdown = `
# Chat Application Instructions
## 1. Login / Register
- Use test accounts or create your own:

- **User 1**: Johndoe123 / securepassword123
- **User 2**: Janedoe123 / securepassword123
## 2. Adding Friends
- Search for a registered username and click **Add Friend**.
- Both users must add each other to start chatting.

## 3. Testing & Refreshing
- Test chat using provided accounts (already friends).
- Refresh the page to update your friend list.

Enjoy chatting!
  `;

  return (
    <div className="p-4 bg-gray-50 border rounded-lg shadow-md">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
