# Q&A

## 🆚 Shared vs Domain

### `shared/`
- Generic, reusable code: utilities, types, config loaders, constants
- Not tied to any business logic
- Can be used by any layer **except** `domain`
- Example: `formatDate()`, `PaginatedResult<T>`, `Zod` validators

### `domain/`
- Contains business entities, rules, and core logic
- No external dependencies — must be 100% pure and stable
- Should not import from `shared` (to preserve isolation)
- Example: `User`, `Order`, `EmailAddress`, domain-specific errors

## 📚 Glossary

| Term              | Meaning                                                                 |
|-------------------|-------------------------------------------------------------------------|
| **Use Case**       | One unit of business logic (e.g. CreateUser)                            |
| **Controller**     | Handles incoming requests and calls use cases                          |
| **Presenter**      | Formats output for UI or external clients                              |
| **Gateway**        | Interface to external systems (e.g. DB, Email, Redis)                  |
| **Interface Adapter** | Layer that translates between external input/output and core logic     |
| **Repository**     | Contract for accessing data, implemented in infrastructure              |