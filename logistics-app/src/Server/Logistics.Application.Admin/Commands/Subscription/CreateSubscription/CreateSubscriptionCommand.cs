﻿using Logistics.Shared;
using Logistics.Shared.Consts;
using MediatR;

namespace Logistics.Application.Admin.Commands;

public class CreateSubscriptionCommand : IRequest<Result>
{
    public SubscriptionStatus Status { get; set; }
    public string TenantId { get; set; } = default!;
    public string PlanId { get; set; } = default!;
}
