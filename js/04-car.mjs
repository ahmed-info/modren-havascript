class Red {
    printRed = () => {
        console.log("this is from class red");
    }
}

class Car extends Red {
    constructor(color) {
        super();
        this.COLOR = color;
    }
    //property without let or const because class
    color = "red"

    //function without const because class
    printColor = () => {
        console.log(this.COLOR);
    }
}



export default Car;