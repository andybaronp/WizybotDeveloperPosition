# Wizybot Developer Position

This project is a chat application component developed as part of the Wizybot Developer Position. It includes a chat input component with testing setup using Vitest and React Testing Library.

## Demo

👉 [View Demo](https://wizybot-developer-position.vercel.app/)

## Project Setup

### Prerequisites

- Node.js (version 20.X.X)
- npm (version 10.X.X)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/andybaronp/WizybotDeveloperPosition.git
   ```

2. Navigate to the project directory:

   ```bash
   cd WizybotDeveloperPosition
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Development

To start the development server, run:

```bash
npm run dev
```

## Testing

This project uses Vitest for testing. To run the tests, execute:

```bash
npm test


```

## Project Structure

```bash
 └── WizybotDeveloperPosition
    └── public
        └── vite.svg
        └── wizybot-favicon.png
    └── src
        └── api
            └── apiProdcutsRecommendation.ts
            └── apiQuotes.ts
        └── App.css
        └── App.tsx
        └── assets
            └── wizybot-logo.png
            └── wizybot.webp
        └── components
            └── CarouselProdcuts.tsx
            └── chat
                └── ChatBubble.tsx
                └── ChatFooter.tsx
                └── ChatHeader.tsx
                └── ChatInput.tsx
                └── ChatMessages.tsx
                └── ChatTypingIndicator.tsx
                └── ChatWindow.tsx
            └── layout
                └── AppLoyout.tsx
                └── Header.tsx
            └── MainContent.tsx
        └── hooks
            └── useChat.ts
            └── useProductsRecommendations.ts
        └── index.css
        └── interfaces
            └── ChatMessage.ts
            └── Prodcuts.ts
        └── main.tsx
        └── README.md
        └── test
            └── ChatInput.test.tsx
            └── newMessage.test.ts
            └── setup.ts
        └── utils
            └── constans.ts
            └── dates.ts
            └── getRadoms.ts
            └── newMessage.ts
        └── vite-env.d.ts
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```

## Screenshots

![Chat Window](https://res.cloudinary.com/jrdev/image/upload/v1746738925/wizy/v3zkvnu3efdsjh7duy4i.png)

![Chat Window](https://res.cloudinary.com/jrdev/image/upload/v1746739010/wizy/a3gfgvxgedfd6kyvc19g.png)

![Chat Window](https://res.cloudinary.com/jrdev/image/upload/v1746739011/wizy/zuvlwrzisnmk6fzdkdi3.png)

![Chat Window](https://res.cloudinary.com/jrdev/image/upload/v1746745516/wizy/bszvzx9ddltsjojtvqeb.png)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or improvements.

## License

This project is licensed under the MIT License.
