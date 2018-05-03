const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h3>Thanh cong.</h3>');
});

// app.get('/tinh/cong/:soA/:soB', (req, res) => {
//     const { soA, soB } = req.params;
//     console.log(soA, soB);
//     res.send('Ket qua = ' + (+soA + +soB));
// });
app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const pt = new PhepTinh(soA, soB, tenPhepTinh);
    res.send(pt.getResultString());
});

app.listen(3000, () => console.log('Server started.'));

class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;
    }

    get sign() {
        if (this.tenPhepTinh === 'CONG') return '+';
        if (this.tenPhepTinh === 'TRU') return '-';
        if (this.tenPhepTinh === 'NHAN') return '*';
        return '/';
    }

    getResultString() {
        const expression = `${this.soA} ${this.sign} ${this.soB}`;
        return `${expression} = ${eval(expression)}`;
    }
}
