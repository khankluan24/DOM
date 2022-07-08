# IIFE (Immediately invoked function expression)
# Scope - Phạm vi
- Cac loại phạm vi:
  - Global : Khi khai báo ngoài code block **dù cho là var, const ,let, function**
  - Code block - Khoi ma: let,const nhung **var sẽ lấy phạm vi bên ngoài gần nhất** => Vd: `{  
    var age = 18`;
} thì age sẽ lấy phạm vi global
    
  - Local scope - Ham: var, function
=> VD: `function logger() {
    function logger2() {
        console.log('Log 2');
    }  
    logger2()
}
logger() // Log 2`
- Khi gọi mỗi hàm, mới tạo ra 1 phạm vi
- Các func có thể access biến được khai báo trong phạm vi của nó và bên ngoài nó
- Cách thức 1 biến được truy cập
- Khi nào 1 biến bị xóa khỏi bộ nhớ ?
  - Global: Khi thoát chương trình 
  - Code block & function: Khi di chuyển ra ngoài phạm vi
  - Biến trong func đc tham chiếu bởi 1 func khác 

# Closure
Là 1 hàm có thể ghi nhớ nơi nó được tạo ra và có thể truy cập biến bên ngoài nó
#### Ứng dụng:
- Viết code ngắn 
- Biểu diễn, ứng dụng tính Private trong OOP
#### Lưu ý:
- Biến được tham chiếu trong closure sẽ không được xóa khóa bộ nhớ khi hàm cha thực thi xong 
- Các khái niệm JS nâng cao dễ gây nhầm lẫn

# Hoisting
Với var khi hoisted, sẽ nhận giá trị undefined.  
Còn let, const khi hoisted không đc khởi tạo gt và đưa vào temporal dead zone.  
# Strict mode
### Cách thêm strict mode. Syntax chung:("use strict") 
- Thêm vào đầu file js external
- Thêm vào internal js giữa `<script>`
- Thêm vào đầu 1 func

### Cách tránh lỗi:
- Khai báo biến với các từ khóa: var,const,..
## Công dụng:
1. Tránh "quên" kw khai báo biến
2. Tránh trùng tên biến
3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global
# Value & Preference types (Tham trị và tham chiếu)

## 1. Value types (Primitive data types)
- String, number,symbol, bigint, null,..
## 2. Preference types (Non-Primitive data types)
- Object, array, function
## Data types with functions
- Value types  
- Reference types