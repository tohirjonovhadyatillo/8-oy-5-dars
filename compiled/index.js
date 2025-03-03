"use strict";
class CSVWrite {
    paymentColumns;
    constructor(paymentColumns) {
        this.paymentColumns = paymentColumns;
        this.csv = this.paymentColumns.join(",") + "\n";
    }
    csv;
    save() {
    }
    addRows(payments) {
        const csvRows = payments.map((payment) => this.formatRow(payment)).join("");
        this.csv += csvRows;
        console.log(this.csv);
    }
    formatRow(payment) {
        return this.paymentColumns.map((col) => payment[col]).join(",") + "\n";
    }
}
const file1 = new CSVWrite(["id", "amount", "to", "notes"]);
file1.addRows([
    { id: 1, amount: 500, from: "Doe", to: "Bob", notes: "For dinner" },
]);
