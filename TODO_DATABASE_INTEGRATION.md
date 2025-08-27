# Todo Database Integration

This document describes the todo database integration feature that allows users to store their todos in the database when authenticated, while maintaining localStorage functionality for non-authenticated users.

## Overview

The todo system now supports dual storage:

- **Database storage** for authenticated users
- **localStorage storage** for non-authenticated users (fallback)

## Database Schema

### Todo Model

```prisma
model Todo {
  id          String   @id @default(cuid())
  title       String
  description String?
  time        String?
  date        DateTime
  completed   Boolean  @default(false)
  missed      Boolean  @default(false)
  archived    Boolean  @default(false)
  type        String   @default("custom") // "custom" or "suggested"
  category    String?  // "prayer" | "quran" | "dhikr" | "charity" | "learning" | "personal"
  priority    String   @default("medium") // "high" | "medium" | "low"
  timePriority Int?

  // Relationship to User
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([userId, date])
  @@index([userId, type])
  @@index([userId, completed])
  @@index([userId, archived])
}
```

## API Endpoints

### Authentication Check

- **GET** `/api/todos/check-auth`
- Returns authentication status and user info

### Todo Management

- **GET** `/api/todos` - Get all todos for authenticated user
- **POST** `/api/todos` - Create a new todo
- **PATCH** `/api/todos/[id]` - Update a todo
- **DELETE** `/api/todos/[id]` - Delete a todo

### Todo Actions

- **POST** `/api/todos/[id]/actions` - Perform actions on a todo
  - `toggle-complete` - Toggle completion status
  - `mark-missed` - Mark todo as missed
  - `archive` - Archive a todo
  - `unarchive` - Unarchive a todo

### Statistics

- **GET** `/api/todos/stats` - Get todo statistics for a specific date

## Features

### 1. Dual Storage System

- **Authenticated users**: Todos stored in PostgreSQL database
- **Non-authenticated users**: Todos stored in localStorage
- Automatic fallback to localStorage if database operations fail

### 2. Predefined Todos

- Suggested todos remain hardcoded and are generated dynamically
- Only user-created todos are stored in the database
- Suggested todos are combined with user todos in the UI

### 3. Todo States

- **Completed**: Todos marked as done
- **Missed**: Todos that were not completed on time
- **Archived**: Todos moved to archive
- All states are preserved in both storage systems

### 4. Smart Sorting

- Todos are sorted based on prayer times and current context
- Time-based priority system
- Category-based organization

## Implementation Details

### TodoService Updates

The `TodoService` class has been updated to:

- Check authentication status before making API calls
- Convert between database and interface formats
- Handle both storage systems seamlessly
- Maintain backward compatibility

### UI Integration

- All todo operations are now asynchronous
- Error handling for failed operations
- Loading states for better UX
- Automatic refresh after operations

## Migration from localStorage

When a user signs in:

1. Existing localStorage todos remain available
2. New todos are created in the database
3. No automatic migration (to preserve user choice)

## Security Features

- User authentication required for database operations
- User can only access their own todos
- Proper error handling and validation
- CSRF protection through NextAuth

## Usage Examples

### Creating a Todo

```typescript
const newTodo = await TodoService.createTodo({
  title: "Read Quran",
  description: "Read one page",
  date: new Date().toISOString(),
  category: "quran",
  priority: "high",
});
```

### Getting Todos

```typescript
// Get today's todos
const todayTodos = await TodoService.getTodosByFilter("today");

// Get all todos
const allTodos = await TodoService.getAllTodos();
```

### Updating a Todo

```typescript
const updatedTodo = await TodoService.updateTodo(todoId, {
  completed: true,
});
```

## Error Handling

The system gracefully handles:

- Network errors
- Authentication failures
- Database connection issues
- Invalid data

All errors fall back to localStorage functionality to ensure the app remains usable.

## Future Enhancements

1. **Data Migration**: Add option to migrate localStorage todos to database
2. **Sync**: Real-time synchronization between devices
3. **Backup**: Export/import functionality
4. **Analytics**: Todo completion statistics and insights
5. **Sharing**: Share todo lists with family members
