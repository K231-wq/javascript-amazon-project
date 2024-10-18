import { formatPrice } from "../../scripts/util/formatPriceCents.js";

describe('test suite: format currency', () => {
    it('converts cents into dollars', () => {
        expect(formatPrice(2095)).toEqual('20.95');
    });
    it('works with 0', () => {
        expect(formatPrice(0)).toEqual('0.00');
    });
    it('rounds up to the nearest cents', () => {
        expect(formatPrice(2000.5)).toEqual('20.01');
    })
});