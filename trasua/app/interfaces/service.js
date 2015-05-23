'use strict';

var $ = require('jquery');

var employees = [
  {
    id: 1,
    question: 'Thứ có giá trị kẹp giữa 2 chân người đàn ông',
    optionA: 'Xe SH',
    optionB: 'Chim cu gáy',
    optionC: 'Nữ tiếp viên',
    optionD: 'Khỉ đít đỏ',
    answer: '3',
    contributor: 'tampham47@live.com'
  },
  {
    id: 2,
    question: 'Nếu có một em ngon cơm thơm tho nói với bạn, em cô đơn quá, ngủ với em nhé. Thì bạn sẽ trả lời:',
    optionA: 'Khuya rồi về nhà đi em',
    optionB: 'Anh ngủ chiều giờ rồi, có đi bar thì đi',
    optionC: 'Túi trà',
    optionD: 'Bàn chải đánh răng',
    answer: '1',
    contributor: 'tampham47@live.com'
  },
  {
    id: 3,
    question: 'Tại sao các bạn nữ nên học thổi kèn',
    optionA: 'Kèn dễ thổi, cứ có hơi là kêu',
    optionB: 'Con trai ghiền con gái biết thổi kèn, rất cá tính.',
    optionC: 'Lá đỏ',
    optionD: 'Lá thư',
    answer: '4',
    contributor: 'tampham47@live.com'
  },
  {
    id: 4,
    question: 'Tại sao bạn nữ nên mặc váy',
    optionA: 'Mặc váy cho nó mát',
    optionB: 'Quần thì rườm rà',
    optionC: 'Bưởi năm roi',
    optionD: 'Cái CC',
    answer: '2',
    contributor: 'tampham47@live.com'
  },
  {
    id: 5,
    question: 'Lợi ích việc mang giày cao gót của các bạn nữ',
    optionA: 'Để cho cao',
    optionB: 'Để mông nẩy khi ăn quẩy',
    optionC: 'Không biết',
    optionD: 'Cua đen',
    answer: '4',
    contributor: 'tampham47@live.com'
  },
  {
    id: 6,
    question: 'Thứ phập phồng sau áo lót của người phụ nữ mà mọi thằng đàn ông đều muốn chiếm đoạt?',
    optionA: 'Miếng độn silicon',
    optionB: 'Trái tim người phụ nữ',
    optionC: 'Bản đồ',
    optionD: 'Trái dừa',
    answer: '3',
    contributor: 'tampham47@live.com'
  },
  {
    id: 7,
    question: 'Tại sao phụ nữ mặc quần sip',
    optionA: 'Giữ ý tứ',
    optionB: 'Cho kiến khỏi bu',
    optionC: 'Thằng thứ 3',
    optionD: 'Không thằng nào ướt',
    answer: '4',
    contributor: 'tampham47@live.com'
  },
  {
    id: 8,
    question: '5 chia 3 bằng 2 khi nào?',
    optionA: 'Khi ta làm sai',
    optionB: 'Khi 5 là số nguyên tố',
    optionC: 'Khi năm chia hết cho 3',
    optionD: 'Làm tròn',
    answer: '1',
    contributor: 'tampham47@live.com'
  },
  {
    id: 9,
    question: 'Xe buýt có mấy bánh?',
    optionA: '7 bánh',
    optionB: '12 bánh',
    optionC: '6 bánh',
    optionD: '9 bánh',
    answer: '3',
    contributor: 'tampham47@live.com'
  },
  {
    id: 10,
    question: 'Người da đen tắm biển đen, vậy hỏi họ bị gì?',
    optionA: 'Bị rấm nắng',
    optionB: 'Bị ướt.',
    optionC: 'Bị trắng',
    optionD: 'Bị điên',
    answer: '2',
    contributor: 'tampham47@live.com'
  }
];

var findById = function (id) {
  var deferred = $.Deferred();
  var employee = null;
  var l = employees.length;
  for (var i = 0; i < l; i++) {
    if (employees[i].id == id) {
      employee = employees[i];
      break;
    }
  }
  deferred.resolve(employee);
  return deferred.promise();
};

var findNext = function(id) {
  id += 1;
  return findById(id);
}

// The public API
module.exports = {
  findById: findById,
  findNext: findNext
};
