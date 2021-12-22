function Cell(live) {
    this.count = 0;
    this.alive = live;
    this.status = true;
    this.color = "";
    if (live === 1) {
        this.color = "rgb(246,171,50)";
    } else if (live === 2) {
        this.color = "rgb(237,76,119)"
    } else {
        this.color = "rgb(62,169,222)";
    }
    this.changeStatus = function () {
        if (this.alive === 1) {
            this.color = "rgb(237,76,119)";
            this.alive = 2;
        } else if (this.alive === 2) {
            this.color =  "rgb(62,169,222)";
            this.alive = 3;
        } else {
            this.color = "rgb(246,171,50)";
            this.alive = 1;
        }
    }
}


var automatN3 = {
    canvas: document.getElementById('canvas'),
    cells: [],
    blockSize: 9,
    blockMargin: 0,
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
                colr = Math.floor(Math.random() * 3)+1;
                if(j===0) console.log(colr);
                this.cells[i][j] = new Cell(colr);
            }
        }

    },
    checkBlock: function (x, y) {
        var k = 0;
        var colr = (this.cells[x][y].alive)%3+1;
        for (i = 0; i < 3; i++) {
            if (this.cells[x - 1 + i] !== undefined) {
                if (this.cells[x - 1 + i][y - 1] !== undefined) {
                    if (this.cells[x - 1 + i][y - 1].alive===colr) k++;
                }
            }
        }
        for (i = 0; i < 3; i++) {
            if (this.cells[x - 1 + i] !== undefined) {
                if (this.cells[x - 1 + i][y] !== undefined) {
                    if (this.cells[x - 1 + i][y].alive===colr) k++;
                }
            }
        }
        for (i = 0; i < 3; i++) {
            if (this.cells[x - 1 + i] !== undefined) {
                if (this.cells[x - 1 + i][y + 1] !== undefined) {
                    if (this.cells[x - 1 + i][y + 1].alive===colr) k++;
                }
            }
        }
        // if (this.cells[x][y].alive) k--;
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
                var colr = (this.cells[i][j].alive+1)%3;
                if (res>=3) {
                    // console.log("YES!!!");
                    arr[i][j] = new Cell(colr);
                } else {
                    arr[i][j] = new Cell(this.cells[i][j].alive);
                }
            }
        }
        for (i = 0; i < this.cells.length; i++) {
            for (j = 0; j < this.cells[i].length; j++) {
                if (this.cells[i][j].alive !== arr[i][j].alive) {
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
        requestAnimationFrame(()=>this.iteration());
    }
    ,
    start: function (blockSize, blockMargin) {
        this.blockSize = blockSize;
        this.blockMargin = blockMargin;
        this.canvas = document.getElementById('canvas2');
        this.makeMas(parseInt(this.canvas.clientWidth / (blockSize + blockMargin)), parseInt(this.canvas.clientHeight / (blockSize + blockMargin)));
        this.drawAll(blockSize, blockMargin);
        this.iteration();
        // let timerId = setInterval(() => this.iteration(), 50);
        // this.iteration(blockSize);
        // for (i = 0; i < this.cells.length; i++) {
        //     for (j = 0; j < this.cells[i].length; j++) {
        //             if(this.cells[i][j].alive) console.log("i:",i,"   j:",j);
        //     }
        // }
    }

};