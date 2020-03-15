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
}
