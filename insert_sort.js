class InsertSort extends NumberRow{
    sort(){
        for(let i = 1; i < this.length; i++){
            for(let j = i; j > 0; j--){
                if (this.data[j] < this.data[j - 1]){
                    const tmpVal = this.data[j]
                    this.data[j] = this.data[j - 1]
                    this.data[j - 1] = tmpVal

                    this.complexIndex++
                } 
                else break
            }
        }

        console.log(this.array)
    }

    anim_sort(i, j){
        i = i ? i : 1
        j = j ? j : i

        new Promise((res, rej) => {
            if (i < this.length){
                if (j > 0){
                    if (this.data[j] < this.data[j - 1]) {
                        const tmpVal = this.data[j]
                        this.data[j] = this.data[j - 1]
                        this.data[j - 1] = tmpVal
    
                        this.complexIndex++

                        const rowChild = document.querySelector("#row").children
                        rowChild[j - 1].style.left = `calc(${ 100 / this.length * j }vw + 5px)`
                        rowChild[j].style.top = "5px"
                        rowChild[j].style.left = `calc(${ 100 / this.length * (j - 1) }vw + 5px)`

                        setTimeout(() => {
                            rowChild[j].style.top = 0
                            document.querySelector("#row").insertBefore(rowChild[j], rowChild[j - 1])
                            setTimeout(() => res({'i': i, 'j': --j}), 100)
                        }, 300)
                    }
                    else {
                        res({'i': ++i, 'j': i})
                    }
                }
                else {
                    res({'i': ++i, 'j': i})
                }
            }
            else rej(this.complexIndex)
        }).then(
            result => this.anim_sort(result.i ,result.j),
            error => {
                try{
                    document.querySelector("#complexity").innerHTML = `Steps count: ${error}`
                }
                catch(ex){}
            }
        )
    }
}
