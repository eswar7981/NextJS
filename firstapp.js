const productOfTwo=(num1,num2)=>{

    return  num1*num2

}



console.log(productOfTwo(5,4))




const obj={
    name:'Eswar',
    course:'BackEnd',
    details(){
        console.log('Name of the student '+this.name+' doing '+this.course)
    }
}

obj.details()