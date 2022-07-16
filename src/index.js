
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    return matrix.reduce((sumArr, item, index) => {

        if (index % 2 === 1) {
            return sumArr.concat(item.reverse());
        } else {
            return sumArr.concat(item);
        }

    }, []);

}
