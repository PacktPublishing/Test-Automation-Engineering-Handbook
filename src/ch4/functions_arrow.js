const compute_area = (a=1, b=1) =>  {
    if (arguments.length==1){
        area = arguments[0]*arguments[0];
    }
    else if (arguments.length==2){
        area = arguments[0]*arguments[1];
    }
    else {
        area = 'Invalid number of arguments';
    }
    return area;
};
console.log(compute_area(10));
console.log(compute_area(10,20));
console.log(compute_area());