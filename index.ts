type Base = "class" | "greek" | "napalion" | "peperoni";

type PaymentColumn = ("id" | "amount" | "to" | "notes")[];


import {appendFileSync} from "fs";


interface PaymentMethod {
    id: number;
    amount: number;
    from: string;
    to: string;
    notes: string;
    base?: Base;
}

class CSVWrite {
    constructor(private paymentColumns: PaymentColumn) {
        this.csv = this.paymentColumns.join(",") + "\n";
    }

    private csv: string;

    save() {
        
    }

    addRows(payments: PaymentMethod[]) {
        const csvRows = payments.map((payment) => this.formatRow(payment)).join("");
        this.csv += csvRows;
        console.log(this.csv);
    }

    private formatRow(payment: PaymentMethod): string {
        return this.paymentColumns.map((col) => payment[col]).join(",") + "\n";
    }
}

const file1 = new CSVWrite(["id", "amount", "to", "notes"]);

file1.addRows([
    { id: 1, amount: 500, from: "Doe", to: "Bob", notes: "For dinner" },
])