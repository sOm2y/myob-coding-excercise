import { expect } from "chai";
import Payslip from '../models/payslipModel';


describe('Payslip', () => {
    let payslip;
    describe('When there is gross income, tax income and super rate', () => {
        beforeEach(() => {
            let csvToJson = {
                firstName: 'Yue',
                lastName: 'Yin',
                annualSalary: '210000',
                superRate: '5%',
                startDate: '01 December – 31 December'
            }
            payslip = new Payslip(csvToJson)
        });
        it('should return full name', () => {
            expect(payslip.name).to.equal("Yue Yin");
        });

        it('should return monthly gross income', () => {
            expect(payslip.grossIncome).to.equal(17500);
        });

        it('should return monthly tax income', () => {
            expect(payslip.incomeTax).to.equal(5644);
        });

        it('should return monthly net income', () => {
            expect(payslip.netIncome).to.equal(11856);
        });

        it('should return monthly super income', () => {
            expect(payslip.super).to.equal(875);
        });
    });


});