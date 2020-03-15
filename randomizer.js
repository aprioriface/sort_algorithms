class NumberRow{
    constructor(count, randomOrder){
        this.data = []
        this.length = count
        this.complexIndex = 0

        for(let i = 0; i < count; i++){
            this.data.push(i)
        }

        if (randomOrder) this._randomize()

        console.log(this.array)
    }

    get array(){ return this.data }
    get theta(){
        this.complexIndex = 0
        this.data.reverse()
        this.sort()

        return this.complexIndex
    }

    sort(){
        console.log(this.array)
    }

    _randomize(){
        const arrayMiddle = Math.floor(this.length / 2)
        for (let i = 0; i < arrayMiddle; i++){
            let rndIndex = Math.ceil(Math.random() * this.length - 1)
            if (rndIndex > arrayMiddle) {
                const tmpVal = this.data[i]
                this.data[i] = this.data[rndIndex]
                this.data[rndIndex] = tmpVal
            } 
        }
    }
}
