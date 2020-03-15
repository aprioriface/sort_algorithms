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
}
