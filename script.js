
const totalUsers = document.getElementById('totalUsers').innerText;
const totalSales = document.getElementById('totalSales').innerText;

const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', () => {
    alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
});
