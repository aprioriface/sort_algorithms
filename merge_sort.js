class MergeSort extends NumberRow{
    sort() {
        function sub_sort(sub_array){
            const arrMiddle = Math.floor(sub_array.length / 2)
            const sub_arrs = [sub_array.slice(0, arrMiddle), sub_array.slice(arrMiddle)]

            if (sub_arrs[0].length > 1) sub_arrs[0] = sub_sort(sub_arrs[0])
            if (sub_arrs[1].length > 1) sub_arrs[1] = sub_sort(sub_arrs[1])

            const result_array = []
            while(sub_arrs[0].length > 0 && sub_arrs[1].length > 0){
                if (sub_arrs[0][0] < sub_arrs[1][0]) result_array.push(sub_arrs[0].splice(0,1)[0])
                else result_array.push(sub_arrs[1].splice(0,1)[0])
            }
            sub_arrs.forEach(x => x.forEach(y => result_array.push(y)))
            return result_array
        }
         
        this.data = sub_sort(this.array)
    }
}