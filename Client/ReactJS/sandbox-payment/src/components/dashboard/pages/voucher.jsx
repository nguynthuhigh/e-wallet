import React, { useState } from 'react';

const initialData = {
  title: 'Voucher',
  code: 'DISCOUNT10P',
  content: 'Giam ngay 100k',
  quantity: '500',
  discountValue: '99',
  type: 'discount_amount',
  min_condition: '100',
  max_condition: '200'
};

export default function VoucherForm() {
  const [voucherData, setVoucherData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setVoucherData({ ...voucherData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!voucherData.code) tempErrors.code = "Vui long nhập mã";
    if (!voucherData.content) tempErrors.content = "Vui lòng nhập ";
    if (!voucherData.quantity || voucherData.quantity > 500) tempErrors.quantity = "Số lượng tối đa là 500";
    if (!voucherData.discountValue || voucherData.discountValue >= 99) tempErrors.discountValue = "Nhỏ hơn 99";
    if (!voucherData.type) tempErrors.type = "Vui lòng nhập loại";
    if (!voucherData.min_condition || voucherData.min_condition <= 100) tempErrors.min_condition = "Lớn hơn 100";
    if (!voucherData.max_condition || voucherData.max_condition >=200) tempErrors.max_condition = "Nhỏ hơn 200";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Thêm voucher thành công!');
    } else {
      alert('Vui lòng điền đầy đủ thông tin.');
    }
  };

  return (
    <div>
        
        <form className="p-5 mx-[30%] mt-[15%] bg-slate-300 shadow rounded-[15px]" onSubmit={handleSubmit}>
      <div className="mb-5 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={voucherData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Code</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={voucherData.code}
            onChange={(e) => handleChange('code', e.target.value)}
          />
          {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code}</p>}
        </div>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Content</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={voucherData.content}
            onChange={(e) => handleChange('content', e.target.value)}
          />
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Quantity</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={voucherData.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
            type="number"
          />
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
        </div>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Discount Value </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={voucherData.discountValue}
            onChange={(e) => handleChange('discountValue', e.target.value)}
            type="number"
          />
          {errors.discountValue && <p className="text-red-500 text-sm mt-1">{errors.discountValue}</p>}
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Type</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={voucherData.type}
            onChange={(e) => handleChange('type', e.target.value)}
          />
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
        </div>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Min Condition</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={voucherData.min_condition}
            onChange={(e) => handleChange('min_condition', e.target.value)}
            type="number"
          />
          {errors.min_condition && <p className="text-red-500 text-sm mt-1">{errors.min_condition}</p>}
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Max Condition</label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            value={voucherData.max_condition}
            onChange={(e) => handleChange('max_condition', e.target.value)}
            type="number"
          />
          {errors.max_condition && <p className="text-red-500 text-sm mt-1">{errors.max_condition}</p>}
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-4 bg-blue-500 text-white  font-semibold rounded-3xl"
      >
        Submit
      </button>
    </form>
    </div>
       
  
  );
}
