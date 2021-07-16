const SType = (data) => {

    if (data === 1){
        return ("감시형")
    }else if(data === 2){
        return ("토이")
    }else if(data === 3){
        return ("개인")
    }else if(data === 4){
        return ("독서실")
    }else if(data === 5){
        return ("알고리즘")
    }
};

export default SType;