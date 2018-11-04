import TaxRange from '../models/taxRangeModel';

export const taxRanges = [
    new TaxRange(0, 18200, 0, 0),
    new TaxRange(18201, 37000, 0.19, 0),
    new TaxRange(37001, 87000, 0.325, 3572),
    new TaxRange(87001, 180000, 0.37, 19822),
    new TaxRange(180001, null, 0.45, 54232),
];