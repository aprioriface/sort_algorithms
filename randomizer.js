class NumberRow{
    constructor(count, randomOrder, draw){
        this.data = []
        this.length = count
        this.complexIndex = 0

        for(let i = 0; i < count; i++){
            this.data.push(i)
        }

        if (randomOrder) this._randomize()

        if (draw) this._draw()
        else console.log(this.array)
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

    anim_sort(){
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

    _draw(){
        let rowDiv = document.querySelector("#row")
        if (rowDiv){
            rowDiv.innerHTML = ""
            rowDiv.style.height = `${ 100 / this.length }vw` 
            for(let i in this.data){
                const numDiv = document.createElement("DIV")
                numDiv.innerText = this.data[i]
                numDiv.style.width = `calc(${ 100 / this.length }vw - 10px)`
                numDiv.style.height = `calc(${ 100 / this.length }vw - 10px)`
                numDiv.style.left = `calc(${ 100 / this.length * i }vw + 5px)`
                rowDiv.appendChild(numDiv)
            }
        }

        try{
            document.querySelector("#complexity").innerHTML = ""
        }
        catch(ex){}
    }
}
