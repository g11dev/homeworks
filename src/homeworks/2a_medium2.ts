function doSomething(arr: (string | number)[]): any {
    return arr.reduce((a: any, b: any) => a + b);
}
const input = [[1, 2, 3], [1, "2", 3], "123", 130, ["1", 2]]

input.forEach((x) => {
    let y : Array<any> = []
    
    if(typeof x === 'string' || typeof x === 'number'){
        y.push(Number(x))
    }
    if (Array.isArray(x)){
        for(let i of x){
            y.push(Number(i))
        }
    }
    console.log(doSomething(y))
});