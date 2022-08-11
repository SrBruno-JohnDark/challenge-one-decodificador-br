const input1 = document.getElementById("input");
const output1 = document.getElementById("output");

input1.addEventListener('mousemove', () => {
    const encodedString = btoa(input1.value);
    output1.value = encodedString;
});

output1.addEventListener('mousemove', () => {
    const decodedString = atob(output1.value);
    input1.value = decodedString;
});
