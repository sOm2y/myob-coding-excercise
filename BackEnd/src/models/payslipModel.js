import _ from 'lodash';
import { taxRanges } from '../utils/taxRange';

const month = 12;

class Payslip {
    constructor(csv) {
        console.log(csv);
        this.name = this.getFullname(csv.firstName, csv.lastName);
        this.payPeriod = csv.startDate;
        this.grossIncome = this.getGrossIncome(csv.annualSalary);
        this.incomeTax = this.getIncomeTax(csv.annualSalary);
        this.netIncome = this.getNetIncome(this.grossIncome, this.incomeTax);
        this.super = this.getSuper(this.grossIncome, csv.superRate);
    }

    getFullname(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }

    getGrossIncome(annualSalary) {
        return Math.floor(annualSalary / 12);
    }

    getIncomeTax(annualSalary) {
        let taxRange = this.getTaxRange(annualSalary);
        let difference = annualSalary - taxRange.min + 1;

        return Math.round((taxRange.base + difference * taxRange.rate)/month);
    }

    getTaxRange(annualSalary) {
        return _.find(taxRanges, (taxRange) => {
            return taxRange.max === null || annualSalary <= taxRange.max;
        });
    }

    getNetIncome(grossIncome, incomeTax) {
        return grossIncome - incomeTax;
    }

    getSuper(grossIncome, superRate) {
        return Math.floor(grossIncome * parseFloat(superRate) / 100.0);
    }


}

export default Payslip;