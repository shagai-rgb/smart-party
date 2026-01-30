# Frontend Project

Production-ready React (Vite) + TypeScript frontend.

---

## 🚀 Getting Started

### Prerequisites

- **pnpm** package manager

Install pnpm if not installed:

```bash
npm install -g pnpm
```

Verify:

```bash
pnpm -v
```

---

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-folder>
pnpm install
```

> 💡 First install may take a bit — totally normal.


### Development

Start the dev server:

```bash
pnpm dev
```

Open in browser:

```
http://localhost:4000
```

---

### Production Build

Build the app:

```bash
pnpm build
```

---

## 📁 Project Structure

See the **Frontend Project Structure & Naming Guide** section above for detailed folder and naming conventions.

## 📁 Folder Structure (Фолдерын бүтэц)

```
├── public
│   └── static/                   # Статик файлууд (зураг гэх мэт)
└── src
    ├── components/
    │   ├── custom/                  # Өөрийн бичсэн компонентууд
    │   ├── ui/                      # Shadcn/ui компонентууд
    │   └── utils/
    ├── layouts/                     # Route-ын layout-ууд
    │   ├── components/              # header.tsx, side-bar-header.tsx гэх мэт
    │   ├── dashboard.layout.tsx
    │   └── protected.layout.tsx
    ├── lib/                         # UI utility-ууд
    ├── pages/                       # Хуудасны компонентууд
    │   ├── home/
    │   │   ├── home.page.tsx
    │   │   └── components
    │   │        └── create-user.form.tsx
    │   ├── dashboard/
    │   │   ├── components
    │   │   │    └── create-order.form.tsx
    │   │   └── order.page.tsx
    │   └── auth/
    │       └── login.page.tsx
    ├── routes/                      # Route тохиргоонууд
    │   ├── app.routes.tsx
    │   ├── protected.routes.tsx
    │   └── public.routes.tsx
    └── shared/                      # Нийтлэг ашиглагдах зүйлс
        ├── constants/               # Тогтмол утгууд болон config-ууд
        ├── contexts/                # React context provider-ууд
        ├── mutations/               # TanStack mutation-ууд 🚧
        ├── queries/                 # TanStack query-ууд 🚧
        ├── stores/                  # Zustand store-ууд
        ├── types/
        │   ├── api.types.ts
        │   └── common.types.ts
        └── utils/                   # Utility функцүүд
```

---

## 📝 Naming Conventions (Нэрлэх дүрэм)

### 1. **Файл ба Фолдер**

```typescript
// ✅ Фолдерууд: жижиг үсэг + зураас
management/
user/
order/

// ✅ Компонент файлууд: kebab-case (жижиг үсэг + зураас)
button.tsx
user-profile.card.tsx
order-details.modal.tsx

// ✅ Mutations & Queries: use- угтвартай
order-list.tsx        →  export const useOrderList = () => {}
order-create.tsx      →  export const useOrderCreate = () => {}

// ✅ Type файлууд: kebab-case
user.types.ts
order.types.ts

// ✅ Constant файлууд:
firebase.ts
cognito.ts
```

### 2. **Компонентууд**

```typescript
// ✅ Компонентын нэр: PascalCase (том үсгээр эхлэх)
export const Button = () => {}
export const UserProfileCard = () => {}
```

### 3. **Hook-ууд**

```typescript
// ✅ Hook нэр: camelCase + 'use' угтвартай
export function useAuth() {}
export function useOrderList() {}
```

### 4. **Type болон Interface**

```typescript
// ✅ Type-ууд: PascalCase + 'T' угтвартай
export type TUser = {}
export type TOrder = {}
export type TProps = {}
export type TApiResponse<T> = {}

// ✅ Interface-үүд: PascalCase + 'I' угтвартай
export interface IAuthContext {}
export interface IFormProps {}

```
