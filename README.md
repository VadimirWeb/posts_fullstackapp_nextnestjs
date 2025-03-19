# fullstackapp_nextnestjs

Проект с аунтификацией с созданием постов
- TypeScript — для строгой типизации JavaScript
- Next.js 15 — Клиентский рендеринг
- NestJS — бекенд с REST API
- Prisma — ORM для работы с PostgreSQL
- JWT + Cookies — аутентификация
- Tailwind CSS — стилизация интерфейса

## Установка

Использовать пакетный менеджер [npm](https://www.npmjs.com/) для установки проета.

```bash
npm i
```
Произвести установку в /frontend и /backend по отдельности

## Использование

В папке /backend создайте файл .env и введите свои данный от [Базы Данных Postgres](https://www.postgresql.org/) 
```typescript
DATABASE_URL="postgresql://ЛОГИН:ПАРОЛЬ@localhost:5432/ИМЯ_БД"
```

В файле auth.module.ts можете задать свой SECRET для коректной работы JWT 
```typescript
JwtModule.register({
            secret: 'СЕКРЕТНЫЙ_КЛЮЧ',
        })
```
frontend/lib/api/apiClient.ts следите чтобы порт сервера совпадал с написаным

#### ПЕРЕД ИСПОЛЬЗОВАНИЕМ СЛЕДИТЕ НА КАКИХ ПОРТАХ ОТКРЫЛОСЬ ПРИЛОЖЕНИЕ
