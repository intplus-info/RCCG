import React, { useState } from 'react';
type PaymentFormProps = {
  money: number;
};
const PaymentForm: React.FC<PaymentFormProps> = ({ money }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    country: 'Canada',
    province: 'Ontario',
    postalCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg relative">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-center text-sm text-gray-600 mb-4">
          Please complete your information below.
        </h2>

        <div>
          <label htmlFor="cardHolders" className="block text-sm font-medium text-[#666666] mb-1">Card Holders</label>
          <input
            type="text"
            id="cardHolders"
            name="cardHolders"
            placeholder=""
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-[#666666] mb-1">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            value={formData.cardNumber}
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="expiry" className="block text-sm font-medium text-[#666666] mb-1">Expiry</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              placeholder="MM / YY"
              className="w-full p-3 border border-gray-300 rounded-md text-sm"
              onChange={handleChange}
              value={formData.expiry}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="cvc" className="block text-sm font-medium text-[#666666] mb-1">CVC</label>
            <input
              type="password"
              id="cvc"
              name="cvc"
              placeholder="CVC"
              className="w-full p-3 border border-gray-300 rounded-md text-sm"
              onChange={handleChange}
              value={formData.cvc}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#666666] mb-1">Cell Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Cell Phone"
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#666666] mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-[#666666] mb-1">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            value={formData.address}
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-[#666666] mb-1">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            value={formData.city}
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-[#666666] mb-1">Country</label>
          <select
            id="country"
            name="country"
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            value={formData.country}
          >
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div>
          <label htmlFor="province" className="block text-sm font-medium text-[#666666] mb-1">Province</label>
          <select
            id="province"
            name="province"
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            value={formData.province}
          >
            <option value="Ontario">Ontario</option>
          </select>
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-[#666666] mb-1">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="Postal Code"
            className="w-full p-3 border border-gray-300 rounded-md text-sm"
            onChange={handleChange}
            value={formData.postalCode}
          />
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-bold">{(money)+'$'  || "$30"}</span>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md"
          >
            Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
