//Node class representing each element in the list

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Linked list class
class linkedList{
    constructor(){
        this.head = null;
    }
    //Adding  a node to the list
    append(data){
        let newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
        } else{
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current = newNode;
        }
    }


    //Travesring the list
print() {
            let current = this.head;
            while(current) {
                console.log(current.data);
                current = current.next
            }
        }
}

//using the linked list
let list = new linkedList();
list.append(10);
list.append(20);
list.append(30);
list.print()




