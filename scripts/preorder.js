document.addEventListener("DOMContentLoaded", function () {
    const preorderForm = document.getElementById("preorderForm");
    const orderList = document.getElementById("orderList");

    loadOrders();

    preorderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customerName = document.getElementById("customerName").value;
        const productName = document.getElementById("productName").value;
        const quantity = document.getElementById("quantity").value;

        addOrder(customerName, productName, quantity);

        preorderForm.reset();
    });

    function addOrder(customerName, productName, quantity) {
        const order = {
            id: Date.now(),
            customerName,
            productName,
            quantity,
        };

        const orderCard = document.createElement("div");
        orderCard.classList.add("order-card");

        const orderContent = document.createElement("div");
        orderContent.classList.add("order-content");
        orderContent.innerHTML = `
        <p><strong>Клиент:</strong> ${order.customerName}</p>
        <p><strong>Товар:</strong> ${order.productName}</p>
        <p><strong>Количество:</strong> ${order.quantity}</p>
    `;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function () {
            deleteOrder(order.id, orderCard);
        });

        orderCard.appendChild(orderContent);
        orderCard.appendChild(deleteButton);
        orderList.appendChild(orderCard);

        saveOrder(order);
    }

    function saveOrder(order) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
    }

    function loadOrders() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.forEach(order => {
            const orderCard = document.createElement("div");
            orderCard.classList.add("order-card");

            const orderContent = document.createElement("div");
            orderContent.classList.add("order-content");
            orderContent.innerHTML = `
            <p><strong>Клиент:</strong> ${order.customerName}</p>
            <p><strong>Товар:</strong> ${order.productName}</p>
            <p><strong>Количество:</strong> ${order.quantity}</p>
        `;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Удалить";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", function () {
                deleteOrder(order.id, orderCard);
            });

            orderCard.appendChild(orderContent);
            orderCard.appendChild(deleteButton);
            orderList.appendChild(orderCard);
        });
    }

    function deleteOrder(orderId, orderItem) {
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders = orders.filter(order => order.id !== orderId);
        localStorage.setItem("orders", JSON.stringify(orders));

        orderItem.remove();
    }
});
