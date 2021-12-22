function Cell(live) {
    this.count = 0;
    this.alive = live;
    this.color = "";
    this.status = true;
    if (live) {
        this.color = "white";
    } else {
        this.color = "black"
    }
    this.changeStatus = function () {
        this.alive = !this.alive;
        if (this.alive) {
            this.color = "white";
        } else {
            this.color = "black"
        }
    }
}


var automat = {
    canvas: document.getElementById('canvas'),
    cells: [],
    blockSize:9,
    blockMargin:0,
    draw: function (x, y, wid, color) {
        var ctx = this.canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(x, y, wid, wid);
    },
    makeMas: function (wid, het) {
        this.cells = new Array(wid);
        for (i = 0; i < wid; i++) {
            this.cells[i] = new Array(het);
            for (j = 0; j < het; j++) {
                this.cells[i][j] = new Cell(false);
            }
        }


        ///вечная хрень с периодом 4 ===========================================

        // this.cells[parseInt(wid / 2)][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)+2][parseInt(het / 2)].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+6][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)+7][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)+7][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)+8][parseInt(het / 2)].changeStatus();


        ///ПУШКА ==================================================

        // this.cells[parseInt(wid / 2)][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)][parseInt(het / 2)+1].changeStatus();
        // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)+1].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+10][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)+10][parseInt(het / 2)+1].changeStatus();
        // this.cells[parseInt(wid / 2)+10][parseInt(het / 2)+2].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+11][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)+11][parseInt(het / 2)+3].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+12][parseInt(het / 2)-2].changeStatus();
        // this.cells[parseInt(wid / 2)+13][parseInt(het / 2)-2].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+12][parseInt(het / 2)+4].changeStatus();
        // this.cells[parseInt(wid / 2)+13][parseInt(het / 2)+4].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+14][parseInt(het / 2)+1].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+15][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)+15][parseInt(het / 2)+3].changeStatus();
        //
        // // this.cells[parseInt(wid / 2)+16][parseInt(het / 2)].changeStatus();
        // // this.cells[parseInt(wid / 2)+16][parseInt(het / 2)+1].changeStatus();
        // // this.cells[parseInt(wid / 2)+16][parseInt(het / 2)+2].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+17][parseInt(het / 2)+1].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+16][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)+16][parseInt(het / 2)+1].changeStatus();
        // this.cells[parseInt(wid / 2)+16][parseInt(het / 2)+2].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+20][parseInt(het / 2)-2].changeStatus();
        // this.cells[parseInt(wid / 2)+20][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)+20][parseInt(het / 2)].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+21][parseInt(het / 2)-2].changeStatus();
        // this.cells[parseInt(wid / 2)+21][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)+21][parseInt(het / 2)].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+22][parseInt(het / 2)-3].changeStatus();
        // this.cells[parseInt(wid / 2)+22][parseInt(het / 2)+1].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+24][parseInt(het / 2)-4].changeStatus();
        // this.cells[parseInt(wid / 2)+24][parseInt(het / 2)-3].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+24][parseInt(het / 2)+1].changeStatus();
        // this.cells[parseInt(wid / 2)+24][parseInt(het / 2)+2].changeStatus();
        //
        // this.cells[parseInt(wid / 2)+34][parseInt(het / 2)-2].changeStatus();
        // this.cells[parseInt(wid / 2)+35][parseInt(het / 2)-2].changeStatus();
        // this.cells[parseInt(wid / 2)+34][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)+35][parseInt(het / 2)-1].changeStatus();


        ///ТОЧКА ============================================================

        this.cells[parseInt(wid / 2)-1][parseInt(het / 2)-1].changeStatus();



        ///ПОЛОСКА

        // this.cells[parseInt(wid / 2)-3][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)-2][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)-1][parseInt(het / 2)-1].changeStatus();
        // this.cells[parseInt(wid / 2)][parseInt(het / 2)-1].changeStatus();
        // // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)-1].changeStatus();
        // //
        // // this.cells[parseInt(wid / 2)-3][parseInt(het / 2)].changeStatus();
        // // this.cells[parseInt(wid / 2)-2][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)-1][parseInt(het / 2)].changeStatus();
        // this.cells[parseInt(wid / 2)][parseInt(het / 2)].changeStatus();
        // // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)].changeStatus();
        // //
        // this.cells[parseInt(wid / 2)-3][parseInt(het / 2)+1].changeStatus();
        // this.cells[parseInt(wid / 2)-2][parseInt(het / 2)+1].changeStatus();
        // this.cells[parseInt(wid / 2)-1][parseInt(het / 2)+1].changeStatus();
        // this.cells[parseInt(wid / 2)][parseInt(het / 2)+1].changeStatus();
        // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)+1].changeStatus();
        //
        // this.cells[parseInt(wid / 2)-3][parseInt(het / 2)+2].changeStatus();
        // this.cells[parseInt(wid / 2)-2][parseInt(het / 2)+2].changeStatus();
        // this.cells[parseInt(wid / 2)-1][parseInt(het / 2)+2].changeStatus();
        // this.cells[parseInt(wid / 2)][parseInt(het / 2)+2].changeStatus();
        // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)+2].changeStatus();
        //
        // this.cells[parseInt(wid / 2)-3][parseInt(het / 2)+3].changeStatus();
        // this.cells[parseInt(wid / 2)-2][parseInt(het / 2)+3].changeStatus();
        // this.cells[parseInt(wid / 2)-1][parseInt(het / 2)+3].changeStatus();
        // this.cells[parseInt(wid / 2)][parseInt(het / 2)+3].changeStatus();
        // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)+3].changeStatus();
        //
        // this.cells[parseInt(wid / 2)-3][parseInt(het / 2)+4].changeStatus();
        // this.cells[parseInt(wid / 2)-2][parseInt(het / 2)+4].changeStatus();
        // this.cells[parseInt(wid / 2)-1][parseInt(het / 2)+4].changeStatus();
        // this.cells[parseInt(wid / 2)][parseInt(het / 2)+4].changeStatus();
        // this.cells[parseInt(wid / 2)+1][parseInt(het / 2)+4].changeStatus();





    },
    checkBlock: function (x, y) {
        var k = 0;
        for (i = 0; i < 3; i++) {
            if (this.cells[x - 1 + i] !== undefined) {
                if (this.cells[x - 1 + i][y - 1] !== undefined) {
                    if (this.cells[x - 1 + i][y - 1].alive) k++;
                }
            }
        }
        for (i = 0; i < 3; i++) {
            if (this.cells[x - 1 + i] !== undefined) {
                if (this.cells[x - 1 + i][y] !== undefined) {
                    if (this.cells[x - 1 + i][y].alive) k++;
                }
            }
        }
        for (i = 0; i < 3; i++) {
            if (this.cells[x - 1 + i] !== undefined) {
                if (this.cells[x - 1 + i][y + 1] !== undefined) {
                    if (this.cells[x - 1 + i][y + 1].alive) k++;
                }
            }
        }
        if (this.cells[x][y].alive) k--;
        // if(k>0){
        //     console.log("k:",k,"  i:",x,"   j:",y);
        // }
        return k;
    }
    ,
    drawAll: function () {
        for (i = 0; i < this.cells.length; i++) {
            for (j = 0; j < this.cells[i].length; j++) {
                if(this.cells[i][j].status)
                this.draw(i * (this.blockSize + this.blockMargin), j * (this.blockSize + this.blockMargin), this.blockSize, this.cells[i][j].color);
            }
        }
    },
    iteration: function () {
       var arr = new Array(this.cells.length);
       // console.log("array :",this.cells.length," x ",this.cells[0].length);
        for (var i = 0; i < this.cells.length; i++) {
            arr[i] = new Array(this.cells[i].length);
            for (var j = 0; j < this.cells[i].length; j++) {
                res = this.checkBlock(i, j);
                if (res === 1 && !this.cells[i][j].alive) {
                    // console.log("YES!!!");
                    arr[i][j] = new Cell(true);
                } else if (this.cells[i][j].alive) {
                    arr[i][j] = new Cell(true);
                } else {
                    arr[i][j] = new Cell(false);
                }
            }
        }
        for (i = 0; i < this.cells.length; i++) {
            for (j = 0; j < this.cells[i].length; j++) {
                if(this.cells[i][j].alive !== arr[i][j].alive){
                    // console.log("YESser!!!");
                    this.cells[i][j].changeStatus();
                    this.cells[i][j].status = true;
                    // console.log("i:",i,"   j:",j,"   alive? - ",this.cells[i][j].alive);
                }else{
                    this.cells[i][j].status = false;
                }
            }
        }

        // this.canvas = document.getElementById('canvas');
        // this.makeMas(parseInt(this.canvas.clientWidth / blockSize), parseInt(this.canvas.clientHeight / blockSize));
        this.drawAll(this.blockSize, this.blockMargin);
    }
    ,
    start: function (blockSize, blockMargin) {
        this.blockSize = blockSize;
        this.blockMargin = blockMargin;
        this.canvas = document.getElementById('canvas');
        this.makeMas(parseInt(this.canvas.clientWidth / (blockSize + blockMargin)), parseInt(this.canvas.clientHeight / (blockSize + blockMargin)));
        this.drawAll(blockSize, blockMargin);
        let timerId = setInterval(() => this.iteration(), 40);
        // this.iteration(blockSize);
        // for (i = 0; i < this.cells.length; i++) {
        //     for (j = 0; j < this.cells[i].length; j++) {
        //             if(this.cells[i][j].alive) console.log("i:",i,"   j:",j);
        //     }
        // }
    }

};