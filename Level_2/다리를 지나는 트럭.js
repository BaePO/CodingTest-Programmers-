function solution(bridge_length, weight, truck_weights) {
    // 시간을 1초씩 더하면서 스택처리하는게 맞음
    // 대기 트럭 배열과 다리에 있는 트럭이 모두 빈 배열이 되면 그 때의 시간을 return
    // 트럭이 다리에 올라왔을 때 그 트럭이 빠지기 위해 필요한 시간은 bridge_length + 1임
    // 예를 들어, 다리 길이가 2라면 트럭이 다리를 건너기 위해 필요한 시간은 3초라는 뜻
    // 시간 배열을 따로 만들어줘야하나? 1초 지날 때 마다 1을 더해주고 그 배열을 계속 확인하면서 시간이 지나면 splice or pop 해주는 거지
    let time = 0;
    let bridgeStack = [0]; // reduce를 해주기 위해 빈 배열이 아닌 0을 default로 삽입
    let bridgeTimeStack = [];
    while (true) {
        time++; // 1초씩 시간이 지남
        bridgeTimeStack.forEach((e, i) => {
          if (e === bridge_length) {
                bridgeStack.splice(i + 1, 1); // 0을 삽입했기 때문에 i + 1의 index를 삭제
                bridgeTimeStack.splice(i, 1);
            }
        }); 
        bridgeTimeStack = bridgeTimeStack.map(e => e + 1); // 시간배열에 무조건 1씩 더해줌
        if (truck_weights[0] + bridgeStack.reduce((a, b) => a + b) <= weight) {
            bridgeStack.push(truck_weights[0]);
            bridgeTimeStack.push(1);
            truck_weights.splice(0, 1);
        }
        if (bridgeTimeStack.length === 0 && truck_weights.length === 0) {
            break;
        }
    }
    return time;
}