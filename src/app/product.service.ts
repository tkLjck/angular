import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Giày Stan Smith Addidas',
      'Vẻ đẹp kinh điển. Phong cách vốn dĩ. Đa năng hàng ngày. Suốt hơn 50 năm qua và chưa dừng ở đó, giày adidas Stan Smith luôn giữ vững vị trí là một biểu tượng. Đôi giày này là phiên bản cải biên mới mẻ, là một phần cam kết của adidas hướng tới chỉ sử dụng polyester tái chế bắt đầu từ năm 2024. Với thân giày vegan và đế ngoài làm từ cao su phế liệu, đôi giày này vẫn mang phong cách đầy tính biểu tượng, đồng thời thân thiện với môi trường.',
      'Vẻ đẹp kinh điển. Phong cách vốn dĩ. Đa năng hàng ngày...',
      2500000,
      1,
      ['assets/stansmithblack.jpg', 'assets/stansmithgreen.png', 'assets/stansmithwhite.jpg']
    ),

    new Product(
      2,
      'Giày Sneaker Adidas EQT',
      'Thập niên 90, mẫu giày Equipment đã định nghĩa lại thiết kế trang phục chạy bộ mang tính kỹ thuật được tinh chỉnh dành cho những tuýp người chạy bộ khác nhau. Đôi giày cao vừa mang phong cách đường phố này vẫn giữ nguyên tinh thần đổi mới của dòng Equipment và kết hợp phong cách kỹ thuật cổ điển với chất liệu hiện đại. Thân giày bằng vải dệt adidas Primeknit cho cảm giác mềm dẻo và nâng đỡ.',
      'Thập niên 90, mẫu giày Equipment đã định nghĩa lại...',
      3000000,
      1,
      ['assets/EQT1.jpg', 'assets/EQT2.jpg', 'assets/EQT3.jpg']
    ),

    new Product(
      3,
      'Giày Respone Super 2.0',
      'Chinh phục ngày dài thật thoải mái và sẵn sàng cho tất cả với đôi giày chạy bộ adidas này. Thân giày bằng vải lưới thoáng khí giúp đôi chân bạn luôn khô thoáng kể cả khi trời nóng. Lớp đệm trợ lực cho cảm giác đàn hồi trong từng sải bước.',
      'Chinh phục ngày dài thật thoải mái và sẵn sàng...',
      2100000,
      1,
      ['assets/super1.jpg', 'assets/super2.jpg', 'assets/super3.jpg']
    ),

    new Product(
      4,
      'Giày Adidas UltraBoost 21',
      'Chạy bộ thôi thúc bạn bước chân ra ngoài kia, và nuôi dưỡng tình yêu dành cho Trái Đất. Phiên bản Ultraboost 21 này có thiết kế vì đại dương xanh. Với thân giày adidas Primeknit và lớp đệm BOOST đàn hồi ở đế giữa, đôi giày này mang lại cảm giác thoải mái khi chạy bộ buổi sáng cũng như trên suốt cự ly 10k.',
      'Chạy bộ thôi thúc bạn bước chân ra ngoài kia, và nuôi dưỡng...',
      5600000,
      1,
      ['assets/ultra1.jpg', 'assets/ultra2.jpg', 'assets/ultra3.jpg']
    ),

    new Product(
      5,
      'Dép Xăng Đan Adilette',
      'Phong cách linh hoạt cho các hoạt động hàng ngày. Thích hợp cả trong phòng thay đồ và khi xuống phố, đôi xăng đan này có quai dán tùy chỉnh và thân dép siêu mềm mại cho cảm giác thoải mái tuyệt đối. Thiết kế hiện đại mang phong cách thể thao cho vẻ ngoài gọn gàng.',
      'Phong cách linh hoạt cho các hoạt động hàng ngày. Thích hợp...',
      700000,
      1,
      ['assets/xangdan1.jpg', 'assets/xangdan2.jpg', 'assets/xangdan3.jpg']
    ),

    new Product(
      6,
      'Dép Adidas Slide Boost',
      'Di chuyển từ bãi biển đầy cát ra phố xá đông đúc với cảm giác thoải mái thượng hạng suốt mùa hè. Đôi dép quai ngang này có đế giữa toàn phần hoàn trả năng lượng với lớp đệm cao cấp nâng niu bàn chân bạn. Họa tiết 3 Sọc kinh điển nổi bật trên quai ngang thể hiện phong cách adidas của bạn.',
      'Di chuyển từ bãi biển đầy cát ra phố xá...',
      1750000,
      1,
      ['assets/dep1.jpg', 'assets/dep2.jpg', 'assets/dep3.jpg']
    ),
  ]
  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(product=>
      product.id === id);
  }
}
