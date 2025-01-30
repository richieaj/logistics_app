# Use the correct .NET 9.0 image for your project (replace with 6.0 if 9.0 is not available)
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Corrected file paths for your .csproj files
COPY ["src/Server/Logistics.API/Logistics.API.csproj", "Server/Logistics.API/"]
COPY ["src/Server/Logistics.Application.Admin/Logistics.Application.Admin.csproj", "Server/Logistics.Application.Admin/"]
COPY ["src/Server/Logistics.Application.Core/Logistics.Application.Core.csproj", "Server/Logistics.Application.Core/"]
COPY ["src/Server/Logistics.Application.Tenant/Logistics.Application.Tenant.csproj", "Server/Logistics.Application.Tenant/"]
COPY ["src/Server/Logistics.DbMigrator/Logistics.DbMigrator.csproj", "Server/Logistics.DbMigrator/"]
COPY ["src/Server/Logistics.Domain/Logistics.Domain.csproj", "Server/Logistics.Domain/"]
COPY ["src/Server/Logistics.IdentityServer/Logistics.IdentityServer.csproj", "Server/Logistics.IdentityServer/"]
COPY ["src/Server/Logistics.Infrastructure.EF/Logistics.Infrastructure.EF.csproj", "Server/Logistics.Infrastructure.EF/"]

# Restore the project dependencies
RUN dotnet restore "Server/Logistics.API/Logistics.API.csproj"

# Copy the entire repository into the container
WORKDIR /
COPY . ./

# Build the project
WORKDIR "/src/Server/Logistics.API"
RUN dotnet build "Logistics.API.csproj" -c Release -o /app/build

# Publish the build artifacts
FROM build AS publish
RUN dotnet publish "Logistics.API.csproj" -c Release -o /app/publish

# Use the base image to run the application
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Logistics.API.dll"]
