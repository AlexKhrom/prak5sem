// ATTACK_WEIGHT = [[], [], [], [], [], []];
// ATTACK_WEIGHT[1][1] = 0.1;
// ATTACK_WEIGHT[2][1] = 2;
// ATTACK_WEIGHT[3][1] = 4;
// ATTACK_WEIGHT[4][1] = 6;
// ATTACK_WEIGHT[5][1] = 1000;
//
// ATTACK_WEIGHT[1][2] = 0.25;
// ATTACK_WEIGHT[2][2] = 5;
// ATTACK_WEIGHT[3][2] = 7;
// ATTACK_WEIGHT[4][2] = 100;
// ATTACK_WEIGHT[5][2] = 1000;
//
// ATTACK_WEIGHT[5][0] = 1000;
//
// class Attack {
//     constructor(cap = 0, pot = 0, div = 1) {
//         this.capability = cap;	//Мощность
//         this.potential = pot;	//Потенциал
//         this.divider = div;	//Делитель
//     }
//
//     countWeigth() {
//         return obj.attackWeight[this.capability][this.potential] / this.divider
//     }
// }

class Cell {
    constructor(weight, i, j) {
        this.weight = weight;
        this.i = i;
        this.j = j;
    }
}


var obj = {
    iter: 0,
    mas: 0,
    iRow: 3,
    aiPik: -1,
    attackWeight: 0,
    fillAttackWeight: function () {
        n = this.mas.length()
        this.attackWeight = new Array(this.iRow);
        for (i = 1; i <= n; i++) {
            this.attackWeight[i] = new Array(3);
            if (i === this.iRow) {
                this.attackWeight[i][0] = 10000;
                this.attackWeight[i][1] = 10 * i * 1000;
                this.attackWeight[i][2] = 10 * i * 1000 + 11;
            } else {
                this.attackWeight[i][1] = 10 * i;
                this.attackWeight[i][2] = 10 * i + 11;
            }
        }

    },
    maxInMas(mas) {
        max = mas[0];
        for (i = 0; i < mas.length; i++) {
            if (mas[i] > max) {
                max = mas[i];
            }
        }
        return max;
    },
    minInMas(mas) {
        max = mas[0];
        for (i = 0; i < mas.length; i++) {
            if (mas[i] < max) {
                max = mas[i];
            }
        }
        return max;
    }
    ,
    fillMas: function (n) {//-1 - пусто; 0 - крестик ; 1 - нолик;
        this.mas = new Array(n);
        for (i = 0; i < n; i++) {
            this.mas[i] = new Array(n);
            for (j = 0; j < n; j++) {
                this.mas[i][j] = -1;
            }
        }
        // this.mas[0][0] = 0;
        // document.getElementById("block0").innerHTML+="X";
        // this.mas[3][3] = 1;
        // document.getElementById("block15").innerHTML+="O";
        // this.mas[2][1] = 0;
        // this.mas[2][2] = 0;
        //
        // this.mas[0][2] = 1;
        // this.mas[1][0] = 1;
        // this.mas[1][2] = 1;

    },
    checkMas: function (mas, i, j) {
        var count = 0;
        for (l = i - this.iRow + 1; l < i + this.iRow; l++) {
            if (mas[l] !== undefined) {
                if (mas[l][j] === mas[i][j]) {
                    count++;
                    if (count >= this.iRow)
                        return 1;
                } else
                    count = 0;
            }
        }
        count = 0;
        for (l = j - this.iRow + 1; l < j + this.iRow; l++) {
            if (mas[i][l] !== undefined) {
                if (mas[i][l] === mas[i][j]) {
                    count++;
                    if (count >= this.iRow)
                        return 1;
                } else
                    count = 0;
            }
        }
        if (count >= this.iRow) {
            // console.log("count = ",count);
            return 1;
        }
        count = 0;
        for (l = 1 - this.iRow; l < this.iRow; l++) {
            if (mas[i - l] !== undefined) {
                if (mas[i - l][j - l] !== undefined) {
                    if (mas[i - l][j - l] === mas[i][j]) {
                        count++;
                        if (count >= this.iRow)
                            return 1;
                    } else count = 0;
                }
            }
        }
        if (count >= this.iRow)
            return 1;
        count = 0;
        for (l = 1 - this.iRow; l < this.iRow; l++) {
            if (mas[i - l] !== undefined) {
                if (mas[i - l][j + l] !== undefined) {
                    if (mas[i - l][j + l] === mas[i][j]) {
                        count++;
                        if (count >= this.iRow)
                            return 1;
                    } else
                        count = 0;
                }
            }
        }
        if (count >= this.iRow)
            return 1;
        k = 0;
        for (i = 0; i < mas.length; i++) {
            for (j = 0; j < mas.length; j++) {
                if (mas[i][j] === -1)
                    k++;
            }
        }
        if (k === 0)
            return 2;///draw
        return 0;
    },
    draw: function (n) {
        document.getElementById("sect").innerHTML = "";
        // var n = document.getElementById('fieldWidth').getAttribute('value');
        for (var i = 0; i < n; i++) {
            var str = '<ul> ';
            for (var j = 0; j < n; j++) {
                str += "<li><div class='block' id='block" + (i * n + j) + "' onclick = 'obj.iteration(this," + i + "," + j + ")'></div></li>";
            }
            str += '</ul>'
            console.log(i, j);
            document.getElementById("sect").innerHTML += str;
        }
    },
    drawTurn(it, i, j, mas = this.mas) {
        str = "block" + (i * this.mas.length + j);
        if (it % 2 === 0) {
            document.getElementById(str).style = "color:rgb(237,76,119)";
            document.getElementById(str).innerHTML = "X";
            document.getElementById("nextPik").innerHTML = "NEXT PIK : O";
        } else {
            document.getElementById(str).style = "color:rgb(246,171,50)";
            document.getElementById(str).innerHTML = "O";
            document.getElementById("nextPik").innerHTML = "NEXT PIK : X";
        }
        if (this.checkMas(mas, i, j) === 1) {
            console.log("game over = ", mas);
            console.log("yes");
            if (it) {
                document.getElementById("nextPik").innerHTML = "GAME OVER , O WIN!";
            } else {
                document.getElementById("nextPik").innerHTML = "GAME OVER , X WIN!";
            }
            return 1;
        }
        if (this.checkMas(mas, i, j) === 2) {
            document.getElementById("nextPik").innerHTML = "GAME OVER , DRAW!";
            return 1;
        }
    }
    ,
    copyMas: function (mas1) {
        var mas2 = new Array(mas1.length);
        for (i = 0; i < mas1.length; i++) {
            mas2[i] = mas1[i].slice();
        }
        // console.log("mas2 ===== ", mas2);
        return mas2;
    },
    aiFuncOneBlock(it, mas) {
        var iter = it % 2;
        var newMas = mas.slice();
        var afterMas;
        var countS = 0;
        var masRet = [];
        var wasDraw = false
        for (var i = 0; i < newMas.length; i++) {
            for (var j = 0; j < newMas.length; j++) {
                if (newMas[i][j] === -1) {
                    afterMas = this.copyMas(newMas);
                    // console.log("console = ", afterMas[i][j]);
                    afterMas[i][j] = iter;
                    if (this.checkMas(afterMas, i, j) === 0) {
                        // iter++;
                        // iter = iter % 2;
                        funcIt = it + 1;
                        if (funcIt < 11) {
                            // res = this.aiFuncOneBlock(funcIt, afterMas)
                            // if (res === 10) {
                            //     return 10
                            // }
                            // if (res === 0) {
                            //     wasDraw = true
                            // }

                            masRet.push(this.aiFuncOneBlock(funcIt, afterMas));
                        } else {
                            return -10;//////было 0
                        }
                    } else if (this.checkMas(afterMas, i, j) === 1) {
                        // console.log("mas3===== ", afterMas);
                        if ((iter) === this.ai) {
                            return 10;
                        } else {
                            return (-10 / (it + 1));
                        }
                    } else if (this.checkMas(afterMas, i, j) === 2) {
                        return 0;
                    }
                }
            }
        }
        // console.log("it = ",it);
        // console.log(masRet);
        // console.log(afterMas);

        // var res = -1;
        // for (i = 0; i < masRet.length; i++) {
        //     if (masRet[i] < 0 && iter !== this.ai)
        //         res = masRet[i];
        //     if (masRet[i] === 10 && iter === this.ai)
        //         res = 10;
        // }
        // if (res !== -1) {
        //     return res
        // }
        // for (i = 0; i < masRet.length; i++) {
        //     if (masRet[i] === 0)
        //         res = 0;
        // }
        // if (res !== -1) {
        //     return res
        // }
        // // console.log(Math.max(masRet));

        // if (wasDraw) {
        //     return 0
        // } else {
        //     return -10
        // }

        if (iter === this.ai) {
            return this.maxInMas(masRet);
        } else {
            return this.minInMas(masRet);
        }
    },
    aiMain() {
        console.log("aiMain");
        var cells = [];
        for (var i = 0; i < this.mas.length; i++) {
            for (var j = 0; j < this.mas.length; j++) {
                if (this.mas[i][j] === -1) {
                    afterMas = this.copyMas(this.mas);
                    afterMas[i][j] = this.iter;
                    if (this.checkMas(afterMas, i, j) === 1) {
                        console.log("i,j = ", i, j);
                        console.log("aftermas = ", afterMas);
                        this.drawTurn(this.iter, i, j, afterMas);
                        return;
                    } else {
                        // console.log(afterMas);
                        it = (this.iter + 1) % 2;
                        res = this.aiFuncOneBlock(it, afterMas)
                        if (res === 10) {
                            this.mas[i][j] = this.iter;
                            this.drawTurn(this.iter, i, j);
                            return;
                        }
                        cell = new Cell(res, i, j);///даю одно и тоже всем iter & mas
                        // console.log("cell weight = ", cell.weight);
                        cells.push(cell);
                    }
                }
                console.log("one block was handled");
            }
        }
        max = cells[0].weight;
        maxIt = 0;
        console.log(cells[0].i, ".", cells[0].j, "=", cells[0].weight)
        for (i = 1; i < cells.length; i++) {
            if (cells[i].weight > max) {
                max = cells[i].weight;
                maxIt = i;
            }
            console.log(cells[i].i, ".", cells[i].j, "=", cells[i].weight)
        }
        this.mas[cells[maxIt].i][cells[maxIt].j] = this.iter;

        this.drawTurn(this.iter, cells[maxIt].i, cells[maxIt].j);

    },
    iteration: function (that, i, j) {
        if (this.mas[i][j] !== -1)
            return;


        this.mas[i][j] = this.iter;

        if (this.drawTurn(this.iter, i, j))
            return;


        this.iter = (this.iter + 1) % 2;


        // if (this.checkMas(this.mas, i, j) === 1)
        //     document.getElementById("nextPik").innerHTML = "GAME OVER , " + str + " WIN!";
        // if (this.checkMas(this.mas, i, j) === 2)
        //     document.getElementById("nextPik").innerHTML = "GAME OVER , DRAW!";


        if (this.iter === this.ai) {
            this.aiMain();
            this.iter = (this.iter + 1) % 2;
            // that.innerHTML = "X";
        }
        console.log(this.mas);

    },
    start: function (n, k, ai = -1) {
        this.iter = 0;
        this.ai = ai;
        this.draw(n);
        document.getElementById("sect").style = "width:" + (n * 50) + "px";
        this.fillMas(n);
        console.log(this.mas);
        this.iRow = k;
        if (this.ai === 0) {
            this.aiMain();
            this.iter++;
        }
    }
};
