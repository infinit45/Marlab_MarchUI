function cyclic_rot(A, K){
    var N = A.length;
    let prev_state = A;
    
    for(let i=0; i<K; i++){
        next_state = prev_state.slice(0,N-1);
        next_state.unshift(prev_state[A.length-1]);
        prev_state = next_state;
    }
    return next_state;
}

let result = cyclic_rot([0,1,3,4,5,6],1);
console.log(result);