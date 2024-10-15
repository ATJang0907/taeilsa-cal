// 장바구니 페이지로 이동하는 함수
function goToCart() {
    window.location.href = 'cart.html';
}

// 견적 페이지로 이동하는 함수
function goToQuote(type) {
    window.location.href = `${type}_auto_quote.html`;
}

// 직원 코드 페이지 등으로 이동하는 함수
function goToPage(page) {
    switch (page) {
        case 'employeeCode':
            window.location.href = 'employee_code.html';
            break;
        case 'customerManagement':
            window.location.href = 'customer_search.html';
            break;
        case 'customerRegistration':
            window.location.href = 'customer_registration.html';
            break;
        case 'quotationManagement':
            window.location.href = 'quotation_management.html';
            break;
        default:
            break;
    }
}
