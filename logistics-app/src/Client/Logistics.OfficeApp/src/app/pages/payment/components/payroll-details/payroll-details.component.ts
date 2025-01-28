import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PayrollDto} from "@/core/models";
import {SalaryType, SalaryTypeEnum} from "@/core/enums";

@Component({
  selector: "app-payroll-details",
  standalone: true,
  templateUrl: "./payroll-details.component.html",
  imports: [CommonModule],
})
export class PayrollDetailsComponent {
  public salaryType = SalaryType;
  @Input({required: true}) payroll!: PayrollDto;

  getSalaryTypeDesc(enumValue: SalaryType): string {
    return SalaryTypeEnum.getValue(enumValue).description;
  }
}
