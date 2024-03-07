export default function createIteratorObject(report) {
    return {
        *[Symbol.iterator]() {
            for (const department in report) {
                const employees = report[department];
                for (const employee of employees) {
                    yield employee;
                }
            }
        }
    };
}

