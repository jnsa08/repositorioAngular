var Person = function() {
    this.canTalk = true;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hola, Soy " + this.name);
        }
    };
};

var Employee = function(name, title) {
    this.name = name;
    this.title = title;
    this.greet = function() {
        if (this.canTalk) {
            console.log("Hola, Soy " + this.name + ", el " + this.title);
        }
    };
};