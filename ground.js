class Ground  {
constructor(){
    options = {
        isStatic : true
    }

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
world.add(world, this.body);
}


display(){ 
    var position = this.body.position;
    fill("yellow");
    rect(pos.x,pos,y,this.width,this.height);
}
}