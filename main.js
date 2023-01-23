// Homework 7
function chkPair(A , size , x) {

    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {

            if (A[i] + A[j] == x) {
                document.write("Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")");

                return true;
            }
        }
    }

    return false;
}

let A = [ 0, -1, 2, -3, 1 ];
let x = -2;
let size = A.length;

if (chkPair(A, size, x)) {
    document.write("<br/>Valid pair exists");
}
else {
    document.write("<br/>No valid pair exists for " + x);
}