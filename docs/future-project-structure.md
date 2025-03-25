## 🌱 Future Project Structure (Scalable & Modular)

Once your project grows, the structure expands like this:

```bash
.
├── apps/
│   ├── web/                 # Web/API app
│   └── cli/                 # CLI commands (optional)
│
├── core/
│   ├── domain/
│   │   ├── entities/
│   │   ├── value-objects/
│   │   └── errors/
│   ├── application/
│   │   ├── use-cases/
│   │   │   ├── commands/
│   │   │   └── queries/
│   │   └── interfaces/
│   ├── interface-adapters/
│   │   ├── controllers/
│   │   ├── graphql/
│   │   ├── cli/
│   │   ├── webhooks/
│   │   ├── events/
│   │   ├── middlewares/
│   │   ├── presenters/
│   │   └── validators/
│   ├── infrastructure/
│   │   ├── gateways/
│   │   └── persistence/
│   └── di/
│       ├── container.ts
│       ├── ServiceRegistry.ts
│       └── resolve.ts
│
├── packages/
│   ├── db-mongodb/          # MongoDB implementation
│   ├── db-postgres/         # PostgreSQL implementation
│   ├── cache-redis/         # Redis cache adapter (for ICacheService)
│   ├── mq-rabbitmq/         # RabbitMQ adapter (for IMessageQueueService)
│   ├── email-sendgrid/      # SendGrid adapter
│   ├── shared/              # Cross-cutting shared utils
│   └── logger-pino/         # Pino logger service
│
├── tools/                  # Toolchain scripts and helpers
│   ├── db/                 # DB migration + seed tooling
│   ├── mono/               # CLI wrapper for build/test/lint/dev
│   └── template/           # Reusable project template package
│
└── design-system/           # (Optional) UI components
```

---

## 🔗 High-Level Dependency Diagram

```mermaid
graph TD

%% Core layers
A[domain] --> B[application]
B --> C[interface-adapters]
B --> D[infrastructure]
C --> E[di]
D --> E

%% App layer
E --> F[apps/web]

%% External packages
G[packages/db-mongodb] --> D
H[packages/db-postgres] --> D
I[packages/email-sendgrid] --> D
X[packages/cache-redis] --> D
Y[packages/mq-rabbitmq] --> D

%% Shared
J[shared] --> B
J --> C
J --> D
J --> E
J --> F

style A fill:#f9f,stroke:#333,stroke-width:2
style B fill:#bbf,stroke:#333,stroke-width:2
style C fill:#cfc,stroke:#333,stroke-width:2
style D fill:#fcc,stroke:#333,stroke-width:2
style E fill:#ffc,stroke:#333,stroke-width:2
style F fill:#eee,stroke:#333,stroke-width:2
style G fill:#ddd,stroke:#999,stroke-dasharray: 5
style H fill:#ddd,stroke:#999,stroke-dasharray: 5
style I fill:#ddd,stroke:#999,stroke-dasharray: 5
style X fill:#ddd,stroke:#999,stroke-dasharray: 5
style Y fill:#ddd,stroke:#999,stroke-dasharray: 5
style J fill:#eee,stroke:#666,stroke-dasharray: 3
```

---

## Using Turborepo on VS Code

This may type not update, use `CMD + Shift + P` and type "TypeScript: Restart TypeScrip Server" to update the type.
