# Logistics Optimization Management Solution

## Getting Started

Follow these steps to get the project up and running:

1. Install SDKs 
   - [Download](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) and install the .NET 8 SDK. 
   - Install Bun runtime to run Angular project. Follow [these](https://bun.sh/docs/installation) instructions.

2. Clone this repository: 
    ```
    $ git clone https://github.com/suxrobGM/logistics-app.git
    $ cd logistics-app
    ```

3. Install Angular app dependencies:
   ```
   cd src\Client\Logistics.OfficeApp
   bun install
   ```

4. Update database connection strings: 
   Modify local or remote `MS SQL` database connection strings in the [Web API appsettings.json](./src/Server/Logistics.API/appsettings.json) and the [IdentityServer appsettings.json](./src/Server/Logistics.IdentityServer/appsettings.json) under the `ConnectionStrings:MainDatabase` section. Update tenant databases configuration in the [Web API appsettings.json](./src/Server/Logistics.API/appsettings.json) under the `TenantsConfig` section.

5. Seed databases:
   To initialize and populate the databases, run the `seed-databases.cmd` script provided in the repository.

6. Run applications:
   Launch all the applications in the project using the respective `.cmd` scripts in the repository.

7. Access the applications:
   Use the following local URLs to access the apps:
    - Web API: https://127.0.0.1:7000
    - Identity Server: https://127.0.0.1:7001
    - Admin app: https://127.0.0.1:7002
    - Office app: https://127.0.0.1:7003

## Architectural Overview

### Technical Stack
- .NET 8
- ASP.NET Core
- Entity Framework Core
- Deunde Identity Server
- FluentValidator
- MediatR
- MS SQL
- xUnit
- Moq
- Angular 18
- PrimeNG
- Blazor
- MAUI
- Firebase
- SignalR
- Docker
- CI/CD
- Bun

### Design Patterns
- Multi-Tenant Architecture
- Domain-Driven Design
- CQRS
- Domain Events
- Event Sourcing
- Unit Of Work
- Repository & Generic Repository
- Inversion of Control / Dependency injection
- Specification Pattern