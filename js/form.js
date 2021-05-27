class PLAY {
    constructor(){
        this.button = createButton("PLAY");      
        this.button2 = createButton("Instructions");

        this.title = createElement("h1");

        
    
    }
    
    display() {
        this.button.position(800,300);
        
        this.button2.position(800,400);

        this.title.html("ℌ𝔢𝔩𝔩𝔬 𝔗𝔥𝔢𝔯𝔢");
        this.title.position(100,100);

    }
}