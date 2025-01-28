﻿using FluentValidation;

namespace Logistics.Application.Tenant.Commands;

internal sealed class DeleteLoadValidator : AbstractValidator<DeleteLoadCommand>
{
    public DeleteLoadValidator()
    {
        RuleFor(i => i.Id).NotEmpty();
    }
}
