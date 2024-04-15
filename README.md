# [Inspired by the video](https://www.youtube.com/watch?v=06g6YJ6JCJU&ab_channel=Joshtriedcoding)

## Create project

```
[Frontend]
# for create a next.js app directly in the current folder
npx create-next-app@latest ./

√ Would you like to use TypeScript? ... No / [Yes]
√ Would you like to use ESLint? ... No / [Yes]
√ Would you like to use Tailwind CSS? ... No / [Yes]
√ Would you like to use `src/` directory? ... No / [Yes]
√ Would you like to use App Router? (recommended) ... No / [Yes]
√ Would you like to customize the default import alias (@/*)? ... [No] / Yes

# using shadcn-ui
npx shadcn-ui@latest init

# install shadcn-ui button
npx shadcn-ui@latest add button

# using lucide icon (https://lucide.dev/icons/)
npm i lucide-react

# using shadcn-ui sheet
npx shadcn-ui@latest add sheet

# using shadcn-ui separator
npx shadcn-ui@latest add separator

# using shadcn-ui label & input
npx shadcn-ui@latest add label input

# add several plugins for form validattions
npm i react-hook-form @hookform/resolvers zod sonner

[Backend]
npm i express
npm i -D @types/express

npm i dotenv

npm i payload # [doc](https://github.com/payloadcms/payload)

npm i cross-env

# [trpc doc](https://trpc.io/)
npm i @trpc/client @trpc/next @trpc/react-query @trpc/server @tanstack/react-query
```

## First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## shortcuts for vscode

```
# select a html block
ctrl + m

# get rid of unused imports
shift + alt + o
```

