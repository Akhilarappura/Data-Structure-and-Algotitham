class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class stack{
    constructor(value){
        const newNode=new Node(value);
        this.top=newNode;
        this.length=1
    }
    push(value){

        const newNode=new Node(value);
        if(this.length===0){
            this.top=newNode
        }else{
            newNode.next=this.top;
            this.top=newNode
        }
        this.length++;
        return this
    }
    pop(){
        if(this.length===0) return undefined;
        this.temp=this.top;
        this.top=this.top.next;
        temp.next=null
        this.length--;
        return this.temp
    }
    print(){
        let current=this.top;
        let stackElements=[];
        while(current){
            stackElements.push(current.value);
            current=current.next
        }
        console.log(stackElements.join('->>'));
    }
}

let mystack=new stack(1);
mystack.push(2);
mystack.push(3);
mystack.print()
mystack.pop();
mystack.print()