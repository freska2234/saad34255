document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const phoneNumber = document.getElementById('phone');
    const offerSelect = document.getElementById('offer');
    const submitButton = document.querySelector('.btn');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();  // منع إرسال النموذج بشكل افتراضي
        
        const phone = phoneNumber.value;
        const offer = offerSelect.value;

        // التحقق من صحة المدخلات
        if (phone === "" || offer === "") {
            alert("من فضلك أدخل رقم الهاتف واختر العرض");
            return;
        }
        
        // إذا كانت المدخلات صحيحة، إرسال البيانات أو إظهار رسالة تأكيد
        alert(`تم إرسال بياناتك بنجاح! رقم الهاتف: ${phone} العرض المختار: ${offer}`);
    });
});
