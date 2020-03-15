class SelectSort extends NumberRow{
    sort(){
        for(let i = 0; i < this.length; i++){
            let minValIndex = i;
            for(let j = i + 1; j < this.length; j++){
                minValIndex = (this.data[j] < this.data[minValIndex]) ? j : minValIndex

                this.complexIndex++
            }

            if (minValIndex !== i) {
                const tmpVal = this.data[i]
                this.data[i] = this.data[minValIndex]
                this.data[minValIndex] = tmpVal
            }
        }

        console.log(this.array)
    }

    anim_sort(i, j, minValIndex){
        i = i ? i : 0
        j = j ? j : i + 1
        minValIndex = minValIndex ? minValIndex : i

        new Promise((res, rej) => {
            if (i < this.length){
                if (j < this.length){
                    minValIndex = (this.data[j] < this.data[minValIndex]) ? j : minValIndex

                    this.complexIndex++

                    res({'i': i, 'j': ++j, 'minValIndex': minValIndex})
                }
                else {
                    if (minValIndex !== i) {
                        const tmpVal = this.data[i]
                        this.data[i] = this.data[minValIndex]
                        this.data[minValIndex] = tmpVal

                        const rowChild = document.querySelector("#row").children
                        rowChild[i].style.top = "5px"
                        rowChild[i].style.left = `calc(${ 100 / this.length * minValIndex }vw + 5px)`
                        rowChild[minValIndex].style.left = `calc(${ 100 / this.length * i }vw + 5px)`

                        setTimeout(() => {
                            rowChild[i].style.top = 0
                            if (i < minValIndex){
                                document.querySelector("#row").insertBefore(rowChild[i], rowChild[minValIndex])
                                document.querySelector("#row").insertBefore(rowChild[minValIndex], rowChild[i])
                            }
                            else {
                                document.querySelector("#row").insertBefore(rowChild[minValIndex], rowChild[i])
                                document.querySelector("#row").insertBefore(rowChild[i], rowChild[minValIndex])
                            }
                            setTimeout(() => res({'i': ++i, 'j': i + 1, 'minValIndex': i}), 50)
                        }, 300)
                    }
                    else res({'i': ++i, 'j': i + 1, 'minValIndex': i})
                }
            }
            else rej(this.complexIndex)
        }).then(
            result => this.anim_sort(result.i ,result.j, result.minValIndex),
            error => {
                try{
                    document.querySelector("#complexity").innerHTML = `Steps count: ${error}`
                }
                catch(ex){}
            }
        )
    }
}
