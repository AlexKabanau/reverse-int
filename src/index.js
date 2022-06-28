module.exports = function reverse (n) {

    let answer = Number(Math.abs(n).toString().split("").reverse().join(""));
        return answer;
}
