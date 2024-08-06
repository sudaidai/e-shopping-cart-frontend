# [Inspired by the video](https://www.youtube.com/watch?v=06g6YJ6JCJU&ab_channel=Joshtriedcoding)

## Tutorial

> [Next.js Tutorail](https://www.youtube.com/watch?v=mQnWCmVErnw&t=916s&ab_channel=SangamMukherjee)

> [graphql tutorial 1](https://medium.com/@TGod-Ajayi/integrating-graphql-with-next-js-and-react-using-typescript-a-beginners-guide-e65e268dedd5)

> [graphql tutorial 2](https://hackernoon.com/setting-up-a-graphql-server-and-client-in-nextjs)

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

# graph QL
npm install @apollo/client graphql

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

## Recommend Vscode plugins

```
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- JS JSX Snippets
- Live Server
- Auto Close Tag
- CSS Peek
- css snippet
- indent-rainbow
- IntelliSense for CSS class names in HTML
```

## Generate random base64

```
openssl rand -base64 32
```

## [Lucide icons website](https://lucide.dev/icons/shield-check)

## Api Docs

```
open sql container

cd D:\hytech_Study\e-shopping-cart-backend\web
./gradlew bootRun

http://localhost:8000/swagger-ui/index.html#/
http://localhost:8000/graphiql?path=/graphql

Bearer ...token
```
