import Store from "../../src/assets/js/store2";

describe("Store localStorage", () => {
    it("key undefined", () => {
        expect(() => { new Store() }).toThrow('key undefined')
    });
});
