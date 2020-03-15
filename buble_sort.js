class BubbleSort extends NumberRow{
    sort(){
        for(let i = 0; i < this.length; i++){
            for(let j = 0; j < this.length - 1 - i; j++){
                if (this.data[j] > this.data[j + 1]) {
                    const tmpVal = this.data[j]
                    this.data[j] = this.data[j + 1]
                    this.data[j + 1] = tmpVal
                }

                this.complexIndex++
            }
        }

        console.log(this.array)
    }
}
