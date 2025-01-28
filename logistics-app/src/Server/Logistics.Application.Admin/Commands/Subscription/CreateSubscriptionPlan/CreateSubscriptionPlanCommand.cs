﻿using Logistics.Shared;
using MediatR;

namespace Logistics.Application.Admin.Commands;

public class CreateSubscriptionPlanCommand : IRequest<Result>
{
    public string Name { get; set; } = default!;
    public string? Description { get; set; }
    public decimal Price { get; set; }
}
