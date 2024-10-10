// Chặn chuột phải
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });
    
        // Chặn F12 và Ctrl+Shift+I
        document.addEventListener('keydown', function(event) {
            // Kiểm tra nếu người dùng nhấn F12
            if (event.key === 'F12') {
                event.preventDefault();
            }
            
            // Kiểm tra nếu người dùng nhấn Ctrl+Shift+I (Mở Developer Tools)
            if (event.ctrlKey && event.shiftKey && event.key === 'I') {
                event.preventDefault();
            }
            
            // Kiểm tra nếu người dùng nhấn Ctrl+U (Xem nguồn trang)
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
            }
    
            // Kiểm tra nếu người dùng nhấn Ctrl+Shift+C (Inspect Element)
            if (event.ctrlKey && event.shiftKey && event.key === 'C') {
                event.preventDefault();
            }
    
            // Kiểm tra nếu người dùng nhấn Ctrl+Shift+J (Console)
            if (event.ctrlKey && event.shiftKey && event.key === 'J') {
                event.preventDefault();
            }
        });
