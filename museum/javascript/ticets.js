document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".order-form__btn");
    buttons.forEach((button) => {
        button.onclick = null;
    });

    const ticketPrices = {
        basic18: 10, 
        senior65: 7, 
    };

    const totalSpan = document.querySelector(".order-form__total");
    function calculateTotal() {
        const basic18Count = parseInt(document.getElementById("preview-ticket_18_amount").value) || 0;
        const senior65Count = parseInt(document.getElementById("preview-ticket_65_amount").value) || 0;

        const totalPrice =
            basic18Count * ticketPrices.basic18 + senior65Count * ticketPrices.senior65;

        totalSpan.textContent = `Total €${totalPrice}`;
    }

    const amountWrappers = document.querySelectorAll(".order-form__amount-wrapper");
    amountWrappers.forEach((wrapper) => {
        const inputField = wrapper.querySelector("input");

        const decrementBtn = wrapper.querySelector('[aria-label="remove one ticket"]');
        const incrementBtn = wrapper.querySelector('[aria-label="add one ticket"]');

        decrementBtn.addEventListener("click", () => {
            const currentValue = parseInt(inputField.value) || 0;
            if (currentValue > 0) {
                inputField.value = currentValue - 1;
                calculateTotal();
            }
        });

        incrementBtn.addEventListener("click", () => {
            const currentValue = parseInt(inputField.value) || 0;
            if (currentValue < 20) {
                inputField.value = currentValue + 1;
                calculateTotal();
            }
        });

        inputField.addEventListener("input", () => {
            let value = parseInt(inputField.value) || 0;
            if (value < 0) value = 0;
            if (value > 20) value = 20;
            inputField.value = value;
            calculateTotal();
        });
    });

    const buyNowButton = document.querySelector(".order-form__btn-buy");
    buyNowButton.addEventListener("click", () => {
        
    });

    calculateTotal();
});
