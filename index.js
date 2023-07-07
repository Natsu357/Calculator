var sound=new Audio()
function s(){
    sound.src="./1.mp3"
    sound.play
}
function assign(b){
    sound.src="./"+b+".mp3"
    sound.play
}
function playSound(a){
    switch (a) {
        case 1:assign(1);break;
        case 2:assign(2);break;
        case 3:assign(3);break;
        case 4:assign(4);break;
        case 5:assign(5);break;
        case 6:assign(6);break;
        case 7:assign(7);break;
        case 8:assign(8);break;
        case 9:assign(9);break;
        case 10:assign(10);break;
        case 11:assign(11);break;
        case 12:assign(12);break;
        case 13:assign(13);break;
        case 14:assign(14);break;
        case 14:assign(15);break;
        case 14:assign(16);break;
        case 14:assign(17);break;
        case 14:assign(18);break;
        default:
            break;
    }
}